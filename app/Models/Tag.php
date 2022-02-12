<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Blog;

class Tag extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'color',
    ];

    /**
     * @return BelongsToMany<Blog>
     */
    public function blogs(): BelongsToMany
    {
        return $this->belongsToMany(
            Blog::class,
            'tag_blogs',
            'tag_id',
            'blog_id'
        );
    }
}
