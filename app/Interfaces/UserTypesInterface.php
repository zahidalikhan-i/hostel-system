<?php

namespace App\Interfaces;
use Illuminate\Http\Request;
interface  UserTypesInterface
{
    public function getUserTypes($request);
    public function create($request);
    public function update($request, $id);
    public function getById($request, $id);
    public function delete($request, $id);

}
