const mix = require('laravel-mix');


//mix.webpackConfig(webpack => config)
// mix.setPublicPath('public_html');


mix.postCss('resources/css/app.css', 'public/css', [
    //require('tailwindcss'),
    // require('tailwindcss'),
])
    .js('resources/js/app.js', 'public/js')
    .vue({ version: 3 });
