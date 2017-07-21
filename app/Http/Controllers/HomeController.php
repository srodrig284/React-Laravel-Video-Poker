<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use JavaScript;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Pass variables from PHP Blade to React Javascript
     * to be able to access them in jsx file
     *
     */
    public function index()
    {

        JavaScript::put([
            'name' => Auth::user()->name,
            'id' => Auth::user()->id
        ]);

        return view('home');
    }
}