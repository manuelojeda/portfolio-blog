<?php

namespace App\Services\Admin;

use App\Http\Requests\UpdatePersonalRequest;
use App\Personal;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;

class PersonalService
{
    public function updatePersonalInfo(Personal $personal, UpdatePersonalRequest $request): JsonResponse
    {
        $data = isset($request->file)
            ? (array) json_decode($request->personal)
            : $request->personal;

        if (isset($request->file)) {
            $data['data'] = $this->saveProfilePic(
                data: $data,
                request: $request
            );
        }

        if ($personal->update($data)) {
            return response()->json(
                data: [
                    'band' => true,
                    'text' => 'Information saved',
                    'icon' => 'success'
                ],
                status: 200
            );
        } else {
            return response()->json(
                data: [
                    'band' => false,
                ],
                status: 500
            );
        }
    }

    private function saveProfilePic(array $data, UpdatePersonalRequest $request): array
    {
        $request->file->move('img', 'profile_pic.jpg');
        $arrayData = (array) $data['data'];
        $jsonData = collect($arrayData);
        $jsonData['photo'] = '/img/profile_pic.jpg';
        return $jsonData->toArray();
    }
}
