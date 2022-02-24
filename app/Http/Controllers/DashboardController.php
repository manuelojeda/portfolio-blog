<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Personal;
use App\Services\BlogService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Services\GetCurrentYear;
use Illuminate\Contracts\View\View;

class DashboardController extends Controller
{
    public function __construct(
        private BlogService $blogService = new BlogService()
    ) {}

    public function index(): View
    {
        return view('welcome');
    }
}
