@extends('layouts.public')

@section('pageTitle','Portfolio')
@section('pageType', 'website')
@section('pageImage', url('img/profile_pic.jpg'))
@section('pageUrl', url('/'))

@section('content')
    <app
        :personal="{{ $personal }}"
    ></app>
@endsection