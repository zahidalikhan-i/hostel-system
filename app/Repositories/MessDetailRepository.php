<?php

namespace App\Repositories;

use App\Interfaces\MessDetailInterface;
use App\Models\MessDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class MessDetailRepository implements MessDetailInterface
{
    public function getMessDetail( $request)
    {
        // Ensure to order by a valid column, such as 'id' or another existing column
        $query = MessDetail::orderBy('id', 'asc');

        $records_per_page = $request->get('records_per_page', 20);
        $page = $request->get('page', 1);
        $offset = ($page - 1) * $records_per_page;

        $total_records = $query->count();
        $total_pages = $total_records > 0 ? ceil($total_records / $records_per_page) : 0;

        $mess_detail = $query->offset($offset)->limit($records_per_page)->get();

        return response()->json([
            'status' => 'success',
            'mess_details' => $mess_detail,
            'total_records' => $total_records,
            'records_per_page' => $records_per_page,
            'offset' => $offset,
            'total_pages' => $total_pages,
            'page' => $page,
        ]);
    }

    public function create( $request)
    {
        $user = $request->user();
        
        $data = $request->all();
        $data['created_by'] = $user->id;
        $data['status'] = $request->input('status', 1);

        $mess_detail = MessDetail::create($data);

        return response()->json([
            'mess_detail' => $mess_detail,
            'status' => 'success',
            'message' => 'Mess Detail created successfully!'
        ], 201);
    }

    public function update( $request, $id)
    {
        $user = $request->user();
        $mess_detail = MessDetail::findOrFail($id);
    
        $data = $request->all();
      
        $mess_detail->update([
            'day' => $data['day'],
            'breakfast_time' => $data['breakfast_time'],
            'break_fast' => $data['break_fast'],
            'lunch_time' => $data['lunch_time'],
            'lunch' => $data['lunch'],
            'dinner_time' => $data['dinner_time'],
            'dinner' => $data['dinner'],
            'updated_by' => $user->id,
        ]);
    
        return response()->json([
            'mess_detail' => $mess_detail,
            'status' => 'success'
        ], 200);
    }

    public function delete( $request, $id)
    {
        $user = $request->user();
        $mess_detail = MessDetail::findOrFail($id);
        
        //$mess_detail->deleted_by = $user->id;
        $mess_detail->save();
        $mess_detail->delete();
         
        return response()->json([
            'status' => 'success',
            'message' => 'Mess Detail deleted successfully'
        ], 200);
    }

    public function getById( $request, $id)
    {
        $mess_detail = MessDetail::findOrFail($id);

        return response()->json([
            'status' => 'success',
            'mess_detail' => $mess_detail,
        ]);
    }
}
