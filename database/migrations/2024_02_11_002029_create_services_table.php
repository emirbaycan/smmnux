<?php

# database/migrations/2023_05_14_151218_create_posts_table.php

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
        Schema::create('services', function (Blueprint $table) {
            $table->integer('service_id')->primary()->autoIncrement();
            $table->smallInteger('provider');
            $table->integer('provider_service_id');
            $table->mediumInteger('parent_category');
            $table->string('category');
            $table->string('name');
            $table->string('type');
            $table->double('rate');
            $table->integer('min');
            $table->integer('max');
            $table->tinyInteger('dripfeed');
            $table->tinyInteger('refill');
            $table->tinyInteger('cancel');
            $table->text('desc')->nullable();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            $table->timestamp('created_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};