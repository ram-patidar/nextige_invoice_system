<template>
    <div class="row">
            <Breadcrumbs/>

        <router-link to="/invoice" class="btn custom-btn"><svg xmlns="http://www.w3.org/2000/svg" width="8.152" height="14.258" viewBox="0 0 8.152 14.258"><path d="M13.319,16.941l5.391-5.4a1.015,1.015,0,0,1,1.439,0,1.028,1.028,0,0,1,0,1.443L14.041,19.1a1.017,1.017,0,0,1-1.405.03L6.485,12.993A1.019,1.019,0,1,1,7.924,11.55Z" transform="translate(19.399 -6.188) rotate(90)" fill="#fff"/></svg> Back</router-link>
        <div class="col-12">
            <div class="card">
                
                <div class="card-header">
                    <h4>Update Invoice</h4>
          
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Client name</label>
                                    <input type="text" class="form-control" v-model="client_name" disabled>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="Invoice.description">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Amount</label>
                                    <input type="number" class="form-control" v-model="Invoice.amount">
                                </div>
                            </div>
                           
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"update-Invoice",
    data(){
        return {
            Invoice:{
                description:"",
                amount:"",
                _method:"patch"
            },
            client_name:"",
        }
    },
    mounted(){
        this.showInvoice()
    },
    methods:{
        async showInvoice(){
            await this.axios.get(`/api/Invoice/${this.$route.params.id}`).then(response=>{
                const { description, amount, client_name } = response.data.JoinData
                this.Invoice.amount = amount
                this.Invoice.description = description
                this.client_name = client_name
                console.log(response.data.JoinData)
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/Invoice/${this.$route.params.id}`,this.Invoice).then(response=>{
                 this.$swal(
                  'Update',
                  `Invoice Update Successfully.`,
                  'success'
                )
                this.$router.back()
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>