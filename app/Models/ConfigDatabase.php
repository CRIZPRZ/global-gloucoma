<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class ConfigDatabase extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    protected $filleable = ['host','database','client_id','client_secret'];
}
