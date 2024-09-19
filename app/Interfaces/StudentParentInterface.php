<?php

namespace App\Interfaces;

use App\Models\StudentParent;
interface StudentParentInterface
{
    public function getOptions($request,$id);
    public function getParents($request);
    
}
