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
        Schema::create('users', function (Blueprint $table) {
            $table->integer('user_id')->primary()->autoIncrement();
            $table->smallInteger('user_rank')->default(1);
            $table->smallInteger('membership')->default(1);
            $table->float('points')->default(0);
            $table->string('username')->unique();
            $table->string('fullname');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('skype');
            $table->string('whatsapp');
            $table->string('telegram');
            $table->float('balance')->default(0);
            $table->float('spend')->default(0);
            $table->smallInteger('language')->default(1);
            $table->smallInteger('timezone')->default(1);
            $table->rememberToken();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
