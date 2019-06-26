@extends('layouts.public')

@section('pageTitle','Mi blog personal')
@section('pageType', 'article')
@section('pageImage', url('img/profile_pic.jpg'))
@section('pageUrl', url('/Blog'))

@section('content')
    <blogs blogs-props="{{$blogs}}"></blogs>
@endsection