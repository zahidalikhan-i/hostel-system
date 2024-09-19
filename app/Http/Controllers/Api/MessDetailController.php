<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateMessDetailRequest;
use App\Http\Requests\UpdateMessDetailRequest;
use App\Interfaces\MessDetailInterface;
use Illuminate\Http\Request;

class MessDetailController extends Controller
{
    private $mess_detail_repository;

    public function __construct(MessDetailInterface $mess_detail_interface)
    {
        $this->mess_detail_repository = $mess_detail_interface;
    }

    public function index(Request $request)
    {
        try {
            return $this->mess_detail_repository->getMessDetail($request);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function store(CreateMessDetailRequest $request)
    {
        try {
            return $this->mess_detail_repository->create($request);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function update(UpdateMessDetailRequest $request, $id)
    {
        try {
            return $this->mess_detail_repository->update($request, $id);
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
            return $this->mess_detail_repository->delete($request, $id);
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
            return $this->mess_detail_repository->getById($request, $id);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }
}
