<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\Routing\Annotation\Route;

class TagController extends Controller
{
    public function index(): View
    {
        $tags = Tag::all();

        return view('admin.tags.index')
            ->with('tags', $tags);
    }

    public function store(Request $request): JsonResponse
    {
        $tag = new Tag([
            'name' => $request->name,
            'color' => $request->color,
        ]);

        $tag->save();

        return response()->json([
            'text' => 'Tag registred successfully',
            'icon' => 'success'
        ], 200);
    }

    public function delete(Tag $tag)
    {
        $tag->delete();

        return response()->json([
            'text' => 'Tag deleted successfully',
            'icon' => 'success'
        ], 200);
    }
}
