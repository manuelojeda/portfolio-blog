<?php

namespace App\Http\Controllers\Admin;

use App\Personal;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Function that connects and sends the personal information data
     *
     * @return View
     */
    public function index(): View
    {
        $personal = Personal::first();

        return view('admin.dashboard')
            ->with('personal', $personal);
    }
}
