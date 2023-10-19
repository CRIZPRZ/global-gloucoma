<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email' => $this->getEmailRules(),
            'username' => $this->getUsernameRules(),
            'password' => 'required',
            // 'g-recaptcha-response' => 'required|recaptcha'
        ];
    }

    public function messages()
    {
        return [
            'email.requied' => 'El email es requerido',
            'email.email' => 'El email no tiene un formato correcto',
            'password.requied' => 'El password es requerido',
            // 'g-recaptcha-response.required' => 'El recaptcha es requerido',
            // 'g-recaptcha-response.recaptcha' => 'El recaptcha no es válido'
        ];
    }

    public function attributes()
    {
        return [
            'email' => 'Email',
            'password' => 'Password',
        ];
    }

    protected function getEmailRules()
    {

        $username = $this->input('username');

        $emailRules = ($username === null) ? 'required|email' : 'nullable|string';

        return $emailRules;
    }

    protected function getUsernameRules()
    {
        $email = $this->input('email');

        $userRules = ($email === null) ?  'required|string' : 'nullable|string';

        return $userRules;
    }
}
