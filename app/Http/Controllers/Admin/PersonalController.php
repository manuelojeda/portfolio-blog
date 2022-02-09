<?php

namespace App\Http\Controllers\Admin;

use App\Personal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdatePersonalRequest;
use App\Services\Admin\PersonalService;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;

class PersonalController extends Controller
{
    /**
     * Function that connects and sends the personal information data
     *
     * @return View
     */
    public function index(): View
    {
        $personal = Personal::first();

        /** @var string */
        $view = 'admin.personal.index';
        
        return view($view)
            ->with('personal', $personal);
    }

    /**
     * Function to update the personal data
     *
     * @param Personal $personal - Personal data
     * @param UpdatePersonalRequest  $request  - The data
     *
     * @return JsonResponse
     */
    public function update(Personal $personal, UpdatePersonalRequest $request): JsonResponse
    {
        $service = new PersonalService();
        return $service->updatePersonalInfo(
            personal: $personal,
            request: $request
        );
    }
}
