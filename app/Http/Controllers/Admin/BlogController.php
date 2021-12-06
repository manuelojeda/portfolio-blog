<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\{ BlogRequest , SetStatusBlogRequest, UpdateBlogRequest };
use App\Models\Blog;
use App\Services\Admin\BlogService;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;

class BlogController extends Controller
{
    public function __construct(private BlogService $blogService)
    {
        $this->blogService = new BlogService();
    }

    public function index(): View
    {
        return view('admin.blogs.index')
            ->with('blogs', $this->blogService->getAllBlogs());
    }

    public function create(): View
    {
        return view('admin.blogs.create');
    }

    public function store(BlogRequest $request)
    {
        return $this->blogService->storeBlog($request->toArray());
    }

    public function edit(Blog $blog): View
    {
        return view('admin.blogs.edit')
            ->with('blog', $blog);
    }

    public function update(Blog $blog, UpdateBlogRequest $request): JsonResponse
    {
        return $this->blogService->updateBlog($blog, $request->toArray());
    }

    public function destroy(Blog $blog): Collection
    {
        return $this->blogService->deleteBlog($blog);
    }

    public function setStatus(SetStatusBlogRequest $request)
    {
        return $this->blogService->setStatus($request);
    }
}
