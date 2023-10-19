<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <title>SignIn Cover | CORK - Multipurpose Bootstrap Dashboard Template </title>
    <link rel="icon" type="image/x-icon" href="../src/assets/img/favicon.ico"/>
    <link href="{{ asset('admin/css/light/loader.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('admin/css/dark/loader.css') }}" rel="stylesheet" type="text/css" />
    <script src="{{ asset('admin/js/loader.js') }}"></script>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
    <link href="{{ asset('admin/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />

    <link href="{{ asset('admin/css/light/plugins.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('admin/css/light/auth-cover.css ') }}" rel="stylesheet" type="text/css" />

    <link href="{{ asset('admin/css/dark/plugins.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('admin/css/dark/auth-cover.css') }}" rel="stylesheet" type="text/css" />
    <!-- END GLOBAL MANDATORY STYLES -->

    <link rel="stylesheet" type="text/css" href="{{ asset('admin/css/light/alert.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('admin/css/dark/alert.css') }}">

</head>
<body class="form">

    <!-- BEGIN LOADER -->
    <div id="load_screen"> <div class="loader"> <div class="loader-content">
        <div class="spinner-grow align-self-center"></div>
    </div></div></div>
    <!--  END LOADER -->

    <div class="auth-container d-flex">

        <div class="container mx-auto align-self-center">

            <div class="row">

                <div class="col-6 d-lg-flex d-none h-100 my-auto top-0 start-0 text-center justify-content-center flex-column">
                    <div class="auth-cover-bg-image"></div>
                    <div class="auth-overlay"></div>

                    <div class="auth-cover">

                        <div class="position-relative">

                            <img src="../img/auth-cover.svg" alt="auth-img">

                            <h2 class="mt-5 text-white font-weight-bolder px-2">Join the community of expert developers</h2>
                            <p class="text-white px-2">It is easy to setup with great customer experience. Start your 7-day free trial</p>
                        </div>

                    </div>

                </div>

                <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-12 d-flex flex-column align-self-center ms-lg-auto me-lg-0 mx-auto">
                    <div class="card">
                        @include('public.errors.alerts')
                        <div class="card-body">
                            <form action="{{ route('login.authenticate') }}" method="POST">
                                @csrf
                                <div class="row">
                                    <div class="col-md-12 mb-3">

                                        <h2>{{ __('Iniciar Sesión') }}</h2>
                                        <p>{{ __('Ingresa tu correo y contraseña') }}</p>

                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">{{ __('Correo') }}</label>
                                            <input type="email" name="email" {{ old('email') }} class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-4">
                                            <label class="form-label">{{ __('Contraseña') }}</label>
                                            <input type="password" name="password" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div class="form-check form-check-primary form-check-inline">
                                                <input class="form-check-input me-3" type="checkbox" id="form-check-default">
                                                <label class="form-check-label" for="form-check-default">
                                                    {{ __('Recuerdame') }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="mb-4">
                                            <button class="btn btn-secondary w-100">{{ __('Entrar') }}</button>
                                        </div>
                                    </div>

                                    <div class="col-12 mb-4">
                                        <div class="">
                                            <div class="seperator">
                                                <hr>
                                                <div class="seperator-text"> <span>{{ __('o continua con') }}</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-4 col-12">
                                        <div class="mb-4">
                                            <button class="btn  btn-social-login w-100 ">
                                                <img src="../img/google-gmail.svg" alt="" class="img-fluid">
                                                <span class="btn-text-inner">Google</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-sm-4 col-12">
                                        <div class="mb-4">
                                            <button class="btn  btn-social-login w-100">
                                                <img src="../img/github-icon.svg" alt="" class="img-fluid">
                                                <span class="btn-text-inner">Github</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-sm-4 col-12">
                                        <div class="mb-4">
                                            <button class="btn  btn-social-login w-100">
                                                <img src="../img/twitter.svg" alt="" class="img-fluid">
                                                <span class="btn-text-inner">Twitter</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="text-center">
                                            <p class="mb-0">{{ __('No tines una cuenta') }} ? <a href="javascript:void(0);" class="text-warning">{{ __('Registrate') }}</a></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>

    </div>

    <!-- BEGIN GLOBAL MANDATORY SCRIPTS -->
    <script src="admin/js/bootstrap.bundle.min.js"></script>
    <!-- END GLOBAL MANDATORY SCRIPTS -->


</body>
</html>
