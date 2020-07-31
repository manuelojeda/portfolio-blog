<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Exception;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
  public function redirectToProvider()
  {
    return Socialite::driver('github')->redirect();
  }
  
  public function handleProviderCallback()
  {
      try {
          $user = Socialite::driver('github')->user();
      } catch (Exception $e) {
          return Redirect::to('auth/github');
      }

      $authUser = $this->findOrCreateUser($user);

      Auth::login($authUser, true);

      // return Redirect::to('home');
      return Redirect::to('admin');
  }

  /**
   * Return user if exists; create and return if doesn't
   *
   * @param $githubUser
   * @return User
   */
  private function findOrCreateUser($githubUser)
  {
      // dd($githubUser);
      if ($authUser = User::where('email', $githubUser->email)->first()) {
          return $authUser;
      }

    //   return User::create([
    //       'name' => $githubUser->name,
    //       'email' => $githubUser->email,
    //       'github_id' => $githubUser->id,
    //       'avatar' => $githubUser->avatar
    //   ]);
  }
}
