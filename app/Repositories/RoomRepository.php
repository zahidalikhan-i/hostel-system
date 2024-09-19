<?php

namespace App\Repositories;

use App\Interfaces\RoomInterface;
use App\Models\Room;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class RoomRepository implements RoomInterface
{
    public function getroom(Request $request)
    {
        $query = Room::orderBy('room_name', 'asc');

        $records_per_page = $request->get('records_per_page', 20);
        $page = $request->get('page', 1);
        $offset = ($page - 1) * $records_per_page;

        $total_pages = 0;
        $total_records = $query->count();
        if ($total_records > 0) {
            $total_pages = ceil($total_records / $records_per_page);
        }

        $room = $query->offset($offset)->limit($records_per_page)->get();

        return Response::json([
            'status' => 'success',
            'room' => $room,
            'total_records' => $total_records,
            'records_per_page' => $records_per_page,
            'offset' => $offset,
            'total_pages' => $total_pages,
            'page' => $page,
        ]);
    }

    public function create(Request $request)
    {
        $user = $request->user();
        
        $data = $request->all();
       
        $data['created_by'] = $user->id;
        $data['status']= $request->input('status', 1);

        $room = Room::create($data);

        return Response::json([
            'room' => $room,
            'status' => 'success',
            'message' => 'Room created successfully!'
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $user = $request->user();
    
        $room = Room::findOrFail($id);
    
        if (!$room) {
            throw new \Exception('You are trying to update an invalid room.');
        }
    
        $data = $request->all();
      
        $room->update([
            'room_name' => $data['room_name'],
            'occupied_beds' => $data['occupied_beds'],
           'total_beds' => $data['total_beds'],
            
            'updated_by' => $user->id,
        ]);
    
        return Response::json([
            'room' => $room,
            'status' => 'success'
        ], 200);
    }

    public function delete(Request $request, $id)
    {
        $user = $request->user();
         
        $room = Room::findOrFail($id);
        if (!$room) {
            throw new \Exception('Room not found.');
        }
        
        //$room->deleted_by = $user->id;
        $room->save();
         
        $room->delete();
         
        return Response::json([
            'status' => 'success',
            'message' => 'Room deleted successfully'
        ], 200);
    }

    public function getById(Request $request, $id)
    {
        $room = Room::findOrFail($id);
        
        if (!$room) {
            throw new \Exception('Room not found.');
        }

        return Response::json([
            'status' => 'success',
            'room' => $room,
        ]);
    }
}
