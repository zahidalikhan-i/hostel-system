<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResetRequest extends FormRequest
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
            'token' => 'required',
            'email' => [
                'required',
                'email',
                Rule::unique('users', 'email')->whereNull('deleted_at'),
            ],
            'password' => 'required|min:8|max:20',
            'password_confirm' => 'required|same:password',
        ];
    }

    public function messages()
    {
        return [
           
            'email.required' => 'Enter your email',
            'password.required' => 'Enter your  password',
            'password_confirm.required' => 'Enter your  password confirm',
            'password.min' => 'Password must be at least 8 characters.',
            'password.max' => 'Password must be  be less then 20 characters.',
          
        ];
    }
}
