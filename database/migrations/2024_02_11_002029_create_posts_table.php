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
        Schema::create('posts', function (Blueprint $table) {
            $table->integer('post_id')->primary()->autoIncrement();
            $table->integer('writer_id');
            $table->tinyInteger('visible')->default(0);
            $table->string('head');
            $table->string('slug');
            $table->text('desc');
            $table->string('image')->nullable();
            $table->text('body');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};