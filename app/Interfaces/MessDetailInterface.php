<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface MessDetailInterface
{
    public function getMessDetail( $request);

    public function create( $request);

    public function update( $request, $id);

    public function delete( $request, $id);

    public function getById( $request, $id);
}
