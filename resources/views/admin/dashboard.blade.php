@extends('layouts.app')

@section('content')
  <admin-dashboard
    app-name="{{ config('app.name') }}"
  ></admin-dashboard>
@endsection
