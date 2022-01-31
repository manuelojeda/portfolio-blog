const mix = require('laravel-mix')
const path = require('path')
require('laravel-mix-polyfill')
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

mix
  .js('resources/js/Public/app.js', 'public/js')
  .js('resources/js/Admin/admin.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .sass('resources/sass/dark.scss', 'public/css')
  .options({
    terser: {}
  })
  .alias({
    '@': path.join(__dirname, 'resources/js')
  })
  .extract()
  .version()
  .vue({
    version: 3
  })
  .disableNotifications()
