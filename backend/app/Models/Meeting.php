<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;

    protected $fillable = [
        'mom_id',    // FK → minutes_of_meetings.id
        'room_id',   // FK → rooms.id
        'title',
        'agenda',
    ];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function minutes()
    {
        return $this->hasOne(MinutesOfMeeting::class, 'id', 'mom_id');
    }

    public function attendees()
    {
        return $this->hasMany(MeetingAttendee::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
