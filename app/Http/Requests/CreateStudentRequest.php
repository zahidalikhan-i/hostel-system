<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Carbon\Carbon;
use Illuminate\Validation\Rule;

class CreateStudentRequest extends FormRequest
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
           
            'first_name' => ['required',
                'regex:/^(?=.*[A-Za-z])([A-Za-z\s]*[A-Za-z\s]*)*$/',
            ],

             'last_name' =>  [
                'sometimes',
                'regex:/^(?=.*[A-Za-z])([A-Za-z\s]*[A-Za-z\s]*)*$/',
            ],

            'registration_number' => 'required',
            'roll_number' => 'required|integer|min:1',
            'date_of_birth' => ['required', 'date', function($attribute, $value, $fail) {
                $age = Carbon::parse($value)->age;
                if ($age < 18) {
                    $fail('The date of birth must indicate that the student is at least 18 years old.');
                }
            }],
             'email' => [
             'required',
                'email',
                Rule::unique('users', 'email')->whereNull('deleted_at'),
             ],

             'password' => 'required',
            'password_confirm' => 'required',
            'mobile_no'=>'required|regex:/^03\d{9}$/',
            'gender' => 'required',
            'address_line1' => 'required|string',
            'address_line2' => 'required|string',
            'room_id' => 'required',
            // 'father_name'=>'required',
            // 'father_cnic'=>'required',
            
           
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            

            'first_name.required' => 'Please enter your first name.',
            'first_name.alpha' => 'First name must only contain alphabetic characters.',
            'last_name.required' => 'Please enter your last name.',
            'last_name.alpha' => 'Last name must only contain alphabetic characters.',
            'registration_number.required' => 'Enter your Registration Number',
            'registration_number.regex' => 'The Registration Number may contain letters, numbers, and special characters.',
            'date_of_birth.required' => 'The Date of Birth is required.',
            'date_of_birth.date' => 'The Date of Birth must be a valid date.',
            'date_of_birth.min_age' => 'The Date of Birth must indicate that the student is at least 18 years old.',
            'roll_number.required' => 'Enter your Roll Number',
            'gender.required' => 'Select your Gender',
            'father_name.required'=>'Enter your father name',
            'father_cnic.required'=>'Enter your cnic num',
            'mobile_1.required' => 'Please enter your primary mobile number.',
           
            'mobile_1.regex' => 'Mobile number must be in the format: 03xxxxxxxxx.',
            'address_line1.required' => 'Enter your Address Line 1',
            'address_line2.required' => 'Enter your Address Line 2',

            'email.required' => 'Email address is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email address is already registered.',
            'password.required' => 'Please enter a password.',
          
            
            'password.min' => 'Password must be at least 8 characters.',
            'password.max' => 'Password cannot be more than 20 characters.',
            'password.regex' => 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.',
            'confirm_password.required_with' => 'Please confirm your password.',
            'room_id.required'=>'please select room name'
           
          
        ];
    }
}


