<?php 

namespace App\Helpers;

use App\Models\Permission;
use App\Models\Role;
use App\Models\RolePermission;

class PermissionHelper
{
    public static function check($permission, $user)
    {
        $permissions = $user->role->permissions;
        foreach ($permissions as $key => $value) {
            if ($value->name == $permission) {
                return true;
            }
        }
        return false;
    }
}
