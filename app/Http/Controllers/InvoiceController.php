<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use DB;

class InvoiceController extends Controller
{
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Invoices = Invoice::all(['id','client_id','description','amount']);
        return response()->json([
            'Invoices' => $Invoices,
            'Sum'=>$Invoices->sum('amount'),
            'Invoice_count' => $Invoices->count()
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
        // $Invoice = Invoice::create($request->post());
        // return response()->json([
        //     'message'=>'Invoice Created Successfully!!',
        //     'Invoice'=>$Invoice
        // ]);
        $request->validate([
            'description' => 'required',
            'amount' => 'required',
            'client_id' => 'required'
        ],
        [
            'description.required' => 'The description field is required.',
            'amount.required' => 'The amount field is required.',
            'client_id.required' => 'The Client option is required.'
        ]);

        if($Invoice = Invoice::create($request->post())){
            return response()->json([
                    'message'=>'Invoice Created Successfully!!',
                    'category'=>$Invoice
                ]);
        }
        throw ValidationException::withMessages([
            'msg' => ['Insert data first.']
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Invoice  $Invoice
     * @return \Illuminate\Http\Response
     */
   
    public function show($client_id)
    {
        $Invoice = Invoice::all();
        return response()->json([
            'length'=>$Invoice->where('client_id', '=', $client_id)->count(),
            'Sum'=>$Invoice->where('client_id', '=', $client_id)->sum('amount'),
            'showData'=>$Invoice->where('client_id', '=', $client_id),
            'editData'=>$Invoice->where('id', '=', $client_id)->first()
        ]);
    }
   
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Invoice  $Invoice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Invoice $Invoice)
    {
        $Invoice->fill($request->post())->save();
        return response()->json([
            'message'=>'Invoice Updated Successfully!!',
            'Invoice'=>$Invoice
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Invoice  $Invoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $Invoice)
    {
        $Invoice->delete();
        return response()->json([
            'message'=>'Invoice Deleted Successfully!!'
        ]);
    }
  
}