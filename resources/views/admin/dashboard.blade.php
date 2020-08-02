@extends('layouts.app')

@section('content')
  <admin-dashboard
    app-name="{{ config('app.name') }}"
    :personal="{{ $personal }}"
  ></admin-dashboard>
@endsection
