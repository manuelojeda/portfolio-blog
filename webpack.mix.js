const mix = require('laravel-mix')
require('laravel-mix-polyfill')
require('laravel-mix-alias')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/Public/app.js', 'public/js')
  .ts('resources/js/Admin/admin.ts', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .options({
    terser: {}
  })
  .alias({
    '@': '/resources/js'
  })
  .extract()
  .version()
  .disableNotifications()
