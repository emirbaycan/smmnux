<?php
# database/factories/PostFactory.php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'writer_id' => 1,
            'head' => fake()->sentence(),
            'desc' => fake()->text(200),
            'body' => fake()->paragraphs(5, true),
            'slug' => fake()->slug()
        ];
    }
}
