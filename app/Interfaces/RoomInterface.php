<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface roomInterface
{
    public function getroom(Request $request);
    
    public function create(Request $request);
    
    public function update(Request $request, $id);
    
    public function delete(Request $request, $id);
    
    public function getById(Request $request, $id);
}
