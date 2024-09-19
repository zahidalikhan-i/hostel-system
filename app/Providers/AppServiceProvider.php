<?php

namespace App\Providers;
use App\Repositories\UserRepository;
use App\Interfaces\UserInterface;
use Illuminate\Support\ServiceProvider;
use App\Repositories\StudentsRepository;
use App\Interfaces\StudentsInterface;
use App\Repositories\RoomRepository;
use App\Interfaces\RoomInterface;
use App\Interfaces\StaffTypesInterface;
use App\Repositories\StaffTypesRepository;
use App\Interfaces\StaffProfilesInterface;
use App\Repositories\StaffProfilesRepository;
use App\Interfaces\RoomInfoInterface;
use App\Repositories\RoomInfoRepository;
use App\Interfaces\FeeCategoriesInterface;
use App\Repositories\FeeCategoriesRepository;
use App\Interfaces\MessDetailInterface;
use App\Repositories\MessDetailRepository;
use App\Interfaces\StudentClassesInterface;
use App\Repositories\StudentClassesRepository;
use App\Interfaces\FeeSlipInterface;
use App\Repositories\FeeSlipRepository;



class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

        $this->app->bind(UserInterface::class, UserRepository::class);

        $this->app->bind(StudentsInterface::class, StudentsRepository::class);

        $this->app->bind(RoomInterface::class, RoomRepository::class);

        $this->app->bind(StaffTypesInterface::class, StaffTypesRepository::class);

        $this->app->bind(StaffProfilesInterface::class, StaffProfilesRepository::class);

        $this->app->bind(RoomInfoInterface::class, RoomInfoRepository::class);

        $this->app->bind(FeeCategoriesInterface::class, FeeCategoriesRepository::class);

        $this->app->bind(MessDetailInterface::class, MessDetailRepository::class);    
        
        $this->app->bind(StudentClassesInterface::class, StudentClassesRepository::class); 

        $this->app->bind(FeeSlipInterface::class, FeeSlipRepository::class); 


    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
