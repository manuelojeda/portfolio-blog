<?php

namespace App\Models;

use App\Enums\BlogStatus;
use Carbon\Carbon;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Blog extends Model
{
    use HasSlug;

    protected $table = "blog";

    protected $fillable = [
        'title',
        'thumbnail',
        'content'
    ];

    protected $casts = [
        'publish' => BlogStatus::class
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

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(
            Tag::class,
            'tag_blogs',
            'blog_id',
            'tag_id'
        );
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('seo');
    }
}
