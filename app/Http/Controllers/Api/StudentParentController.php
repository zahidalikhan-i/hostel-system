<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Interfaces\StudentParentInterface;
use Illuminate\Http\Request;

class StudentParentController extends Controller
{
    private $student_Parent_repository;

    public function __construct(StudentParentInterface $student_Parent_repository)
    {
        $this->student_Parent_repository= $student_Parent_repository;
    }

    public function index(Request $request)
    {
        try {
            return $this->student_Parent_repository->getParents($request);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'failed'
            ], 500);
        }
    }
}
