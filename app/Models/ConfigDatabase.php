<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ConfigDatabase extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['host','database','client_id','client_secret'];
}
