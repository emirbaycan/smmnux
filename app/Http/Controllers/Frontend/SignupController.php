<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

use Inertia\Inertia;
use Inertia\Response;

class SignupController extends Controller
{
    /**
     * Display the service view.
     */
    public function create(): Response
    {
        return Inertia::render('Frontend/Signup');
    }
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'fullname' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', Rules\Password::defaults()],
            'skype' => 'string|max:255',
            'whatsapp' => 'string|max:255',
            'telegram' => 'string|max:255',
        ]);

        $user = User::create([
            'email' => $request->email,
            'username' => $request->username,
            'fullname' => $request->fullname,
            'skype' => $request->skype,
            'whatsapp' => $request->whatsapp,
            'telegram' => $request->telegram,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
