<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, HasApiTokens, SoftDeletes;

    protected $appends = ['must_verify_email'];

    protected $fillable = [
        'user_type',
        'user_type_id',
        'student_id',
        'first_name',
        'last_name',
        'email',
        'phone_number',
        'password',
    ];
    
    
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail); // or your custom notification class
    }




   

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getMustVerifyEmailAttribute()
    {
        return config('auth.must_verify_email');
    }

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id', 'id');
    }

    public function userProfile()
    {
        return $this->belongsTo(UserProfile::class,'user_id');
    }

    public function userType()
    {
        return $this->belongsTo(UserType::class, 'user_type_id');
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (is_null($model->user_type)) {
                $model->user_type = 'default_type';
            }
        });
        
    }
}
