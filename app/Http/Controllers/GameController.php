<?php

namespace App\Http\Controllers;

use Auth;
use JavaScript;
use Illuminate\Http\Request;

class GameController extends Controller
{
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