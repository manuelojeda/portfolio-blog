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
        if(\Auth::user()) {
            $blogs = Blog::all();

            return view('admin.index', compact('blogs'));
        }

    }

    public function create() {
        if(\Auth::user()) {
            return view('admin.create');
        }
    }

    public function store(Request $request) {
        if(\Auth::user()) {
            $data = $request->validate([
                'title' => 'string|required',
                'seo' => 'string|required',
                'thumbnail' => 'string|required',
                'content' => 'string|required'
            ]);

            $blog = new Blog($data);

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
        if(\Auth::user()) {
            $blog = Blog::findOrFail($id);
            return view('admin.edit',compact('blog'));
        }
    }
    
    public function update($id, Request $request) {
        if(\Auth::user()) {
            dd($request->all());
        }
    }
}
