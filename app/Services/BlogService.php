<?php

namespace App\Services;

use App\Models\Tag;
use App\Models\Blog;
use App\Enums\BlogStatus;
use GrahamCampbell\Markdown\Facades\Markdown;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class BlogService
{
    public function getBlog(string $seo): ?Blog
    {
        $blog = Blog::query()
            ->getBlogActiveBlog($seo)
            ->first();

        $content = Markdown::convertToHtml($blog->content);
        $blog->content = $content->getContent();

        return $blog;
    }

    public function getPaginatedBlogs(Request $request): LengthAwarePaginator
    {
        $blogs = Blog::query()
            ->where('publish', BlogStatus::ACTIVE->value)
            ->select([
                'title',
                'seo',
                'thumbnail',
                'content',
                'updated_at',
                'published_at',
                'is_video',
                'video_url'
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
