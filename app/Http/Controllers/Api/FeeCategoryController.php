<?php

namespace App\Http\Controllers\Api;

use App\Models\FeeCategory;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateFeeCategoriesRequest;
use App\Http\Requests\UpdateFeeCategoriesRequest;
use App\Interfaces\FeeCategoriesInterface;
use Illuminate\Http\Request;

class FeeCategoryController extends Controller
{
    private $fee_categories_repository;

    public function __construct(FeeCategoriesInterface $fee_categories_interface)
    {
        $this->fee_categories_repository = $fee_categories_interface;
    }

    public function index(Request $request)
    {
        try {
            return $this->fee_categories_repository->getFeeCategories($request);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function store(CreateFeeCategoriesRequest $request)
    {
        try {
            return $this->fee_categories_repository->create($request);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function update(UpdateFeeCategoriesRequest $request, $id)
    {
        try {
            
            return $this->fee_categories_repository->update($request, $id);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }
   

    public function destroy(Request $request, $id)
    {
        try {
            return $this->fee_categories_repository->delete($request, $id);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function show(Request $request, $id)
    {
        try {
            return $this->fee_categories_repository->getById($request, $id);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

}
