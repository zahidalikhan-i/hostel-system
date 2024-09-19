<?php

namespace App\Http\Requests;
use Carbon\Carbon;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateStudentRequest extends FormRequest
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
           
        
            'registration_number' => 'required',
            'roll_number' => 'required|integer|min:1',
            'date_of_birth' => ['required', 'date', function($attribute, $value, $fail) {
                $age = Carbon::parse($value)->age;
                if ($age < 18) {
                    $fail('The date of birth must indicate that the student is at least 18 years old.');
                }
            }],
           
            'mobile_no'=>'required|regex:/^03\d{9}$/',
            'gender' => 'required',
            'address_line1' => 'required|string',
            'address_line2' => 'required|string',
           
            
           
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
          
        ];
    }
}
