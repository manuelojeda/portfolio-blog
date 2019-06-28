<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    

    public function index() {
        if(\Auth::check()) {
            $blogs = Blog::all();

            return view('admin.index', compact('blogs'));
        }

    }

    public function create() {
        if(\Auth::check()) {
            return view('admin.create');
        }
    }

    public function store(Request $request) {
        if(\Auth::check()) {
            $data = $request->validate([
                'title' => 'string|required',
                'seo' => 'string|required',
                'thumbnail' => 'string|required',
                'content' => 'string|required'
            ]);

            $blog = new Blog($data);
            $blog->publish = false;

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

            return $response;
        }
    }

    public function edit($id) {
        if(\Auth::check()) {
            $blog = Blog::findOrFail($id);
            return view('admin.edit',compact('blog'));
        }
    }
    
    public function update($id, Request $request) {
        if(\Auth::check()) {
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

            return $response;
        }
    }

    public function setState(Request $request) {
        if(\Auth::check()) {
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

            return $response;
        }
    }

    public function delete($id) {
        if(\Auth::check()) {
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

            return $response;
        }
    }
}
