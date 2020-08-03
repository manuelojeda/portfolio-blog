<?php
// phpcs:disable
namespace App\Http\Controllers\Admin;

use App\Personal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

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

    /**
     * Function to update the personal data
     * 
     * @param Personal $personal - Personal data
     * @param Request  $request  - The data
     * 
     * @return JsonResponse
     */
    public function update(Personal $personal, Request $request): JsonResponse
    {
        $request->validate(
            [
                'personal' => 'required',
                'file' => 'nullable'
            ]
        );

        $data = isset($request->file)
            ? (array)json_decode($request->personal)
            : $request->personal;

        if (isset($request->file)) {
            $request->file->move('img', 'profile_pic.jpg');
            $json_data = collect($data['data']);
            $json_data['photo'] = '/img/profile_pic.jpg';
            $data['data'] = $json_data;
        }

        if ($personal->update($data)) {
            return response()->json(
                [
                    'band' => true,
                    'text' => 'Information saved',
                    'icon' => 'success'
                ],
                200
            );
        } else {
            return response()->json(
                [
                    'band' => false,
                ],
                500
            );
        }
    }
}
