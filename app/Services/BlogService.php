<?php

namespace App\Services;

use App\Models\Tag;
use App\Models\Blog;
use App\Enums\BlogStatus;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pagination\LengthAwarePaginator;

class BlogService
{
    public function getBlog(string $seo)
    {
        return Blog::with('tags')
            ->where('seo', $seo)
            ->wherePublish(BlogStatus::ACTIVE->value)
            ->first();
    }

    public function getPaginatedBlogs(Request $request): LengthAwarePaginator
    {
        /** @var Builder */
        $blogs = Blog::select(['title','seo','thumbnail','content','updated_at', 'published_at'])
            ->wherePublish(BlogStatus::ACTIVE->value);

        if ($request->q) {
            /** @var string */
            $query = $request->q;
            $blogs = $blogs->where('title', 'LIKE', "%{$query}%");
        }

        if ($request->tag) {
            $tagName = $request->tag;
            $blogs = $blogs->whereHas('tags', function (Builder $queryBuilder) use ($tagName) {
                $tag = Tag::whereName($tagName)->first();
                $queryBuilder->whereTagId($tag->id);
            });
        }

        return $blogs
            ->orderBy('created_at', 'desc')
            ->paginate(4);
    }
}
