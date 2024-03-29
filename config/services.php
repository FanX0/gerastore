<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'rajaongkir' => [
        'origin' => env('RAJAONGKIR_ORIGIN', '278'),
        'origin_type' => env('RAJAONGKIR_ORIGIN_TYPE', 'city'), // 'city' atau 'subdistrict
        'key' => env('RAJAONGKIR_KEY', '71f17a81b3697a99baa1543cb0e22d00'),
        'base_url' => env('RAJAONGKIR_BASE_URL', 'https://pro.rajaongkir.com/api'),
    ],

    'midtrans' => [
        'merchant_id' => env('MIDTRANS_MERCHANT_ID', 'merchan_id'),
        'client_key' => env('MIDTRANS_CLIENT_KEY', 'client_key'),
        'server_key' => env('MIDTRANS_SERVER_KEY', 'server_key'),
        'base_url' => env('MIDTRANS_BASE_URL', 'https://api.sandbox.midtrans.com/v2'),
    ],
];
