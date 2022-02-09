@extends('layouts.app')

@section('content')

<admin-blog-edit
  :blog="{{$blog}}"
  :tags="{{ $tags }}"
  app-name="{{config('app.name')}}"
></admin-blog-edit> 
@endsection
