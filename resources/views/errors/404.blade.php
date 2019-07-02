@extends('layouts.public')

@section('pageTitle', '404')
@section('pageType', 'article')
@section('pageImage', url('img/profile_pic.jpg'))
@section('pageUrl', url('/'))

@section('content')
    <error-404></error-404>
@endsection