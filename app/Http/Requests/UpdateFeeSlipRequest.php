<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFeeSlipRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'student_id' => 'sometimes|required|integer',
            'fee_category_id' => 'sometimes|required|integer',
            'fee_type' => 'sometimes|required|string|max:255',
            'status' => 'sometimes|required|string|max:255',
            'month' => 'sometimes|required|string|max:255',
        ];
    }
}
