<?php
// phpcs:disable
namespace App\Http\Controllers\Admin;

use App\Personal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;

class PersonalController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    // phpcs:enable

    /**
     * Function that connects and sends the personal information data
     * 
     * @return Personal
     */
    public function index(): View
    {
        $personal = Personal::first();
        
        return view('admin.personal.index')
            ->with('personal', $personal);
    }
}
