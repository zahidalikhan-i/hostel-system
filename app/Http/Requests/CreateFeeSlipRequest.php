<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateFeeSlipRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'student_id' => 'required|integer',
            'fee_category_id' => 'required|integer',
            'fee_type' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'month' => 'required|string|max:255',
        ];
    }
    
    public function messages()
    {
        return [
            'fee_type.required' => 'This field is required.',
            'status.required' => 'This field is required.',
            'month.required' => 'This field is required.',
        ];
    }
}


