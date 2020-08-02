<?php
// phpcs:disable
namespace App;

use Illuminate\Database\Eloquent\Model;

class Personal extends Model
{
    // phpcs:enable
    protected $table = 'personal';

    protected $fillable = [
        'data'
    ];

    protected $casts = [
        'data' => 'array'
    ];
}
