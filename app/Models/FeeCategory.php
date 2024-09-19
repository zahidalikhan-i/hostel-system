<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FeeCategory extends Model
{   
    use SoftDeletes;
    protected $fillable = [
        
        'category_name',
        'amount',
        'created_by',
        'updated_by',
        'deleted_by',
        'status',
    ];

   public function students()
   {
    return $this->belongToMany(Student::class, 'student_fee_discounts', 'student_id', 'fee_discount_id');
   }
    
    public function studentFeeDiscount()
    {
        return $this->hasMany(StudentFeeDiscount::class, 'fee_discount_id');
    }
}
