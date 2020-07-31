@extends('layouts.app')

@section('content')

<admin-blog-edit :blog="{{$blog}}" app-name="{{config('app.name')}}"></admin-blog-edit> 
@endsection
