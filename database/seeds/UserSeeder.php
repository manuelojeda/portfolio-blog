<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Manuel Ojeda',
            'email' => config('app.admin_mail'),
            'password' => bcrypt(config('app.admin_key')),
        ]);
    }
}
