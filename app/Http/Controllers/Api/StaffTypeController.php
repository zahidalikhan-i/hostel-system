<?php

namespace App\Http\Controllers\Api;

use App\Models\StudentParent;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateStaffTypesRequest;
use App\Http\Requests\UpdateStaffTypesRequest;
use App\Interfaces\StaffTypesInterface;
use Illuminate\Http\Request;

class StaffTypeController extends Controller
{
    private $staff_types_repository;

    public function __construct(StaffTypesInterface $staff_types_interface)
    {
        $this->staff_types_repository = $staff_types_interface;
    }

    public function index(Request $request)
    {
        try {
            return $this->staff_types_repository->getStaffTypes($request);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function store(CreateStaffTypesRequest $request)
    {
        try {
            return $this->staff_types_repository->create($request);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function update(UpdateStaffTypesRequest $request, $id)
    {
        try {
            return $this->staff_types_repository->update($request, $id);
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
            return $this->staff_types_repository->delete($request, $id);
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
            return $this->staff_types_repository->getById($request, $id);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }
}
