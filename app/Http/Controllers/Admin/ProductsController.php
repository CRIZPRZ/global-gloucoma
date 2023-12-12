<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\helpers\odooAPI;
use App\Models\ConfigDatabase;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductsController extends Controller
{
    protected $ODOO_API;
    protected $servers;

    public function __construct(odooAPI $odoo_api)
    {
        $this->ODOO_API = $odoo_api;
        $this->servers = ConfigDatabase::whereNotNull('client_id')->where('client_id', '!=', '')->get();
    }

    public function index()
    {
        $products = Product::where('active', 1)->select('id', 'name', 'list_price', 'odoo_server', 'odoo_product_id', 'taxes')->with('server:id,database')->get();


        return Inertia::render('Products/Index', compact('products'));
    }

    public function edit($id)
    {
        $product = Product::find($id);

        $data = [
            'product' => $product,
        ];
        return $data;
    }

    public function syncProducts()
    {

        $me = Auth::user();
        if (!$me) {
            return $this->respondWentWrong('access denied');
        }
        //dd($this->servers);
        foreach ($this->servers as $server) {
//dd('aqui');
            $token = $this->ODOO_API->getToken($me->email, $me->odoo_password, $server);
//dd($token);
            $data = [
                'db' => $server->database,
                'domain' => '[["sale_ok","=",true]]',
                'fields' => '["id","name","list_price","taxes_id","gg_business_unit_id"]',
                'limit' => 0,
            ];
            $parameters = [
                'body' => http_build_query($data),
                'headers' => [
                    'Content-Type' => 'application/x-www-form-urlencoded',
                ],

            ];

            $request = $this->ODOO_API->getSearchData('product.product', $token->access_token, $parameters, $server);

            //dd($request['data']);

            if ($request['data']) {
                foreach ($request['data'] as $row) {


                    try {

                        $business_unit = ($row->gg_business_unit_id) ? $row->gg_business_unit_id[0] : 0;


                    } catch (\Exception $e) {

                    }
                    //dd($business_unit);

                    $taxes = 0;
                    foreach ($row->taxes_id as $tax) {
                        $tax == 2 ? $taxes = 1 : $taxes = 0;
                    }
                    $new_product = [

                        'odoo_product_id' => $row->id,
                        'odoo_server' => $server->id,
                    ];
                    $new_product_attributes = [
                        'name' => $row->name,
                        'list_price' => $row->list_price,
                        'taxes' => $taxes,
                        'business_unit_id' => $business_unit
                    ];

                    $product = Product::updateOrCreate($new_product, $new_product_attributes);
                    $product->save();

                    //}
                }

            }

        }
        return true;
    }

}
