<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasSlug;

    protected $table = "blog";

    protected $fillable = [
        'title',
        'thumbnail',
        'content'
    ];

    public function createdAt(): Attribute
    {
        return new Attribute(
            get: fn ($value) => Carbon::parse($value)->format('d-m-Y H:i'),
            set: fn ($value) => $value
        );
    }

    public function publishedAt(): Attribute
    {
        return new Attribute(
            get: fn ($value) => Carbon::parse($value)->format('d-m-Y H:i'),
            set: fn ($value) => $value
        );
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('seo');
    }
}
