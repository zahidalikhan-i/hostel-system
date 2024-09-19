<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class StaffProfile extends Model
{   
    use SoftDeletes;
    protected $table = "staff_profiles";

    protected $fillable = [
       
        'user_id',
        
        'staff_cnic',
        'mobile_1',
        'mobile_2',
        'gender',
        'password',
        'confirm_password',
       
        'address',
       
        'created_by',
        'updated_by',
        'deleted_by',
        'status',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
    public function staffType()
    {
        return $this->belongsTo(StaffType::class, 'staff_type_id');
    }
}
