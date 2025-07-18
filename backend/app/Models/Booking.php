<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',     // FK → users.id
        'room_id',     // FK → rooms.id
        'meeting_id',  // FK → meetings.id
        'duration',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function meeting()
    {
        return $this->belongsTo(Meeting::class);
    }
}
