<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">

    @yield('meta')

    {{-- @include('publicv2.includes.tagmanagerhead') --}}

    <title>@yield('title')</title>

    <link rel="icon" type="image/x-icon" href="{{ asset('/favicon.ico') }}"/>
    <link href="{{ asset('/admin/css/light/loader.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/css/dark/loader.css') }}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="{{ asset ('/admin/js/loader.js') }}?{{ uniqid() }}"></script>
    <script src="{{ asset('js/utilities.js') }}?{{ uniqid() }}"></script>

    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
    <link href="{{ asset('/admin/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/css/light/plugins.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/css/light/search.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/css/light/switches.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/css/light/modal.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/css/light/tabs.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/css/dark/plugins.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/css/dark/search.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/css/dark/switches.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/css/dark/modal.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/admin/css/dark/tabs.css') }}" rel="stylesheet" type="text/css" />
    <!-- END GLOBAL MANDATORY STYLES -->

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>

    @inertiaHead
    @routes
</head>

<body class="layout-boxed">

    {{-- @include('publicv2.includes.tagmanagerhead') --}}

    <!-- BEGIN LOADER -->
    <div id="load_screen"> <div class="loader"> <div class="loader-content">
        <div class="spinner-grow align-self-center"></div>
    </div></div></div>
    <!--  END LOADER -->

    @include('layouts.admin.clientes.navbar')

    <!--  BEGIN MAIN CONTAINER  -->
    <div class="main-container" id="container">

        <div class="overlay"></div>
        <div class="search-overlay"></div>

        @include('layouts.admin.clientes.sidebar')

        <!--  BEGIN CONTENT AREA  -->
        <div id="content" class="main-content">
            <div class="layout-px-spacing">

                <div class="middle-content container-xxl p-0"  >
                    @include('layouts.admin.clientes.topbar')


                    @inertia

                </div>

            </div>

            @include('layouts.admin.clientes.footer')

        </div>
        <!--  END CONTENT AREA  -->

    </div>

    @yield('modals')
    <!-- END MAIN CONTAINER -->
    <script>
        window.appLocale = "{{ app()->getLocale() }}";
    </script>
    <script src="https://code.jquery.com/jquery-3.6.2.min.js" integrity="sha256-2krYZKh//PcchRtd+H+VyyQoZ/e3EcrkxhM8ycwASPA=" crossorigin="anonymous"></script>
    <script src="{{ asset('/admin/js/bootstrap.bundle.min.js') }}?{{ uniqid() }}"></script>
    <script src="{{ asset('/admin/js/perfect-scrollbar.min.js') }}?{{ uniqid() }}"></script>
    <script src="{{ asset('/admin/js/mousetrap.min.js') }}?{{ uniqid() }}"></script>
    <script src="{{ asset('/admin/js/waves.min.js') }}?{{ uniqid() }}"></script>
    <script src="{{ asset('/admin/js/app.js') }}?{{ uniqid() }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.15/dist/sweetalert2.all.min.js"></script>
    <script src="{{ asset('js/app.js') }}?{{ uniqid() }}"></script>
    {{-- <script src="../layouts/vertical-light-menu/app.js"></script> --}}
    @yield('scripts')
</body>
</html>
