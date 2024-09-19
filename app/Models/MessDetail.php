<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MessDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'day', 
        'breakfast_time', 
        'break_fast', 
        'lunch_time',
        'lunch', 
        'dinner_time',
        'dinner'
    ];
}
