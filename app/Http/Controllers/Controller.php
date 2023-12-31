<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

     /**
     * Returns a 200 response.
     *
     * @param  object  $message = null
     * @return \Illuminate\Http\Response
     */




     public function setStatusCode($statusCode)
     {
         $this->statusCode = $statusCode;
         return $this;
     }

     /**
      * Returns a 200 response.
      *
      * @param  array  $data
      * @return \Illuminate\Http\JsonResponse
      */
     public function respond($data)
     {
         return response()->json($data);
     }



     public function respondWithError($message = null)
     {
         return response()->json(
             ['success' => false, 'msg' => $message]
         );
     }

     public function respondSuccess($message = null, $additional_data = [])
     {
         $message = is_null($message) ? 'success': $message;
         $data = ['success' => true, 'msg' => $message];

         if (!empty($additional_data)) {
             $data = array_merge($data, $additional_data);
         }

         return $this->respond($data);
     }

     /**
      * Returns a went wrong response.
      *
      * @param  object  $exception = null
      * @return \Illuminate\Http\Response
      */

     public function respondWentWrong($exception = null)
     {
         //If debug is enabled then send exception message
         $message = (config('app.debug') && is_object($exception)) ? "File:" . $exception->getFile(). "Line:" . $exception->getLine(). "Message:" . $exception->getMessage() : __('messages.something_went_wrong');

         //TODO: show exception error message when error is enabled.
         return $this->setStatusCode(200)
             ->respondWithError($message);
     }


}
