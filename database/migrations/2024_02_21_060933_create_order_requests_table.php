<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_requests', function (Blueprint $table) {
            $table->integer('request_id')->autoIncrement()->primary();
            $table->integer('service_id');
            $table->integer('user_id');
            $table->json('service');
            $table->json('order_details');
            $table->float('amount');
            $table->tinyInteger('paid')->default(0);
            $table->timestamp('paid_at')->nullable();
            $table->tinyInteger('valid')->default(0);
            $table->timestamp('valid_at')->nullable();
            $table->integer('valid_by')->default(0);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_requests');
    }
};
