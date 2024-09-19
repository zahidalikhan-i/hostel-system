<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RegisterRequest extends FormRequest
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
            'first_name' => 'required|string|alpha',
            'last_name' => 'required|alpha|string',
            'email' => [
                'required',
                'email',
                Rule::unique('users', 'email')->whereNull('deleted_at'),
            ],
            'password' => 'required|min:8|max:20',
            'password_confirm' => 'required|same:password',
            //  'user_type' => 'required|string',
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
          
           
           'first_name.required' => 'enter your first name',
           'last_name.required' => 'enter your last name',
           'email.required' => 'Enter your email',
           'password.required' => 'Enter your  password',
           'password_confirm.required' => 'Enter your  password confirm',
           'password.min' => 'Password must be at least 8 characters.',
           'password.max' => 'Password must be  be less then 20 characters.',
         
       ];
   }
}


