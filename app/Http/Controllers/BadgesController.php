<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Badge;

class BadgesController extends Controller
{
    public function index() {
        $badges = Badge::all();
        return $badges;
    }

    public function show($id) {
        $badges = Badge::findOrFail($id);
        return $badges;
    }
    
    public function destroy($id) {
        $badges = Badge::findOrFail($id);
        $badges->delete();
    }

    public function store(Request $request) {
        $data = $request->validate([
            'firstName' => 'string|required',
            'lastName' => 'string|required',
            'jobTitle' => 'string|required',
            'email' => 'string|required',
            'twitter' => 'string|required',
        ]);

        $badge = new Badge;

        $badge->firstName = $data['firstName'];
        $badge->lastName = $data['lastName'];
        $badge->jobTitle = $data['jobTitle'];
        $badge->email = $data['email'];
        $badge->twitter = $data['twitter'];
        $badge->save();
    }
    public function update($id, Request $request) {
        $data = $request->validate([
            'firstName' => 'string|required',
            'lastName' => 'string|required',
            'jobTitle' => 'string|required',
            'email' => 'string|required',
            'twitter' => 'string|required',
        ]);

        $badge = Badge::findOrFail($id);

        $badge->firstName = $data['firstName'];
        $badge->lastName = $data['lastName'];
        $badge->jobTitle = $data['jobTitle'];
        $badge->email = $data['email'];
        $badge->twitter = $data['twitter'];
        $badge->save();
    }
}
