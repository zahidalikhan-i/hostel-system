<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateStaffProfilesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|alpha',
            'last_name' => 'required|alpha',
            'staff_cnic' => [
                'required',
                'regex:/^\d{5}-\d{7}-\d$/',
                Rule::unique('staff_profiles', 'staff_cnic')->whereNull('deleted_at'),
            ],
            'mobile_1' => 'required|regex:/^03\d{9}$/',
            'mobile_2' => 'required|regex:/^03\d{9}$/',
            'gender' => 'required|in:Male,Female', // Adjust 'Male' and 'Female' as per your options
            'email' => [
                'required',
                'email',
                Rule::unique('users', 'email')->whereNull('deleted_at'),
            ],
            
            'password' => 'required',
            'password_confirm' => 'required',
          
            'address' => 'required',
            'staff_type' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'first_name.required' => 'Please enter your first name.',
            'first_name.alpha' => 'First name must only contain alphabetic characters.',
            'last_name.required' => 'Please enter your last name.',
            'last_name.alpha' => 'Last name must only contain alphabetic characters.',
            'staff_cnic.required' => 'Staff CNIC is required.',
            'staff_cnic.unique' => 'Staff CNIC must be unique.',
            'staff_cnic.regex' => 'Staff CNIC must be in the format: 12345-1234567-1.',
            'mobile_1.required' => 'Please enter your primary mobile number.',
            'mobile_2.required' => 'Please enter your permanent mobile number.',
            'mobile_1.regex' => 'Mobile number must be in the format: 03xxxxxxxxx.',
            'mobile_2.regex' => 'Mobile number must be in the format: 03xxxxxxxxx.',
            'gender.required' => 'Please select your gender.',
            'gender.in' => 'Gender must be either Male or Female.',
            'email.required' => 'Email address is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email address is already registered.',
            'password.required' => 'Please enter a password.',
            'password_confirm.required' => 'Please enter the confirm  password.',
            
            'password.min' => 'Password must be at least 8 characters.',
            'password.max' => 'Password cannot be more than 20 characters.',
            'password.regex' => 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.',
            'confirm_password.required_with' => 'Please confirm your password.',
          
            'address.required' => 'Please enter your address.',
            'staff_type.required'=>'please select the staff type'
        ];
    }
}
