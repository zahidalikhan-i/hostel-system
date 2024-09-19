<?php

namespace App\Repositories;
use App\Interfaces\StaffTypesInterface;
use App\Models\StaffType;
use App\Models\User;


class StaffTypesRepository implements StaffTypesInterface
{
    
   
    public function getStaffTypes($request)
    {
       
        $query = StaffType::orderBy('staff_title', 'asc');

        $records_per_page = $request->get('records_per_page', 20);
        $page = $request->get('page', 1);
        $offset = ($page - 1) * $records_per_page;

        $total_pages = 0;
        $total_records = $query->count();
        if ($total_records > 0) {
            $total_pages = ceil($total_records / $records_per_page);
        }

        $query->offset($offset)->limit($records_per_page);

        $staff_types = $query->get();

        if (!empty($staff_types) && count($staff_types) > 0) {
            return response()->json([
                'status' => 'success',
                'staff_types' => $staff_types,
                'total_records' => $total_records,
                'records_per_page' => $records_per_page,
                'offset' => $offset,
                'total_pages' => $total_pages,
                'page' => $page,
            ]);
        }

        return response()->json([
            'status' => 'success',
            'staff_types' => $staff_types,
            'page' => $page,
        ]);
    }

    public function create($request)
    {
        $user = $request->user();

        $data = $request->all();

        $data['school_id'] = $user->school_id;
        $data['created_by'] = $user->id;
        $data['status']  = 1;
        $staff_type = StaffType::create($data);


        return response()->json([
            'staff_type' => $staff_type,
            'status' => 'success',
            'message' => 'Staff Type created successfully!'
        ], 201);
    }
   

    public function update($request, $id)
    {
        $user = $request->user();
    
        $staff_type = StaffType::findOrFail($id);
    
        if (!$staff_type) {
            throw new \Exception('You are trying to update an invalid Staff Type.');
        }
    
        $data = $request->all();
      
       
        $staff_data = [
            'staff_title' => $data['staff_title'],
            'status' => '1',
            'updated_by' => $user->id,
        ];
        
        $staff_type->update($staff_data);
    
        return response()->json([
            'subject' => $staff_type,
            'status' => 'success'
        ], 200);
    }

    public function delete($request, $id)
    {
        $user = $request->user();
         
        $staff_type= StaffType::findOrFail($id);
        if (!$staff_type) {
            throw new \Exception('Subject not found.');
        }
        $staff_type->deleted_by = $user->id;
        $staff_type->save();
         
        $staff_type->delete();
         
        
        return response()->json([
            'status' => 'success',
            'message' => 'Staff Type deleted successfully'
        ], 200);
    }

    public function getById($request, $id)
    {
        
        $staff_type = StaffType::findOrFail($id);
        // dd($request);
        if (!$staff_type) {
            throw new \Exception('Saff Type not found.');
        }

        return response()->json([
            'status' => 'success',
            'staff_type' => $staff_type,
        ]);
    }
}
