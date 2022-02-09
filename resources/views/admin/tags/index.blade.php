@extends('layouts.app')

@section('content')
<admin-tags-index
  :tags="{{ $tags }}"
  app-name="{{config('app.name')}}"
></admin-tags-index>
@endsection
