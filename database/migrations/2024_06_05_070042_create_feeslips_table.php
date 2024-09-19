<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeeSlipsTable extends Migration
{
    public function up()
    {
        Schema::create('fee_slips', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id');
            $table->unsignedBigInteger('fee_category_id');
            $table->string('first_name'); 
            $table->string('last_name');
            $table->string('roll_number');
            $table->string('fee_type');
            $table->string('status');
            $table->string('month');
            $table->timestamps();

        
        });
    }

    public function down()
    {
        Schema::dropIfExists('fee_slips');
    }
}
