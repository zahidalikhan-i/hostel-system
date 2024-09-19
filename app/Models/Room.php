<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $fillable = [ 'room_name', 'occupied_beds','total_beds'];
    
    public function students()
    {
        return $this->hasMany(Student::class);
    }
}


