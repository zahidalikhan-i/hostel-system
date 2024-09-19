<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'registration_number',
         'roll_number', 
         'date_of_birth',
          'gender',
            'address_line1', 
            'address_line2',
            'parent_id', 
            'room_id',
            'mobile_no',
            'status', 
            'user_id',
         
         'created_by', 
         'updated_by'
    ];

  
    // Other model properties and methods...

    public function user()
    {
        return $this->belongsTo(User::class);
    }
   

    public function parent()
    {
        return $this->belongsTo(StudentParent::class);
    }
    public function room()
    {
        return $this->belongsTo(Room::class, 'room_id');
    }

    public function rooms()
    {
        return $this->belongsTo(Room::class,'room_id','id');
    }
}
