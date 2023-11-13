<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $appends = ['role_id'];

    protected $fillable = [
        'name', 'email', 'password','odoo_password','branch_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function getRoleIdAttribute()
    {
        if ( count($this->roles) == 0):
            return null;
        else:
            return $this->roles[0]->id;
        endif;
    }

    public static function forDropDown($append_all = false)
    {
        $users = User::select('id', 'name')
            ->orderBy('name')
            ->get()
            ->toArray();

        if ($append_all) {
            $users = array_merge([['id' => 0, 'name' =>('TODOS')]], $users);
        }

        return $users;
    }

}
