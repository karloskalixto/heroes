<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class HeroesController extends Controller
{
    public function index(){
        $url = env('URL_HEROES_API','https://127.0.0.1');
        $response = Http::withHeaders([
            'X-RapidAPI-Key' => 'be67a5c437mshe31b824956270f7p180348jsn7b4d944b5001',
            'X-RapidAPI-Host' => 'superhero-search.p.rapidapi.com'
        ])->get($url.'/?hero=Deadpool');
        $data = $response->json();
        return $data;
        //dd($data);
    }
}
