<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateFeeSlipRequest;
use App\Http\Requests\UpdateFeeSlipRequest;
use App\Interfaces\FeeSlipInterface;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class FeeSlipController extends Controller
{
    private $feeSlipInterface;

    public function __construct(FeeSlipInterface $feeSlipInterface)
    {
        $this->feeSlipInterface = $feeSlipInterface;
    }

    public function index(Request $request): JsonResponse
    {
        try {
            $feeSlips = $this->feeSlipInterface->getFeeSlips($request);
            return response()->json($feeSlips, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function store(CreateFeeSlipRequest $request): JsonResponse
    {
        try {
            $feeSlip = $this->feeSlipInterface->create($request->validated());
            return response()->json([
                'message' => 'Fee slip created successfully',
                'data' => $feeSlip,
                'status' => 'success'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function update(UpdateFeeSlipRequest $request, $id): JsonResponse
    {
        try {
            $feeSlip = $this->feeSlipInterface->update($request->validated(), $id);
            return response()->json([
                'message' => 'Fee slip updated successfully',
                'data' => $feeSlip,
                'status' => 'success'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        try {
            $this->feeSlipInterface->delete($id);
            return response()->json([
                'message' => 'Fee slip deleted successfully',
                'status' => 'success'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $feeSlip = $this->feeSlipInterface->getById($id);
            return response()->json($feeSlip, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }

    public function searchByName(Request $request)
    {

        try {
            $student = $this->feeSlipInterface->searchByName($request);
            return response()->json($student, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }
}
