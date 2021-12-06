<?php

namespace App\Http\Controllers\Admin;

use App\Personal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdatePersonalRequest;
use App\Services\Admin\PersonalService;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class PersonalController extends Controller
{
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

    /**
     * Function to update the personal data
     *
     * @param Personal $personal - Personal data
     * @param Request  $request  - The data
     *
     * @return JsonResponse
     */
    public function update(Personal $personal, UpdatePersonalRequest $request): JsonResponse
    {
        $service = new PersonalService();
        return $service->updatePersonalInfo($personal, $request);
    }
}
