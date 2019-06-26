@extends('layouts.app')

@section('content')
<div class="container">
    <admin-form blog-prop="{{$blog}}" band-edit="{{true}}"></admin-form>
</div>
@endsection
