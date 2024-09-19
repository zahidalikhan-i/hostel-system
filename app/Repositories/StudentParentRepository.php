<?php

namespace App\Repositories;
use App\Interfaces\StudentParentInterface;
use App\Models\StudentParent;

class StudentParentRepository implements StudentParentInterface
{
      
    public function getOptions($request, $id)
    {
        //
    }

    public function getParents($request)
    {
  

        $query = StudentParent::query();

        $records_per_page = $request->get('records_per_page', 20);
        $page = $request->get('page', 1);
        $offset = ($page - 1) * $records_per_page;

        $total_pages = 0;
        $total_records = $query->count();
        if ($total_records > 0) {
            $total_pages = ceil($total_records / $records_per_page);
        }

        $query->offset($offset)->limit($records_per_page);

        if($request->search_query) {
            $query = $query->where('father_cnic',"like", '%'. $request->search_query . '%');
        }
        $parents = $query->get();
        if (!empty($parents) && count($parents) > 0) {
            return response()->json([
                'status' => 'success',
                'parents' => $parents,
                'total_records' => $total_records,
                'records_per_page' => $records_per_page,
                'offset' => $offset,
                'total_pages' => $total_pages,
                'page' => $page,
            ]);
        }

        return response()->json([
            'status' => 'success',
            'parents' => $parents,
            'page' => $page,
        ]);
    }

}
