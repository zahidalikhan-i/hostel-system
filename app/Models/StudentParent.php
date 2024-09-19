<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class StudentParent extends Model
{
    use SoftDeletes;

    protected $fillable = [
       
        'father_name',
        'father_cnic',
       
        'created_by',
        'updated_by',
        'deleted_by',
    ];
}
