<?php

namespace App\Http\Requests;
use Illuminate\Validation\Rule;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRoomRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    public function rules()
    {
        return [
            
          'room_name' => [
                'sometimes',
                'regex:/^(?=.*[A-Za-z])([A-Za-z\s]*[1-9][0-9]*[A-Za-z\s]*)*$/',
            ],


            'occupied_beds' => 'required|integer|min:0',
            'total_beds' => 'required|integer|min:1',
            
        ];
    }


public function messages()
{
    return [
        'room_name.regex' => 'The room name must contain at least one letter and may include digits, spaces, and symbols.',
        'room_name.not_in' => 'The room name cannot be "0".',
        'occupied_beds.min' => 'The number of occupied beds must be zero or greater.',
        'total_beds.required' => 'The total number of beds must be  greater then zero.',
    ];
}
}