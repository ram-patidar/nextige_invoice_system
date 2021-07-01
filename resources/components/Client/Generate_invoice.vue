<template>
<div>
<div>
   <img class="logo" src="http://127.0.0.1:8000/nextige-logo.png" alt="">
</div>
<div class="right">
            <p><b>Nextige Soft Solution</b></p>
            <p>Thandla Rd 151, Petlawad,</p>
            <p>Madhya Pradesh 457773 <br> India
            <p> GSTIN : 23AARFN8252G1Z0</p>
</div>
    <div class="row">
         <h4 class="underline">Date: {{date}}</h4>
         <div><br>
               <p>To, </p> 
                <p><b> {{Client.company_name}}</b></p>
                <p>{{Client.address}}</p>
         </div>
        <div class="col-12 mb-2 text-end">
        </div>
        <div class="col-12">
            <h5 class="center"><span>Invoice</span> {{ Client.invoice_code}}</h5>
            <div class="">
                <div class="">
                    <div class="table-responsive">
                        <table class="table table-bordered center">
                            <thead>
                                <tr class="card-header">
                                    <th>Qty.</th>
                                   <th>Description</th>
                                   <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody v-if="Invoices.length > 0">
                                <tr v-for="(Invoice,key) in Invoices" :key="key">
                                    <td>{{key+1}}</td>
                                    <td>{{ Invoice.description }}</td>
                                    <td>${{Invoice.amount }}</td>
                                </tr>
                                <tr class="card-header center">
                                    <td colspan="2" class="right"><b> Total</b></td>
                                    <td> <b>${{ sum }}</b></td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Invoices Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div>
                <div>
                    <p><b>Name: Jagdish Patidar</b></p>
                    <p> For and on behalf of <br> Company’s Name: <b>Nextige Soft Solution</b></p>
                </div>
                <div class="right">
                    <p> Account Name: <b> Nextige Soft Solution</b></p>

                    <p> Account No.<b>920020039976795</b></p>

                    <p> Bank Name:<b> Axis Bank LTD</b></p>

                    <p> Bank Address:<b>Anant Khedi MP,</b></p>

                    <p><b>Jhabua, M. P. 457773</b></p>
                    <p> IFSC Code:<b>UTIB0001324</b></p>
                </div>
                    <button class="btn btn-success" @click="print">Print</button>
        </div>
        </footer>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            Client:{
                invoice_code:"",
                client_name:"",
                company_name:"",
                email:"",
                address:"",
            },
        date:null,
        Invoices: []
        }
    },
    mounted(){
        this.date_function()
        this.clientInfo()
        this.getInvoices()
    },
    methods:{
        print(){
            window.print();
        },
        date_function() {
        const current = new Date();
      const date = current.getDate()+'/'+(current.getMonth()+1)+'/'+current.getFullYear();
      this.date = date
        },
         async clientInfo(){
            await this.axios.get(`/api/Client/${this.$route.params.id}`).then(response=>{
                const { invoice_code, client_name, company_name, email , address } = response.data
                this.Client.invoice_code = invoice_code
                this.Client.client_name = client_name
                this.Client.company_name = company_name
                this.Client.email = email
                this.Client.address = address
            }).catch(error=>{
                console.log(error)
            })
        },
        //  async getInvoices(){
        //     await this.axios.get(`/api/Invoice/${this.$route.params.id}` ).then(response=>{
        //         console.log(response.data.Client_invoice)
        //         this.Invoices = response.data.Client_invoice
        //         this.sum = response.data.Sum_invoice;

        //     }).catch(error=>{
        //         console.log(error)
        //         this.Invoices = []
        //     })
        // },
         async getInvoices(){
            await this.axios.get('/api/Invoice').then(response=>{
                this.Invoices = response.data.Invoices
                this.sum = response.data.Sum
                // console.log(response.data)
            }).catch(error=>{
                console.log(error)
                this.Invoices = []
            })
        },

    }
}
</script>
<style scoped>
.center{
    text-align:center
}
.right{
    text-align: right;
}
.underline {
    border-bottom: 1px solid #050505;
}
</style>