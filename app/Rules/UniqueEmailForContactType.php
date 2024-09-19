<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\DB;

class UniqueEmailForContactType implements Rule
{

    protected $contact_type;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($contact_type)
    {
        $this->contact_type = $contact_type;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return !DB::table('contacts')->where('contact_type', $this->contact_type)->where('email', $value)->exists();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'This :attribute is already taken for ' . $this->contact_type;
    }
}
