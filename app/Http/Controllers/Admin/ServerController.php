<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use DB;

class ServerController extends Controller
{
    public function index()
    {
        $servers = DB::table('products')->get();

        return Inertia::render('Server/Index', compact('servers'));
    }
}
