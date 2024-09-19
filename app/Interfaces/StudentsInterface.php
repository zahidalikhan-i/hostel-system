<?php

namespace App\Interfaces;

use App\Models\Student;
interface StudentsInterface
{
    public function getstudents($request);
    public function create($request);
    public function update($request, $id);
    public function getById($request, $id);
    public function delete($request, $id);
    public function getAllData($request);
    public function getStudentsData($request);

}
