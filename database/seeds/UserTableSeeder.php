<?php
use Illuminate\Database\Seeder;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // php artisan db:seed
        DB::table('users')->insert([
        	'name' => 'David Cabrera',
        	'email' => 'david.cabrera51@hotmail.com',
        	'password' => bcrypt('admin'),
        ]);
    }
}