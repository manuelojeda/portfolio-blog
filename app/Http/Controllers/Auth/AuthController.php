<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Exception;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function redirectToProvider(): RedirectResponse
    {
        return Socialite::driver('github')->redirect();
    }
    
    public function handleProviderCallback(): RedirectResponse
    {
        try {
            $user = Socialite::driver('github')->user();
        } catch (Exception $e) {
            return Redirect::to('auth/github');
        }

        $authUser = $this->findOrCreateUser($user);

        Auth::login($authUser, true);

        return Redirect::to('admin');
    }

    /**
     * Return user if exists; create and return if doesn't
     *
     * @param mixed $githubUser
     */
    private function findOrCreateUser($githubUser): ?User
    {
        if ($authUser = User::where('email', $githubUser->email)->first()) {
            return $authUser;
        }

        return null;
    }
}
