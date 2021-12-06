<?php

namespace App\Http\Controllers;

use App\Enums\BlogStatus;
use App\Models\Blog;
use App\Services\GetCurrentYear;
use Illuminate\Http\JsonResponse;
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
            ->with('currentYear', $this->getCurrentYear->__invoke());
    }

    public function show($seo): View
    {
        $blog = Blog::select(['title','seo','thumbnail','content','published_at'])
            ->where('seo', $seo)
            ->where('publish', BlogStatus::ACTIVE)
            ->first();

        if (!$blog) {
            abort('404');
        }

        return view('blog', compact('blog'))
            ->with('currentYear', $this->getCurrentYear->__invoke());
    }

    public function paginate(): JsonResponse
    {
        $blogs = Blog::select(['title','seo','thumbnail','content','updated_at', 'published_at'])
            ->where('publish', BlogStatus::ACTIVE)
            ->orderBy('created_at', 'desc')
            ->paginate(8);

        return response()->json($blogs, 200);
    }
}
