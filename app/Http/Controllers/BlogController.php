<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Jenssegers\Date\Date;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index() {
        $blogs = Blog::select(['title','seo','thumbnail','content'])->where('publish','=','1')->orderBy('created_at','desc')->get();
        foreach ($blogs as $blog) {
            $created_at = new Date($blog->created_at);
            $blog->formattedFecha = $created_at->format('d-M-Y');
        }
        return view('blogs', compact('blogs'));
    }
    public function show($seo) {
        $blog = Blog::select(['title','seo','thumbnail','content','created_at'])->where('seo','=',$seo)->where('publish','=','1')->first();
        if($blog == null) {
            abort('404');
        }
        $created_at = new Date($blog->created_at);
        $blog->formattedFecha = $created_at->format('d-M-Y');
        
        return view('blog', compact('blog'));
    }
}
