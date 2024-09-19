<?php

namespace App\Http\Controllers\Api;

use App\Models\StudentClass;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateStaffProfilesRequest;
use App\Http\Requests\UpdateStaffProfilesRequest;
use App\Interfaces\StaffProfilesInterface;
use Illuminate\Http\Request;

class StaffProfileController extends Controller
{
    private $staff_profiles_repository;

    public function __construct(StaffProfilesInterface $staff_profiles_interface)
    {
        $this->staff_profiles_repository = $staff_profiles_interface;
    }

    public function index(Request $request)
    {
        try {
            return $this->staff_profiles_repository->getStaffProfiles($request);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function store(CreateStaffProfilesRequest $request)
    {
        try {
            return $this->staff_profiles_repository->create($request);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function update(UpdateStaffProfilesRequest $request, $id)
    {
        try {
            return $this->staff_profiles_repository->update($request, $id);
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
            return $this->staff_profiles_repository->delete($request, $id);
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
            return $this->staff_profiles_repository->getById($request, $id);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

   
}
