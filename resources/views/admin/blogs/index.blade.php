@extends('layouts.app')

@section('content')
<admin-blog-index 
    app-name="{{config('app.name')}}"
    :blogs="{{$blogs}}"
></admin-blog-index>
@endsection
