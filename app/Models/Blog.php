<?php

namespace App\Models;

use Carbon\Carbon;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasSlug;

    protected $table = "blog";

    protected $fillable = ['title', 'thumbnail', 'content'];

    public function getCreatedAtAttribute ($value)
    {
        return Carbon::parse($value)->format('d-M-Y');
    }

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('seo');
    }
}
