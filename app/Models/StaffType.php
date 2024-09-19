<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class StaffType extends Model
{
    use softDeletes;
    protected $table = "staff_types";
    protected $fillable = [
       
        'staff_title',
        'status',
        'created_by',
        'updated_by',
        'deleted_by',
    ];
}
