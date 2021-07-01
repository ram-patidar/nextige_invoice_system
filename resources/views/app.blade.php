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
    <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.25/js/dataTables.bootstrap4.min.js"></script>
    <script>
    $(document).ready(function() {
        $('#example').DataTable();
    });
    </script> -->
</body>

</html>