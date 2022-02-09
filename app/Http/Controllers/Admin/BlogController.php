<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\{ BlogRequest , SetStatusBlogRequest, UpdateBlogRequest };
use App\Models\Blog;
use App\Models\Tag;
use App\Services\Admin\BlogService;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function __construct(private BlogService $blogService)
    {
        $this->blogService = new BlogService();
    }

    public function index(): View
    {
        return view('admin.blogs.index');
    }

    public function create(): View
    {
        return view('admin.blogs.create')
            ->with('tags', Tag::all());
    }

    public function store(BlogRequest $request)
    {
        return $this->blogService->storeBlog(
            data: $request->toArray()
        );
    }

    public function edit(int $blogId): View
    {
        $blog = Blog::with('tags')->where('id', $blogId)->first();
        return view('admin.blogs.edit')
            ->with('tags', Tag::all())
            ->with('blog', $blog);
    }

    public function update(Blog $blog, UpdateBlogRequest $request): JsonResponse
    {
        return $this->blogService->updateBlog(
            blog: $blog,
            data: $request->toArray()
        );
    }

    public function destroy(Blog $blog): Collection
    {
        return $this->blogService->deleteBlog($blog);
    }

    public function setStatus(SetStatusBlogRequest $request)
    {
        return $this->blogService->setStatus(
            request: $request
        );
    }

    public function paginate(Request $request): JsonResponse
    {
        $blogs = Blog::select();

        if ($request->q) {
            $query = $request->q;
            $blogs = $blogs->where('title', 'LIKE', "%{$query}%");
        }

        $blogs = $blogs
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        return response()->json($blogs, 200);
    }
}
