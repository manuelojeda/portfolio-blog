<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\Blog;
use App\Services\BlogService;
use App\Services\GetCurrentYear;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class BlogController extends Controller
{
    public function show(string $seo, BlogService $blogService): View
    {
        $blog = $blogService->getBlog($seo);

        if (!$blog) {
            abort(404);
        }

        return view('blog', compact('blog'));
    }

    public function paginate(Request $request, BlogService $blogService): JsonResponse
    {
        /** @var Blog[] */
        $blogs = $blogService->getPaginatedBlogs($request);

        return response()->json($blogs, 200);
    }
}
