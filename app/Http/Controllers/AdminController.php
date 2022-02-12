<?php

namespace App\Http\Controllers;

use App\Enums\BlogStatus;
use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Contracts\View\View;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    

    public function index(): View
    {
        $blogs = Blog::all();

        /** @var string */
        $view = 'admin.index';
        return view($view, compact('blogs'));
    }

    public function create(): View
    {
        /** @var string */
        $view = 'admin.create';
        return view($view);
    }

    public function store(Request $request): array
    {
        $data = $request->validate([
            'title' => 'string|required',
            'thumbnail' => 'string|required',
            'content' => 'string|required'
        ]);

        $blog = new Blog($data);
        $blog->publish = BlogStatus::INACTIVE;

        if($blog->save()) {
            $response = collect([
                'band' => true,
                'message' => 'Entry saved',
                'type' => 'success'
            ]);
        }
        else{
            $response = collect([
                'band' => false,
                'message' => 'There was a problem saving the entry',
                'type' => 'error'
            ]);
        }

        return $response->toArray();
    }

    public function edit(int $id): View
    {
        $blog = Blog::findOrFail($id);
        /** @var string */
        $view = 'admin.edit';
        return view($view, compact('blog'));
    }
    
    public function update(int $id, Request $request): array
    {
        $data = $request->validate([
            'title' => 'string|required',
            'seo' => 'string|required',
            'thumbnail' => 'string|required',
            'content' => 'string|required'
        ]);

        $blog = Blog::findOrFail($id);
        $blog->fill($data);

        if($blog->save()) {
            $response = collect([
                'band' => true,
                'message' => 'Entry saved',
                'type' => 'success'
            ]);
        }
        else{
            $response = collect([
                'band' => false,
                'message' => 'There was a problem saving the entry',
                'type' => 'error'
            ]);
        }

        return $response->toArray();
    }

    public function setState(Request $request): array
    {
        $data = $request->validate([
            'id' => 'integer|required',
            'band' => 'boolean|required',
        ]);

        $blog = Blog::findOrFail($data['id']);
        $blog->publish = $data['band'];

        if($blog->save()) {
            if($data['band']) {
                $msg = 'Entry published';
            }
            else{
                $msg = 'Entry unpublished';
            }

            $response = collect([
                'band' => true,
                'message' => $msg,
                'type' => 'success'
            ]);
        }
        else{
            $response = collect([
                'band' => false,
                'message' => 'There was a problem saving the entry',
                'type' => 'error'
            ]);
        }

        return $response->toArray();
    }

    public function delete(int $id): array
    {
        $blog = Blog::findOrFail($id);
        if($blog->delete()){
            $response = collect([
                'band' => true,
                'message' => 'Entry deleted permanently.',
                'type' => 'success'
            ]);
        }
        else{
            $response = collect([
                'band' => false,
                'message' => 'There was a problem deleting the entry',
                'type' => 'error'
            ]);
        }

        return $response->toArray();
    }
}
