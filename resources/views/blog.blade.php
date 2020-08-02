@extends('layouts.public')

@section('pageTitle',$blog->title)
@section('pageType', 'article')
@section('pageImage', $blog->thumbnail)
@section('pageUrl', url('/Blog/'.$blog->seo))

@section('content')
    <blog :blog="{{$blog}}"></blog>
@endsection