<?php

namespace App\Repositories;
use App\Interfaces\StaffProfilesInterface;
use App\Models\Student;
use App\Models\User;
use App\Models\StaffProfile;
use App\Models\StaffType;
use Illuminate\Support\Facades\DB;

class StaffProfilesRepository implements StaffProfilesInterface
{
    
   
    public function getStaffProfiles($request)
    {
        // $query = User::where('status', 1);
        $query = StaffProfile::with(['user', 'staffType'])->orderBy('user_id', 'asc');

        $records_per_page = $request->get('records_per_page', 20);
        $page = $request->get('page', 1);
        $offset = ($page - 1) * $records_per_page;

        $total_pages = 0;
        $total_records = $query->count();
        if ($total_records > 0) {
            $total_pages = ceil($total_records / $records_per_page);
        }

        $query->offset($offset)->limit($records_per_page);

        $staff_profiles = $query->with('user')->get();

        if (!empty($staff_profiles) && count($staff_profiles) > 0) {
            return response()->json([
                'status' => 'success',
                'staff_profiles' => $staff_profiles,
                'total_records' => $total_records,
                'records_per_page' => $records_per_page,
                'offset' => $offset,
                'total_pages' => $total_pages,
                'page' => $page,
            ]);
        }

        return response()->json([
            'status' => 'success',
            'staff' => $staff_profiles,
            'page' => $page,
        ]);
    }

    public function create($request)
{
    try {
        // Validate input data
     
        DB::beginTransaction();
        $user = $request->user();
        $data = $request->all();

        // Create User record
        $userData = [
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'staff_type_id' => StaffType::where('staff_title', $data['staff_type'])->value('id'),
            'password' => bcrypt('12345678'),
            'user_type' => $data['staff_type'],
        ];
        $userRecord = User::create($userData);

        // Create Staff Profile record
        $staffData = [
            'user_id' => $userRecord->id,
            'staff_cnic' => $data['staff_cnic'],
            'gender' => $data['gender'],
            'mobile_1' => $data['mobile_1'],
            'mobile_2' => $data['mobile_2'],
            'status' => '1',
            'address' => $data['address'],
            'created_by' => $user->id,
            'updated_by' => $user->id,
        ];
        $staffProfile = StaffProfile::create($staffData);

        DB::commit();

        return response()->json([
            'staff' => $staffProfile,
            'status' => 'success',
            'message' => 'Staff added successfully!',
        ], 201);
    } catch (\Illuminate\Validation\ValidationException $e) {
        // Return validation errors
        return response()->json([
            'status' => 'failed',
            'message' => 'The given data was invalid.',
            'errors' => $e->errors(),
        ], 422);
    } catch (\Exception $e) {
        DB::rollBack();

        return response()->json([
            'status' => 'failed',
            'message' => 'Failed to add staff. Please try again.',
            'error' => $e->getMessage(),
        ], 500);
    }
}


   

    public function update($request, $id)
    {
        DB::beginTransaction();
    
        try {
            $data = $request->all();
            $staff = StaffProfile::findOrFail($id);
            $userData = $data['user'];
            
            if (!$staff) {
                throw new \Exception('You are trying to update an invalid staff.');
            }
    
            $userRecord = User::find($staff->user_id);
    
            if ($userRecord) {
               
                $userRecord->first_name = $userData['first_name'];
                $userRecord->last_name = $userData['last_name'];
                $userRecord->email = $userData['email'];
                
                
                if (!empty($userData['password'])) {
                    $userRecord->password = Hash::make($userData['password']);
                }
    
                $userRecord->save();
            }
    
            $staff_data = [
                'staff_cnic' => $data['staff_cnic'],
                'gender' => $data['gender'],
                'mobile_1' => $data['mobile_1'],
                'mobile_2' => $data['mobile_2'],
                'status' => '1',
                'address' => $data['address'],
                'updated_by' => $userRecord->id,
            ];
    
            $staff->update($staff_data);
    
            DB::commit();
    
            return response()->json([
                'staff' => $staff,
                'status' => 'success'
            ], 200);
        } catch (\Exception $e) {
            DB::rollBack();
    
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update staff. Please try again.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    

    public function delete($request, $id)
    {
        try {
            $user = $request->user();
            
            // Find the staff profile record
            $staffProfile = StaffProfile::findOrFail($id);
            
            
            // Mark the staff profile as deleted by the current user and delete it
            $staffProfile->deleted_by = $user->id;
            $staffProfile->save(); // Save the updated deleted_by field before deletion
            $staffProfile->delete();
            
            return response()->json([
                'status' => 'success',
                'message' => 'Profile deleted successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete profile. Please try again.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    
    


    public function getById($request, $id)
    {
        
        $staff = StaffProfile::with('user')->findOrFail($id);
     
        if (!$staff) {
            throw new \Exception('staff not found.');
        }

        return response()->json([
            'status' => 'success',
            'staff' => $staff,
        ]);
    }
}
