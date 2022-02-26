<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\Tag;
use App\Enums\BlogStatus;
use Illuminate\Support\Str;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Jenssegers\Date\Date;

class Blog extends Model
{
    use HasSlug;

    const EXCERPT_LENGHT = 100;

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
        Date::setLocale('es');
        return new Attribute(
            get: fn ($value) => Date::parse($value)->format('j \de F \de Y'),
            set: fn ($value) => $value
        );
    }

    /**
     * @return BelongsToMany<Tag>
     */
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

    public function scopeGetBlogActiveBlog(Builder $query, string $seo): Builder
    {
        return $query->with('tags')
            ->where('seo', $seo)
            ->wherePublish(BlogStatus::ACTIVE);
    }

    public function scopeSearchByTitle(Builder $query, string $title): Builder
    {
        return $query->where('title', 'LIKE', "%{$title}%");
    }

    public function scopeSearchByTag(Builder $query, string $tagName): Builder
    {
        return $query->whereHas('tags', function (Builder $queryBuilder) use ($tagName) {
            $tag = Tag::whereName($tagName)->first();
            $queryBuilder->whereTagId($tag->id);
        });
    }
}
