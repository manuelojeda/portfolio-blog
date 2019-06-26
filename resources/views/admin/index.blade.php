@extends('layouts.app')

@section('content')
<div class="container">
    <admin-index blogs-props="{{$blogs}}"></admin-index>
</div>
@endsection
