<?php

namespace App\Http\Controllers;

use App\Enums\BlogStatus;
use App\Models\Blog;
use App\Models\Tag;
use App\Services\GetCurrentYear;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
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

    public function show($seo): View
    {
        $blog = Blog::with('tags')
            ->where('seo', $seo)
            ->where('publish', BlogStatus::ACTIVE)
            ->first();

        if (!$blog) {
            abort('404');
        }

        return view('blog', compact('blog'))
            ->with('currentYear', $this->getCurrentYear->__invoke());
    }

    public function paginate(Request $request): JsonResponse
    {
        $blogs = Blog::select(['title','seo','thumbnail','content','updated_at', 'published_at'])
            ->where('publish', BlogStatus::ACTIVE);

        if ($request->q) {
            $query = $request->q;
            $blogs = $blogs->where('title', 'LIKE', "%{$query}%");
        }

        if ($request->tag) {
            $tagName = $request->tag;
            $blogs = $blogs->whereHas('tags', function (EloquentBuilder $queryBuilder) use ($tagName) {
                $tag = Tag::where('name', $tagName)->first();
                $queryBuilder->where('tag_id', '=', $tag->id);
            });
        }

        $blogs = $blogs
            ->orderBy('created_at', 'desc')
            ->paginate(4);

        return response()->json($blogs, 200);
    }
}
