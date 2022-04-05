@extends('layouts.public')

@section('pageTitle',$blog->title)
@section('pageType', 'article')
@section('pageImage', $blog->thumbnail)
@section('pageUrl', url('/Blog/'.$blog->seo))
@section('pageDescription', $blog->title)

@section('content')
    <blog-entry
        :blog="{{$blog}}"
    ></blog-entry>
@endsection