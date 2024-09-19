<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Interfaces\CommonInterface;

class CommonController extends Controller
{

    public function index(Request $request)
    {
        $options = $request->options;


        if (!empty($options)) {
            $options = explode(',', $options);
        }

        if (!empty($options)) {
            foreach ($options as $option) {

                if ($option == 'student_classes') {
                    $option = 'studentClasses';
                }

                if ($option == 'customer' || $option == 'supplier') {
                    $request->merge(['contact_type' => $option]);
                    $option = 'contact';
                }


                $interface_name = ucfirst($option) . 'Interface';

               

                if (file_exists(app_path() . '/Interfaces/' . $interface_name . '.php')) {

                    $repository = 'App\Repositories\\' . ucfirst($option) . 'Repository';
                   

                    $repository = new $repository;
                    // dd($repository);
                    if ($option == 'category') {
                        $return_index = 'categories';
                    } elseif ($option == 'TaxClass') {
                        $return_index = 'tax_classes';
                    } elseif ($option == 'studentClasses') {
                        $return_index = 'student_classes';
                    } else {
                        $return_index = $option . 's';
                    }

                    $data = [];

                    $response = $repository->getOptions($request);
                    if (!empty($response)) {
                        $response_data = $response->getData();

                        $data = !empty($response_data->$return_index) ? $response_data->$return_index : [];
                    }

                    $options[$return_index] = $data;
                }
            }
        }
        return json_encode($options);
    }
}