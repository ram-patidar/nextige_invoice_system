<template>
<div>
    <h2>Invoice 
        <!-- {{Invoice_code}} -->
        </h2>
    <div>
      <router-link :to='{name:"ClientList"}' class="btn btn-primary back">&#8592; Back</router-link>
        
    </div>
    <table class="table table-bordered text-center">
            <thead class="text">
                <tr class="card-header">              
                    <th>Desciption</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody v-if="Invoices.length > 0">
                                <tr v-for="(Invoice,key) in Invoices" :key="key">
                                    <td>{{ Invoice.description }}</td>
                                    <td>${{ Invoice.amount }}</td>
                                    <td>
                                        <router-link :to='{name:"InvoiceEdit",params:{id:Invoice.id}}' class="btn btn-success">Edit</router-link>
                                        <button type="button" @click="deleteInvoice(Invoice.id, Invoice.description)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <h2>Total</h2>
                                    <td> <b>${{ sum }}</b></td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Invoices Found.</td>
                                </tr>
                            </tbody>
                <tbody>
                    <tr v-for="(user, key) in users" :key="key">
                    <input name="client_id"  v-model="users.client_id"  class="form-control" type="hidden" />
                    <td>
                    <input name="description"  v-model="users.description"  class="form-control" type="text" />
                    </td>
                    <td>
                    <input name="amount" v-model="users.amount" class="form-control" type="number" />
                    </td>
                    <td>
                    <button  @click="create" class="btn btn-primary">Save</button>
                    <button  @click="deleteRow(key)" class="btn btn-danger">Drop</button>
                    </td>
                </tr>                        
        </tbody>
    </table>
    <div>
   <button class="btn btn-primary"  @click="addRow">Add Row</button>
      <router-link :to='{name:"Generate_invoice",params:{id:this.$route.params.id}}' class="btn btn-primary">Generate Invoice</router-link>
 
    </div>
</div>
</template>
<script>
export default {
 data(){
        return {
            users:[{
                client_id : '',
                description:'',
                amount:'',
                }] ,
            Invoices:[],
            sum:'',
        }
    },
    mounted(){
        this.getInvoices()
    },
    methods: {
       async getInvoices(){
            await this.axios.get('/api/Invoice').then(response=>{
                this.Invoices = response.data.Invoices
                this.sum = response.data.Sum
                console.log(response.data.Invoices[0])
            }).catch(error=>{
                console.log(error)
                this.Invoices = []
            })
        },

    addRow: function() {      
       this.users.push({description:'',amount:''})
    },
    deleteRow(key){    
        this.users.splice(key,1);             
    },
    deleteInvoice(id, name){
           this.$swal({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.value) {
                this.axios.delete(`/api/Invoice/${id}`).then(response=>{
                this.$swal(
                  'Deleted!',
                  `${name} has been deleted.`,
                  'success'
                )
              })
              }
        this.getInvoices()
            });             
        },
       
    async create(){
            await this.axios.post('/api/Invoice',{client_id:this.$route.params.id,description:this.users.description, amount:this.users.amount}).then(response=>{
                 this.$swal(
                  'Added',
                  `Invoice Added Success.`,
                  'success'
                )
                this.getInvoices()
                    this.$router.go()
                this.errors= error.response.data.errors;
            }).catch(error=>{
                 this.errors= error.response.data.errors;
            })
        },
    //     async Clients() {
    //   await this.axios.get("/api/Client").then((response) => {
    //     this.Invoice_code = response.data.Invoice_code
    //   });
    // },
}
}

</script>
<style scoped>
.back{
    text-align: right;
        position: inherit;
    margin: 0;
    margin-left: 1039px;
    margin-top: -111px;
}
</style>
