<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessDetailsTable extends Migration
{
    public function up()
    {
        Schema::create('mess_details', function (Blueprint $table) {
            $table->id();
            $table->string('day');
            $table->string('breakfast_time');
            $table->string('break_fast');
            $table->string('lunch_time');
            $table->string('lunch');
            $table->string('dinner_time');
            $table->string('dinner');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mess_details');
    }
}
