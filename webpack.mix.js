const mix = require('laravel-mix')
const path = require('path')
// require('laravel-mix-polyfill')
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
  .ts('resources/js/Public/app.ts', 'public/js')
  .ts('resources/js/Admin/admin.ts', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss')
  ])
  .postCss('resources/css/public.css', 'public/css', [
    require('tailwindcss')
  ])
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
