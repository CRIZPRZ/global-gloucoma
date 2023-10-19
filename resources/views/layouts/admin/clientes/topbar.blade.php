<div class="secondary-nav">
    <div class="breadcrumbs-container" data-page-heading="Analytics">
        <header class="header navbar navbar-expand-sm">
            <a href="javascript:void(0);" class="btn-toggle sidebarCollapse" data-placement="bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </a>
            <div class="d-flex breadcrumb-content">
                <div class="page-header">

                    <div class="page-title">
                    </div>

                    <nav class="breadcrumb-style-one" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/clientes/admin/dashboard">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page"><a href="{{ url()->current() }}">{{ collect(request()->segments())->last() }}</a></li>
                        </ol>
                    </nav>

                </div>
            </div>
            <ul class="navbar-nav flex-row ms-auto breadcrumb-action-dropdown">
                <li class="nav-item more-dropdown">
                    <div class="dropdown custom-dropdown-icon pre-scrollable">
                        {{-- <a class="dropdown-toggle btn" href="#" role="button" id="customDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            @if (!Session::get('nombre_campeonato_seleccionado'))
                                <span id="nombre_campeonato">{{ __('Seleccione un campeonato') }}</span>
                            @else
                                <span id="nombre_campeonato">{{ Session::get('nombre_campeonato_seleccionado') }} - {{ Session::get('nombre_deporte_campeonato_seleccionado') }}</span>
                            @endif
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down custom-dropdown-arrow"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </a> --}}


                        {{-- <div class="dropdown-menu dropdown-menu-right" aria-labelledby="customDropdown" style="overflow: hidden;
                        overflow-y: auto;
                        max-height: calc(100vh - 150px);">
                            @php($campeonatosActivos = $campeonatos->getCampeonatosActivos())
                            @if ($campeonatosActivos->isEmpty())
                                <a class="dropdown-item" href="#"> {{ __('Sin campeonatos activos') }}
                                </a>
                            @else
                                @foreach ($campeonatosActivos as $campeonatoActivo)
                                    @if (isset($campeonatoActivo->id_campeonato))
                                    <a class="dropdown-item" href="/admin/seleccionarCampeonatoBlade/{{ $campeonatoActivo->id_campeonato }}"> {{ $campeonatoActivo->nombre_campeonato }} - {{ $campeonatoActivo->nombre_deporte }}
                                    </a>
                                    @endif
                                @endforeach
                            @endif
                        </div> --}}

                    </div>
                </li>
            </ul>
        </header>
    </div>
</div>
