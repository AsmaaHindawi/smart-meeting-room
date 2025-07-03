<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use App\Models\Booking;
use App\Models\Notification;
use App\Models\MeetingAttendee;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'username',
        'email',
        'password',
        'roles',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string,string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password'          => 'hashed',
        'roles'             => 'string',
    ];

    /**
     * User → Bookings (1:N)
     */
    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    /**
     * User → Notifications (1:N)
     */
    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    /**
     * User → MeetingAttendees (1:N)
     */
    public function meetingAttendees()
    {
        return $this->hasMany(MeetingAttendee::class);
    }

    /**
     * Check if the user has the 'admin' role.
     */
    public function isAdmin(): bool
    {
        return $this->roles === 'admin';
    }
}
