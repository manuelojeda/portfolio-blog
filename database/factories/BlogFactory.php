<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Blog;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Blog::class, function (Faker $faker) {
    $title = $faker->sentence;
    return [
        'title' => $title,
        'content' => $faker->text,
        'publish' => true,
        'thumbnail' => 'https://i.picsum.photos/id/185/1366/768.jpg?hmac=hNMmOv7so5KohdDsDPeJ8Yvd6XqMMslf5Ka8YEhg-Ro',
    ];
});
