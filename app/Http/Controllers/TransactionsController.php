<?php

namespace App\Http\Controllers;

use App\Transactions;
use Illuminate\Http\Request;

class TransactionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Transactions  $transactions
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {
        $transactions = Transactions::where('user_id', $id)->firstOrFail();
        /*return view('/game');*/

        return ($transactions);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Transactions  $transactions
     * @return \Illuminate\Http\Response
     */
    public function edit(Transactions $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Transactions  $transactions
     * @return \Illuminate\Http\Response
     */
    public function update( $id, $credits)
    {
        $transactions = Transactions::where('user_id', $id)->firstOrFail();
        $transactions->credits = $credits;
        $transactions->save();

        return ($transactions);
    }

    public function updatetotal( $id)
    {
        $transactions = Transactions::where('user_id', $id)->firstOrFail();
        $transactions->credits = 1000;
        $newYTD = $transactions->ytd_credits;
        $newYTD = $newYTD + 1000;
        $transactions->ytd_credits = $newYTD;
        $transactions->save();

        return ($transactions);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Transactions  $transactions
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transactions $transactions)
    {
        //
    }
}
