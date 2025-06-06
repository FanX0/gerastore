<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('subdistricts', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\City::class)->constrained()->cascadeOnDelete();
            $table->string('name');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subdistricts');
    }
};
