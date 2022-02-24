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
    public function __construct(
        private GetCurrentYear $getCurrentYear
    ) {
        $this->getCurrentYear = new GetCurrentYear();
    }

    public function index(): View
    {
        return view('blogs')
            ->with('tags', Tag::all())
            ->with('currentYear', $this->getCurrentYear->__invoke());
    }

    public function show(string $seo, BlogService $blogService): View
    {
        $blog = $blogService->getBlog($seo);

        if (!$blog) {
            abort(404);
        }

        return view('blog', compact('blog'))
            ->with('currentYear', $this->getCurrentYear->__invoke());
    }

    public function paginate(Request $request, BlogService $blogService): JsonResponse
    {
        /** @var Blog[] */
        $blogs = $blogService->getPaginatedBlogs($request);

        return response()->json($blogs, 200);
    }
}
