<?php

namespace App\Repositories;
use App\Interfaces\FeeCategoriesInterface;
use App\Models\FeeCategory;
use App\Models\User;


class FeeCategoriesRepository implements FeeCategoriesInterface
{
    
   
    public function getFeeCategories($request)
    {
       
        $query = FeeCategory::orderBy('category_name', 'asc');

        $records_per_page = $request->get('records_per_page', 20);
        $page = $request->get('page', 1);
        $offset = ($page - 1) * $records_per_page;

        $total_pages = 0;
        $total_records = $query->count();
        if ($total_records > 0) {
            $total_pages = ceil($total_records / $records_per_page);
        }

        $query->offset($offset)->limit($records_per_page);

        $fee_categories = $query->get();

        if (!empty($fee_categories) && count($fee_categories) > 0) {
            return response()->json([
                'status' => 'success',
                'fee_categories' => $fee_categories,
                'total_records' => $total_records,
                'records_per_page' => $records_per_page,
                'offset' => $offset,
                'total_pages' => $total_pages,
                'page' => $page,
            ]);
        }

        return response()->json([
            'status' => 'success',
            'fee_categories' => $fee_categories,
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
        $fee_categories = FeeCategory::create($data);


        return response()->json([
            'fee_categories' => $fee_categories,
            'status' => 'success',
            'message' => 'Fee Category created successfully!'
        ], 201);
    }
   

    public function update($request, $id)
    {
        $user = $request->user();
         
         $fee_category = FeeCategory::findOrFail($id);
    
    
        $data = $request->all();
       
        $fee_category_data = [
            'category_name' => $data['category_name'],
            'amount' => $data['amount'],
            'status' => '1',
            'updated_by' => $user->id,
        ];
    
        $fee_category->update($fee_category_data);
    
        return response()->json([
            'feeCategory' => $fee_category,
            'status' => 'success'
        ], 200);
    }

    public function delete($request, $id)
    {
        $user = $request->user();
         
        $fee_categories= FeeCategory::findOrFail($id);
        if (!$fee_categories) {
            throw new \Exception('fee Category not found.');
        }
        $fee_categories->deleted_by = $user->id;
        $fee_categories->save();
         
        $fee_categories->delete();
         
        
        return response()->json([
            'status' => 'success',
            'message' => 'class deleted successfully'
        ], 200);
    }

    public function getById($request, $id)
    {
        
        $fee_categories = FeeCategory::findOrFail($id);
        // dd($request);
        if (!$fee_categories) {
            throw new \Exception('Fee Category  not found.');
        }

        return response()->json([
            'status' => 'success',
            'fee_categories' => $fee_categories,
        ]);
    }
}
