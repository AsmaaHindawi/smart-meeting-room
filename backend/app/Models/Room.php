<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'location',
        'capacity',
        'features',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function meetings()
    {
        return $this->hasMany(Meeting::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
