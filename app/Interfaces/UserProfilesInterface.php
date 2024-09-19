<?php

namespace App\Interfaces;

interface UserProfilesInterface
{
    public function getUserProfiles($request);
    public function create($request);
    public function update($request, $id);
    public function getById($request, $id);
    public function delete($request, $id);

}
