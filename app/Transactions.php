<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    protected $fillable = [
        'credits_bal', 'user_id',
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

}
