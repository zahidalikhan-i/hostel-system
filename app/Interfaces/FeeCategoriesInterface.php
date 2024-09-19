<?php

namespace App\Interfaces;
interface  FeeCategoriesInterface
{
    public function getFeeCategories($request);
    public function create($request);
    public function update($request, $id);
    public function getById($request, $id);
    public function delete($request, $id);

}
