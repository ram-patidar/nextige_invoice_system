<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <!-- <router-link :to='{name:"InvoiceAdd"}' class="btn btn-primary">Create</router-link> -->
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Invoice</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered text-center">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="Invoices.length > 0">
                                <tr v-for="(Invoice,key) in Invoices" :key="key">
                                    <td>{{key+1}}</td>
                                    <td>{{ Invoice.description }}</td>
                                    <td>${{ Invoice.amount }}</td>
                                    <td>
                                        <router-link :to='{name:"InvoiceEdit",params:{id:Invoice.id}}' class="btn btn-success">Edit</router-link>
                                        <button type="button" @click="deleteInvoice(Invoice.id,Invoice.description)" class="btn btn-danger">Delete</button>
                                    </td>
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
    </div>
</template>
<script>
export default {
    
    name:"Invoices",
    data(){
        return {
            Invoices:[]
        }
    },
    mounted(){
        this.getInvoices()
    },
    methods:{
         async getInvoices(){
            await this.axios.get('/api/Invoice').then(response=>{
                this.Invoices = response.data.Invoices
                // console.log(response.data)
            }).catch(error=>{
                console.log(error)
                this.Invoices = []
            })
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
        }
       
        
    }
}
</script>
