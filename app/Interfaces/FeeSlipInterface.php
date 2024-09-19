<?php
namespace App\Interfaces;

use Illuminate\Http\Request;

interface FeeSlipInterface
{
    public function getFeeSlips( $request);
    
    public function create( $request);

    public function update( $request, $id);

    public function delete( $request, $id);

    public function getById( $request, $id);

    public function searchByName($request);


}
