@extends('layouts.app')

@section('content')
{{-- <admin-index blogs-props="{{$blogs}}"></admin-index> --}}
<admin-blog-index 
    app-name="{{config('app.name')}}"
    :blogs="{{$blogs}}"
></admin-blog-index>
@endsection
