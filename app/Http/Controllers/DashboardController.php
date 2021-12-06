<?php

namespace App\Http\Controllers;

use App\Personal;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Services\GetCurrentYear;
use Illuminate\Contracts\View\View;

class DashboardController extends Controller
{
    public function __construct(private GetCurrentYear $getCurrentYear)
    {
        $this->getCurrentYear = new GetCurrentYear();
    }

    public function index(): View
    {
        $personal = Personal::select('data')->first();

        return view('welcome')
            ->with('currentYear', $this->getCurrentYear->__invoke())
            ->with('personal', $personal);
    }
}
