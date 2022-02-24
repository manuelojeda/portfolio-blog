<?php

namespace App\Providers;

use App\Services\BlogService;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(BlogService::class, function () {
            return new BlogService();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if(config('app.env') == 'production') {
            URL::forceScheme('https');
            $this->app['request']->server->set('HTTPS','on');
        }
    }
}
