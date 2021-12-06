<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Carbon\Carbon;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class BlogController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(): View
    {
        $blogs = Blog::all();

        return view('admin.blogs.index')
            ->with('blogs', $blogs);
    }

    public function create(): View
    {
        return view('admin.blogs.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'string|required',
            'thumbnail' => 'string|required',
            'content' => 'string|required'
        ]);

        $blog = new Blog($data);
        $blog->publish = false;

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

    public function edit(Blog $blog): View
    {
        return view('admin.blogs.edit')
            ->with('blog', $blog);
    }

    public function update(Blog $blog, Request $request): JsonResponse
    {
        $data = $request->validate([
            'title' => 'string|required',
            'thumbnail' => 'string|required',
            'content' => 'string|required',
        ]);

        if ($blog->update($data)) {
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

    public function destroy(Blog $blog): Collection
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

    public function setStatus(Request $request)
    {
        $data = $request->validate([
            'id' => 'integer|required',
            'status' => 'boolean|required',
        ]);

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
}
