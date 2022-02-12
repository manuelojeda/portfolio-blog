<?php

namespace App\Services\Admin;

use App\Enums\BlogStatus;
use App\Http\Requests\SetStatusBlogRequest;
use App\Models\Blog;
use App\Models\TagBlog;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;

class BlogService
{
    /**
     * @return Collection<int, Blog>
     */
    public function getAllBlogs(): Collection
    {
        return Blog::all();
    }
    
    /**
     * @return Collection<string, bool|string>
     */
    public function storeBlog(array $data): Collection
    {
        $blog = new Blog($data);
        $blog->publish = BlogStatus::INACTIVE;

        /** @var Collection $response */
        $response = null;
        if ($blog->save()) {
            $response = collect([
                'band' => true,
                'text' => 'Entry saved',
                'icon' => 'success'
            ]);
        } else {
            $response = collect([
                'band' => false,
                'text' => 'There was a problem saving the entry',
                'icon' => 'error'
            ]);
        }

        return $response;
    }

    public function updateBlog(Blog $blog, array $data): JsonResponse
    {
        if ($blog->update($data)) {
            $this->setBlogTags(
                tags: $data['tags'],
                blog: $blog
            );

            return response()->json([
                'band' => true,
                'text' => 'Entry saved',
                'icon' => 'success'
            ], 200);
        } else {
            return response()->json([
                'band' => false,
                'text' => 'There was a problem saving the entry',
                'icon' => 'error'
            ], 500);
        }
    }

    /**
     * @return Collection<string, bool|string>
     */
    public function deleteBlog(Blog $blog): Collection
    {
        if ($blog->delete()) {
            $response = collect([
                'band' => true,
                'text' => 'Entry deleted permanently.',
                'icon' => 'success'
            ]);
        } else {
            $response = collect([
                'band' => false,
                'text' => 'There was a problem deleting the entry',
                'icon' => 'error'
            ]);
        }

        return $response;
    }

    /**
     * @return Collection<string, bool|string>
     */
    public function setStatus(SetStatusBlogRequest $request): Collection
    {
        $blog = Blog::findOrFail($request->id);
        $blog->publish = $request->status;
        $blog->published_at = $request->status
            ? Carbon::parse()->now()
            : null;

        if ($blog->save()) {
            $msg = 'Entry unpublished';
            if ($request->status) {
                $msg = 'Entry published';
            }

            $response = collect([
                'band' => true,
                'text' => $msg,
                'icon' => 'success'
            ]);
        } else {
            $response = collect([
                'band' => false,
                'text' => 'There was a problem saving the entry',
                'icon' => 'error'
            ]);
        }

        return $response;
    }

    private function setBlogTags(array $tags, Blog $blog): void
    {
        $this->deleteTags($blog);
        foreach ($tags as $tag) {
            $tagBlog = new TagBlog();
            $tagBlog->tag_id = $tag['id'];
            $tagBlog->blog_id = $blog->id;

            $tagBlog->save();
        }
    }

    private function deleteTags(Blog $blog): void
    {
        /** @var TagBlog[] */
        $blogTags = TagBlog::where('blog_id', $blog->id)->get();

        foreach ($blogTags as $blogTag) {
            $blogTag->delete();
        }
    }
}
