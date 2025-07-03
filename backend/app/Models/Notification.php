<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',   // FK → users.id
        'subject',
        'to',
        'from',
        'is_seen',
    ];

    protected $casts = [
        'is_seen' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

