<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">

    @yield('meta')

    <title>@yield('title')</title>

    <link rel="icon" type="image/x-icon" href="{{ asset('/favicon.ico') }}"/>
    <link href="{{ asset('/admin/clientes/css/light/loader.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/clientes/css/dark/loader.css') }}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="{{ asset ('/admin/clientes/js/loader.js') }}?{{ uniqid() }}"></script>

    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
    <link href="{{ asset('/admin/clientes/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/clientes/css/light/plugins.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/clientes/css/light/search.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/clientes/css/light/switches.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/clientes/css/light/modal.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/clientes/css/light/tabs.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/clientes/css/dark/plugins.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/clientes/css/dark/search.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/clientes/css/dark/switches.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/clientes/css/dark/modal.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/clientes/css/dark/tabs.css') }}" rel="stylesheet" type="text/css" />
    @yield('css')
</head>

<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/23480401.js"></script>
<!-- End of HubSpot Embed Code -->

<body class="layout-boxed">
    <div class="container">
        @yield('content')
    </div>

    @yield('modals')
    <script src="https://code.jquery.com/jquery-3.6.2.min.js" integrity="sha256-2krYZKh//PcchRtd+H+VyyQoZ/e3EcrkxhM8ycwASPA=" crossorigin="anonymous"></script>
    <script src="{{ asset('/admin/clientes/js/bootstrap.bundle.min.js') }}?{{ uniqid() }}"></script>
    <script src="{{ asset('/admin/clientes/js/perfect-scrollbar.min.js') }}?{{ uniqid() }}"></script>
    <script src="{{ asset('/admin/clientes/js/mousetrap.min.js') }}?{{ uniqid() }}"></script>
    <script src="{{ asset('/admin/clientes/js/waves.min.js') }}?{{ uniqid() }}"></script>
    <script src="{{ asset('/admin/clientes/js/app.js') }}?{{ uniqid() }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.15/dist/sweetalert2.all.min.js"></script>
    <script src="{{ asset('js/app.js') }}?{{ uniqid() }}"></script>
    @yield('scripts')
</body>
</html>
