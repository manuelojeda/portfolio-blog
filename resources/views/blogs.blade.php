@extends('layouts.public')

@section('pageTitle','Mi blog personal')
@section('pageType', 'article')
@section('pageImage', url('img/profile_pic.jpg'))
@section('pageUrl', url('/Blog'))
@section('pageDescription', 'Mi blog personal')

@section('content')
    <blogs
        :tags="{{ $tags }}"
        :current-year="{{ $currentYear }}"
    ></blogs>
@endsection