@foreach ($menus as $menu)

    @php ($show = '')
    @php ($active = '')
    @php ($ariaExpanded = 'false')

    @foreach ($menu['itemsMenu'] as $item)
    @if (Request::is(trim(trim($item[0]), '/').'*'))
        @php ($show = 'show')
        @php ($active = 'active')
        @php ($ariaExpanded = 'true')
    @endif
    @endforeach
    @if ($menu['permission'])
        <li class="menu {{ $active }}">
            @if ( isset($menu['url']))
                <a href="{{ $menu['url'] }}" class="dropdown-toggle">
            @else
                <a href="#{{ $menu['nombreMenu'] }}" data-bs-toggle="collapse" aria-expanded="{{ $ariaExpanded }}" class="dropdown-toggle">
            @endif
                <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    <span>{{ __($menu['nombreMenu']) }}</span>
                </div>
                @if (count($menu['itemsMenu']) > 0)
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                @endif
            </a>


                <ul class="collapse submenu list-unstyled {{ $show }}" id="{{ $menu['nombreMenu'] }}" data-bs-parent="#accordionExample">
                    @foreach ($menu['itemsMenu'] as $item)
                    <li class="{{ Request::is(trim($item[0], '/').'*') ? 'active' : '' }}">
                        <a href="{{ asset($item[0]) }}"> {{ __($item[1]) }} </a>
                    </li>
                    @endforeach
                </ul>
        </li>
    @endif
@endforeach
