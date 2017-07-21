<?php

namespace App\Http\Controllers;

use Auth;
use JavaScript;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function index()
    {
        JavaScript::put([
            'name' => Auth::user()->name,
            'id' => Auth::user()->id
        ]);
        return view('home');
    }
}
