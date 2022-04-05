@extends('layouts.public')

@section('pageTitle','Blog')
@section('pageType', 'website')
@section('pageImage', url('img/profile_pic.jpg'))
@section('pageUrl', url('/'))

@section('content')
    <blog-index
        :tags="{{ $tags }}"
    ></blog-index>
@endsection