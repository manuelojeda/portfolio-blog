@extends('layouts.app')

@section('content')
<admin-blog-index 
    app-name="{{config('app.name')}}"
></admin-blog-index>
@endsection
