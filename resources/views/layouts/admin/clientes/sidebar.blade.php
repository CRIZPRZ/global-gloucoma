<div class="sidebar-wrapper sidebar-theme">
    <nav id="sidebar">
        <div class="navbar-nav theme-brand flex-row  text-center">
            <div class="nav-logo">
                <div class="nav-item theme-logo">
                    {{-- <a href="{{ asset('clientes/admin/dashboard') }}">
                        <img src="{{ asset('images/logos/usplat_blanco.png') }}" class="navbar-logo" alt="logo">
                    </a> --}}
                </div>
                <div class="nav-item theme-text">
                    <a href="{{ asset('clientes/admin/dashboard') }}" class="nav-link"> dd </a>
                </div>
            </div>
            <div class="nav-item sidebar-toggle">
                <div class="btn-toggle sidebarCollapse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-left"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
                </div>
            </div>
        </div>

        <div class="shadow-bottom"></div>

        <ul class="list-unstyled menu-categories" id="accordionExample">
            <!-- Menus -->
            @include('layouts.admin.clientes.menusidebar')
            {{-- @if (!Session::has('deporte_por_equipo'))
                @include('layouts.admin.clientes.menusidebardeportespersonas')
            @else
                @if ((Bool) Session::get('deporte_por_equipo'))
                    @include('layouts.admin.clientes.menusidebardeportesequipos')
                @else
                    @include('layouts.admin.clientes.menusidebardeportespersonas')
                @endif
            @endif --}}
        </ul>

    </nav>
</div>
