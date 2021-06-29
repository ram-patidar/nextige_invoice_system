<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\Client;

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
            'description'=>['required'],
            'amount'=>['required'],
            'client_id'=>['required']
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
    // public function show($id)
    // {
    //     // return response()->json($Invoice);
    //     $Invoice = Invoice::find($id);
    //     return response()->json([
    //         'Client_invoice'=>$Invoice->where('id','=',$id)->get(),
    //         'Sum_invoice'=>$Invoice->where('id','=',$id)->sum('amount')
    //     ], 200);
    // }
    
    public function show(Invoice $Invoice)
    {
        return response()->json($Invoice);
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