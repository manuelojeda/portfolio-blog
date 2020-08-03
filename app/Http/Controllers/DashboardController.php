<?php
// phpcs:disable
namespace App\Http\Controllers;

use App\Personal;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(): View
    {
        $personal = Personal::select('data')->first();

        return view('welcome')
            ->with('personal', $personal);
    }
}
