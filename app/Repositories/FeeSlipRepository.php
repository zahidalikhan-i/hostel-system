<?php

namespace App\Repositories;

use App\Interfaces\FeeSlipInterface;
use App\Models\FeeSlip;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;

class FeeSlipRepository implements FeeSlipInterface
{
    public function getFeeSlips( $request)
    {
        $query = FeeSlip::orderBy('created_at', 'desc');

        $recordsPerPage = $request->get('records_per_page', 20);
        $page = $request->get('page', 1);
        $offset = ($page - 1) * $recordsPerPage;

        $totalPages = 0;
        $totalRecords = $query->count();
        if ($totalRecords > 0) {
            $totalPages = ceil($totalRecords / $recordsPerPage);
        }

        $query->offset($offset)->limit($recordsPerPage);

        $feeSlips = $query->get();

        return response()->json([
            'status' => 'success',
            'fee_slips' => $feeSlips,
            'total_records' => $totalRecords,
            'records_per_page' => $recordsPerPage,
            'offset' => $offset,
            'total_pages' => $totalPages,
            'page' => $page,
        ]);
    }

    public function create( $request)
    {
        $user = $request->user();
        
        $data = $request->all();
        // Assuming you have 'hostel_fee' and 'mess_fee' in your request data
        $data['created_by'] = $user->id;
        $feeSlip = FeeSlip::create($data);
        

        return response()->json([
            'fee_slip' => $feeSlip,
            'status' => 'success',
            'message' => 'Fee Slip created successfully!'
        ], 201);
    }

    public function update( $request, $id)
    {
        $user = $request->user();
        $feeSlip = FeeSlip::findOrFail($id);

        $data = $request->all();

        // Assuming you have 'hostel_fee' and 'mess_fee' in your request data
        $data['updated_by'] = $user->id;

        $feeSlip->update($data);

        return response()->json([
            'fee_slip' => $feeSlip,
            'status' => 'success'
        ], 200);
    }

    public function delete( $request, $id)
    {
        $user = $request->user();

        $feeSlip = FeeSlip::findOrFail($id);
        $feeSlip->deleted_by = $user->id;
        $feeSlip->save();

        $feeSlip->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Fee Slip deleted successfully'
        ], 200);
    }

    public function getById( $request, $id)
    {
        $feeSlip = FeeSlip::findOrFail($id);

        return response()->json([
            'status' => 'success',
            'fee_slip' => $feeSlip,
        ]);
    }


    public function searchByName( $request)
    {
        $query = Student::where('status', 1)->with('user', 'rooms', 'parent');

        $search_term = $request->get('searchTerm');
        $search_type = $request->get('searchType');

        if ($search_term) {
            if ($search_type == 'studentName') {
                $query->whereHas('user', function ($query) use ($search_term) {
                    $query->whereRaw("CONCAT(first_name, ' ', last_name) LIKE ?", ['%' . $search_term . '%']);
                });
            } elseif ($search_type == 'studentRollNumber') {
                $query->where('roll_number', 'like', '%' . $search_term . '%');
            }
        }

        return response()->json([
            'status' => 'success',
            'students' => $students,
        ]);
    }

}       
    
