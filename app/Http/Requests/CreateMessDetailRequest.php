<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateMessDetailRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'day' => 'required|string|max:255',
            'breakfast_time' =>'required|string',
            'break_fast' => 'required|string|max:255',
            'lunch_time' => 'required|string',
               
            'lunch' => 'required|string|max:255',
            'dinner_time' =>'required|string',
            'dinner' => 'required|string|max:255',
        ];
    }

    public function messages()
    {
        return [
            'day.required' => 'The day field is required.',
            'breakfast_time.required' => 'The breakfast time field is required.',

            'break_fast.required' => 'The breakfast field is required.',
            'lunch_time.required' => 'The lunch time field is required.',
            
            'lunch.required' => 'The lunch field is required.',
            'dinner_time.required' => 'The dinner time field is required.',
           
            'dinner.required' => 'The dinner field is required.',
        ];
    }
}
