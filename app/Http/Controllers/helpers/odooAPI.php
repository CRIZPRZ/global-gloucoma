<?php

namespace App\Http\Controllers\helpers;

use App\ConfigDatabase;
use App\Http\Controllers\Controller;
use App\UserToken;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use League\OAuth2\Client\Provider\GenericProvider;

class odooAPI extends Controller
{
    //protected $provider;

    protected $API_HOST = 'erp.glaucoma.mx:8069';
//    protected $API_HOST = 'localhost:8069';


    public function getProvider($server)
    {
        //GLOBAL
        //'clientId' => 'jOwsQVVnDuKjRRprXyKGeyMRzEeck0',
        //'clientSecret' => 'bajKoXS2ACqUaF1oc3zeFAVI14u7cU',
        //$server = ConfigDatabase::find($server_id);
        //dd('server');
        $provider = new GenericProvider([
            'clientId' => $server->client_id,   // The client ID assigned to you by the provider
            'clientSecret' => $server->client_secret,   // The client password assigned to you by the provider
            'redirectUri' => 'http://app.swaggerhub.com/oauth2_redirect/',
            'urlAuthorize' => 'http://' . $this->API_HOST . '/api/authentication/oauth2/authorize',
            'urlAccessToken' => 'http://' . $this->API_HOST . '/api/authentication/oauth2/token',
            'urlResourceOwnerDetails' => ''
        ]);
        //dd($provider);
        return $provider;

    }

    public function getToken($username, $password, $server)
    {
        try {

            $token = UserToken::where('user_id', Auth::user()->id)->where('server_id', $server->id)->where('expires_at', '>', Carbon::now())->first();
            if ($token) {
                return $token;
            } else {
                $provider = $this->getProvider($server);
               // dd($provider);
                $accessToken = $provider->getAccessToken('password', [
                    'username' => $username,
                    'password' => $password,
                    'db' => $server->database
                ]);
                //dd($accessToken);

                $token = new UserToken;
                //dd($new_token);
                $token->user_id = Auth::user()->id;
                $token->server_id = $server->id;
                $token->access_token = $accessToken->getToken();
                $token->refreshToken = $accessToken->getRefreshToken();
                $token_expires = Carbon::now()->addMinutes(55);

                $token->expires_at = $token_expires;
                $token->save();

                return $token;
            }
        } catch (\Exception $e) {
            //dd($e);
            return $e;
        }

    }

    public function getUserInfo($token, $options, $server)
    {
        try {
            $provider = $this->getProvider($server);
            $request = $provider->getAuthenticatedRequest(
                'GET',
                'http://' . $this->API_HOST . '/api/userinfo',
                $token,
                $options
            );
            $client = new \GuzzleHttp\Client(['verify' => false]);
            $response = $client->send($request);
            $code = $response->getStatusCode();
            $rawBody = $response->getBody()->getContents();
            $data = ['status_code' => $code, 'data' => json_decode($rawBody)];
            return $data;
        } catch (\Exception $e) {
            $code = $e->getCode();
            $rawBody = $e->getMessage();
            $data = ['status_code' => $code, 'data' => $rawBody];
            return $data;
        }
    }

    public function getSearchData($model, $token, $parameters,$server)
    {
        try {
            //dd($parameters);
            $provider = $this->getProvider($server);
            $request = $provider->getAuthenticatedRequest(
                'GET',
                'http://' . $this->API_HOST . '/api/search_read/' . $model,
                $token,
                $parameters
            );
             //dd($request);
            $client = new \GuzzleHttp\Client(['verify' => false]);
            $response = $client->send($request);
            $code = $response->getStatusCode();
            $rawBody = $response->getBody()->getContents();
            $data = ['status_code' => $code, 'data' => json_decode($rawBody)];
            return $data;
        } catch (\Exception $e) {
            $code = $e->getCode();
            $rawBody = $e->getMessage();
            $data = ['status_code' => $code, 'data' => $rawBody, 'response'=>$e];
            return $data;
        }

    }

    public function getReadData($model, $token, $parameters,$server)
    {
        try {
            $provider = $this->getProvider($server);
            $request = $provider->getAuthenticatedRequest(
                'GET',
                'http://' . $this->API_HOST . '/api/read/' . $model,
                $token,
                $parameters
            );
            // dd($request);
            $client = new \GuzzleHttp\Client(['verify' => false]);
            $response = $client->send($request);
            $code = $response->getStatusCode();
            $rawBody = $response->getBody()->getContents();
            $data = ['status_code' => $code, 'data' => json_decode($rawBody)];
            return $data;
        } catch (\Exception $e) {
            $code = $e->getCode();
            $rawBody = $e->getMessage();
            $data = ['status_code' => $code, 'data' => $rawBody];
            return $data;
        }

    }

    public function odooReadRecord($model, $token, $data)
    {

        $url = 'http://' . $this->API_HOST . '/api/search_read/' . $model;
        $curl = curl_init($url);

        //Establecemos parametro de retorno
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        //Establecemos los parametros de los valores que enviara en el metodo POST
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        //Establecemos el Metodo
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
        // Establecemos el token
        curl_setopt($curl, CURLOPT_HTTPHEADER, ["authorization: Bearer " . $token]);
        // Ejecutamos !
        //dd($curl);
        $response = curl_exec($curl);


        $err = curl_error($curl);

        // Cerramos la conexion
        curl_close($curl);

        $data = json_decode($response, true);

        return $data;

    }

    /*
     * Esta funcion ACTUALIZA los datos existentes de un cliente
     * requere del Modelo, Token, y como data recibe id de odoo, y values con los datos a actualizar
     *
     */

    public function odooWriteRecord($model, $token, $data)
    {

        $url = 'http://' . $this->API_HOST . '/api/write/' . $model;
        $curl = curl_init($url);

        //Establecemos parametro de retorno
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        //Establecemos los parametros de los valores que enviara en el metodo POST
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        //Establecemos el Metodo
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'PUT');
        // Establecemos el token
        curl_setopt($curl, CURLOPT_HTTPHEADER, ["authorization: Bearer " . $token]);
        // Ejecutamos !
        //dd($curl);
        $response = curl_exec($curl);


        $err = curl_error($curl);

        // Cerramos la conexion
        curl_close($curl);

        $data = json_decode($response, true);

        return $data;

    }

    public function odooCreateRecord($model, $token, $data)
    {

        $url = 'http://' . $this->API_HOST . '/api/create/' . $model;
        $curl = curl_init($url);

        //Establecemos parametro de retorno
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        //Establecemos los parametros de los valores que enviara en el metodo POST
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        //Establecemos el Metodo
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
        // Establecemos el token
        curl_setopt($curl, CURLOPT_HTTPHEADER, ["authorization: Bearer " . $token]);
        // Ejecutamos !
        //dd($curl);
        $response = curl_exec($curl);
        $err = curl_error($curl);
        // Cerramos la conexion
        curl_close($curl);
        $data = json_decode($response, true);
        return ($data);

    }


    public function putCreateData($model, $token, $parameters, $server)
    {
        // try {

        // dd($parameters);
        $provider = $this->getProvider($server->id);
        $request = $provider->getAuthenticatedRequest(
            'POST',
            'http://' . $this->API_HOST . '/api/create/' . $model,
            $token,
            $parameters
        );
        // dd($request);
        $client = new \GuzzleHttp\Client(['verify' => false, 'exceptions' => false]);
        // dd($client);
        $response = $client->send($request);
        $code = $response->getStatusCode();
        $rawBody = $response->getBody()->getContents();
        $data = ['status_code' => $code, 'data' => json_decode($rawBody)];
        return $data;
        // } catch (\Exception $e) {
        //dd($e);
        $code = $e->getCode();
        $rawBody = $e->getMessage();
        $data = ['status_code' => $code, 'data' => $rawBody];
        return $data;
        // }
    }
}
