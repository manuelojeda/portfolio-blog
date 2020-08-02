<?php
// phpcs:disable
use App\Personal;
use Illuminate\Database\Seeder;

class PersonalSeeder extends Seeder
{
    // phpcs:enable
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Personal::truncate();
        
        $data = collect(
            [
                'name' => config('app.dev_name'),
                'position' => config('app.dev_position'),
                'email' => config('app.dev_email'),
                'photo' => 'https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0'
            ]
        );

        Personal::create(
            [
                'data' => $data
            ]
        );
    }
}
