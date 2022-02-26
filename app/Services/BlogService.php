<?php

namespace App\Services;

use App\Models\Tag;
use App\Models\Blog;
use App\Enums\BlogStatus;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class BlogService
{
    public function getBlog(string $seo): ?Blog
    {
        return Blog::query()
            ->getBlogActiveBlog($seo)
            ->first();
    }

    public function getPaginatedBlogs(Request $request): LengthAwarePaginator
    {
        $blogs = Blog::query()
            ->wherePublish(BlogStatus::ACTIVE->value)
            ->select([
                'title',
                'seo',
                'thumbnail',
                'content',
                'updated_at',
                'published_at'
            ]);

        if ($request->q) {
            /** @var string */
            $query = $request->q;
            $blogs = $blogs->searchByTitle($query);
        }

        if ($request->tag) {
            $tagName = $request->tag;
            $blogs = $blogs->searchByTag($tagName);
        }

        return $blogs
            ->orderBy('created_at', 'desc')
            ->paginate(8);
    }
}
