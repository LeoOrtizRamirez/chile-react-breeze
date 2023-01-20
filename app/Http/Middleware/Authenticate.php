<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Support\Facades\URL;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        
        //URL::forceScheme('https');
        //dd($request);
        if (! $request->expectsJson()) {
            return redirect()->secure('/login');
            return route('login');
            return redirect('https://licitacioneschile.info/login');
        }
    }
}
