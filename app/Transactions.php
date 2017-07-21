<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    protected $fillable = [
        'credits', 'user_id', 'ytd_credits',
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

}