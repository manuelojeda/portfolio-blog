<?php

namespace App\Http\Controllers;

use App\Enums\BlogStatus;
use App\Models\Blog;
use App\Models\Tag;
use App\Services\BlogService;
use App\Services\GetCurrentYear;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class BlogController extends Controller
{
    public function __construct(
        private GetCurrentYear $getCurrentYear,
        private BlogService $blogService
    ) {
        $this->getCurrentYear = new GetCurrentYear();
        $this->blogService = new BlogService();
    }

    public function index(): View
    {
        return view('blogs')
            ->with('tags', Tag::all())
            ->with('currentYear', $this->getCurrentYear->__invoke());
    }

    public function show($seo): View
    {
        $blog = $this->blogService->getBlog($seo);

        if (!$blog) {
            abort(404);
        }

        return view('blog', compact('blog'))
            ->with('currentYear', $this->getCurrentYear->__invoke());
    }

    public function paginate(Request $request): JsonResponse
    {
        $blogs = $this->blogService->getPaginatedBlogs($request);

        return response()->json($blogs, 200);
    }
}
