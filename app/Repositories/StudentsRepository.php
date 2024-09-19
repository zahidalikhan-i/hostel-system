<?php

namespace App\Repositories;

use App\Interfaces\StudentsInterface;
use App\Models\Student;
use App\Models\StudentParent;
use App\Models\User;
use App\Models\Room;
use App\Models\MessDetail;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class StudentsRepository implements StudentsInterface
{
    public function getStudents($request)
    {
        $query = Student::where('status', 1)->with('user', 'rooms', 'parent');

        $search_term = $request->get('searchTerm');
        $search_type = $request->get('searchType');

        if ($search_term) {
            if ($search_type == 'studentName') {
                $query->whereHas('user', function ($query) use ($search_term) {
                    $query->whereRaw("CONCAT(first_name, ' ', last_name) LIKE ?", ['%' . $search_term . '%']);
                });
            } elseif ($search_type == 'studentFatherName') {
                $query->whereHas('parent', function ($query) use ($search_term) {
                    $query->where('father_name', 'like', '%' . $search_term . '%');
                });
            } elseif ($search_type == 'studentFatherCnic') {
                $query->whereHas('parent', function ($query) use ($search_term) {
                    $query->where('father_cnic', 'like', '%' . $search_term . '%');
                });
            }
        }

        $records_per_page = $request->get('records_per_page', 20);
        $page = $request->get('page', 1);
        $offset = ($page - 1) * $records_per_page;

        $total_records = $query->count();
        $total_pages = $total_records > 0 ? ceil($total_records / $records_per_page) : 0;

        $students = $query->offset($offset)
            ->limit($records_per_page)
            ->get();

        return response()->json([
            'status' => 'success',
            'students' => $students,
            'total_records' => $total_records,
            'records_per_page' => $records_per_page,
            'offset' => $offset,
            'total_pages' => $total_pages,
            'page' => $page,
        ]);
    }

    public function create($request)
    {
        DB::beginTransaction();

        try {
            $user = $request->user();
            $data = $request->all();
            $parent = $request->get('parent', []);

            // Create Student Parent record
            $parent_data = StudentParent::create($parent);

            // Format date_of_birth if provided
            if (isset($data['date_of_birth'])) {
                $data['date_of_birth'] = Carbon::parse($data['date_of_birth'])->format('Y-m-d');
            }

            // Create User record
            $userData = [
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'user_type' => $data['user_type'] ?? 'student', // Default to 'student' if not provided
            ];
            $userRecord = User::create($userData);

            // Create Student record
            $studentData = [
                'registration_number' => $data['registration_number'],
                'roll_number' => $data['roll_number'],
                'date_of_birth' => $data['date_of_birth'],
                'gender' => $data['gender'],
                'address_line1' => $data['address_line1'],
                'address_line2' => $data['address_line2'],
                'mobile_no' => $data['mobile_no'],
                'parent_id' => $parent_data->id,
                'room_id' => $data['room_id'],
                'status' => 1,
                'user_id' => $userRecord->id,
                'created_by' => $user->id,
            ];
            $student = Student::create($studentData);

            // Update room occupancy
            $room = Room::find($data['room_id']);
            if ($room) {
                $room->occupied_beds += 1; // Increment occupied_bed by 1
                $room->save();
            }

            // Link user to student
            $userRecord->student_id = $student->id;
            $userRecord->save();

            DB::commit();

            return response()->json([
                'student' => $student,
                'status' => 'success',
                'message' => 'Student added successfully!',
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'status' => 'error',
                'message' => 'Failed to add student. Please try again.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function update($request, $id)
    {
        DB::beginTransaction();
    
        try {
            $data = $request->all();
            $student = Student::findOrFail($id);
            $parentData = $data['parent'];
            $userData = $data['user'];
    
            // Update or create new parent if necessary
            $existingParent = StudentParent::where('father_cnic', $parentData['father_cnic'])->first();
            if ($existingParent) {
                $existingParent->update($parentData);
            } else {
                $existingParent = StudentParent::create($parentData);
            }
    
            // Update user data if provided
            $userRecord = User::find($student->user_id);
            if ($userRecord) {
                $userRecord->first_name = $userData['first_name'];
                $userRecord->last_name = $userData['last_name'];
                $userRecord->email = $userData['email'];
                $userRecord->save(); // Save the updated user record
            }
    
            // Check if room assignment has changed
            if ($student->room_id !== $data['room_id']) {
                // Get previous room and update occupancy
                $previousRoom = Room::find($student->room_id);
                if ($previousRoom) {
                    $previousRoom->occupied_beds -= 1; // Decrease occupied_bed count
                    $previousRoom->save();
                }
    
                // Get updated room and update occupancy
                $updatedRoom = Room::find($data['room_id']);
                if ($updatedRoom) {
                    $updatedRoom->occupied_beds += 1; // Increase occupied_bed count
                    $updatedRoom->save();
                }
            }
    
            // Prepare student data for update
            $studentData = [
                'registration_number' => $data['registration_number'],
                'roll_number' => $data['roll_number'],
                'date_of_birth' => Carbon::parse($data['date_of_birth'])->format('Y-m-d'),
                'gender' => $data['gender'],
                'address_line1' => $data['address_line1'],
                'address_line2' => $data['address_line2'],
                'mobile_no' => $data['mobile_no'],
                'parent_id' => $existingParent->id,
                'room_id' => $data['room_id'],
                'status' => $data['status'] ?? $student->status, // Use existing status if not provided
                'updated_by' => $request->user()->id,
            ];
    
            // Perform the student update
            $student->update($studentData);
    
            DB::commit();
    
            return response()->json([
                'student' => $student,
                'status' => 'success',
                'message' => 'Student updated successfully!',
            ], 200);
        } catch (\Exception $e) {
            DB::rollBack();
    
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update student. Please try again.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    

    public function delete($request, $id)
    {
        DB::beginTransaction();

        try {
            $user = $request->user();
            $student = Student::findOrFail($id);

            // Update deleted_by field and save before deletion
            $student->deleted_by = $user->id;
            $student->save();

            // Retrieve the room assigned to the student
            $assignedRoom = Room::find($student->room_id);

            // Delete the student record
            $student->delete();

            // If the assigned room exists, decrease its occupied_bed count
            if ($assignedRoom) {
                $assignedRoom->occupied_beds -= 1;
                $assignedRoom->save();
            }

            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'Student deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete student. Please try again.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function getById($request, $id)
    {
        $student = Student::with('user', 'rooms', 'parent')->findOrFail($id);

        return response()->json([
            'status' => 'success',
            'student' => $student,
        ]);
    }

    public function getAllData($request)
    {
        $user = $request->user();

        if (!isset($user->student_id)) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Student ID not found for the authenticated user',
            ], 400);
        }

        $studentId = $user->student_id;
        $student = Student::where('id', $studentId)->with('user', 'rooms', 'parent')->first();

        if (!$student) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Student not found',
            ], 404);
        }

        $mess_query = MessDetail::all();

        return response()->json([
            'status' => 'success',
            'mess_data' => $mess_query,
            'student' => $student,
        ]);
    }

    public function getStudentsData($request)
    {
        // No need to check for authenticated user's student ID
    
        $students = Student::with('user', 'rooms', 'parent')->get();
    
        if ($students->isEmpty()) {
            return response()->json([
                'status' => 'failed',
                'message' => 'No students found',
            ], 404);
        }
    
        return response()->json([
            'status' => 'success',
            'students' => $students,
        ]);
    }
    
    

    public function getDashboardData()
    {
      
        $totalStudents = Student::count();
        
        $availableRooms = Room::whereRaw('total_beds > occupied_beds')->count();
    
        $occupiedRooms = Room::whereRaw('total_beds = occupied_beds')->count();
    
      
        $students = Student::with(['rooms', 'user' => function ($query) {
            $query->select('id', 'first_name', 'last_name'); // Select the user's id, first_name, and last_name
        }])->get();
    
        $rooms = Room::all(); // Fetch all rooms
    
        return response()->json([
            'status' => 'success',
            'data' => [
                'total_students' => $totalStudents,
                'available_rooms' => $availableRooms,
                'occupied_rooms' => $occupiedRooms,
                'students' => $students,
                'rooms' => $rooms,
            ],
        ]);
    }
}
