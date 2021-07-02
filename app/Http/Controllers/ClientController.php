<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;


class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Clients = Client::all(['id','invoice_code','client_name','country','company_name','email','address']);
        return response()->json([
            'Clients' => $Clients,
            'last_id' => $Clients->max('id'),
            'Client_count' => $Clients->count()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'company_name'=>['required'],
            'client_name'=>['required'],
            'email' => ['required','email'],
            'address' => ['required'],
            'country' => ['required'],
        ]);

        if($Client = Client::create($request->post())){
                        return response()->json([
                    'message'=>'Client Created Successfully!!',
                    'Client'=>$Client
                ]);
        }
        throw ValidationException::withMessages([
            'msg' => ['Insert data first.']
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Client $Client)
    {
        return response()->json($Client);
    }

    public function clientInfo($id)
    {
        return response()->json($Client);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $Client)
    {
        $Client->fill($request->post())->save();
        return response()->json([
            'message'=>'Client Updated Successfully!!',
            'category'=>$Client
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $Client)
    {
        $Client->delete();
        return response()->json([
            'message'=>'Client Deleted Successfully!!'
        ]);
    }
}