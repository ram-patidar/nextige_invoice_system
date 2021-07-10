<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" value="{{ csrf_token() }}" />
    <link rel="shortcut icon" type="image/png" href="nextige-logo.png" />
    <title>Laravel-Vue</title>
    <link href="{{ asset('css/global.css') }}" type="text/css" rel="stylesheet" />
</head>

<body>
    <div id="app">
    </div>
    
    <!-- <script src="{{ asset('js/custom-js/jquery.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/custom-js/popper.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/custom-js/bootstrap.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/custom-js/jquery.datatables.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/custom-js/dataTables.bootstrap.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/custom-js/dataTables.responsive.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/custom-js/custom.js') }}" type="text/javascript"></script>  -->
    <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
</body>

</html>