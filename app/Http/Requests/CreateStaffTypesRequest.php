<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateStaffTypesRequest extends FormRequest
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
            'staff_title' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'staff_title.required' => 'Enter Staff type ',
            'staff_title.unique' => 'Staff type already exists.',
        ];
    }
}
