<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>Manuel Ojeda - @yield('pageTitle')</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="@yield('pageDescription')">
        <meta property="og:title" content="@yield('pageTitle')" />
        <meta property="og:type" content="@yield('pageType')" />
        <meta property="og:url" content="@yield('pageUrl')" />
        <meta property="og:image" content="@yield('pageImage')" />
        <meta property="og:site_name" content="Manuel Ojeda" />
        <meta name="theme-color" content="#017BB0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.9.0/css/all.css" integrity="sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E" crossorigin="anonymous">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="{{ mix('css/dark.css') }}">
        <link rel="stylesheet" href="{{ asset('css/prism.css') }}">
    </head>
    <body>
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.3&appId=475808966502918&autoLogAppEvents=1"></script>
        
        <div id="app">
            @yield('content')
        </div>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
        <script src="{{ asset('js/prism.js') }}"></script>
        <script src="{{ mix('js/manifest.js')}}"></script>
        <script src="{{ mix('js/vendor.js')}}"></script>
        <script src="{{ mix('js/app.js')}}"></script>
    </body>
</html>
