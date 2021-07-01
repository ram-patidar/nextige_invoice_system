<template>
    <div class="row">
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
            }
        }
    },
    mounted(){
        this.showInvoice()
    },
    methods:{
        async showInvoice(){
            await this.axios.get(`/api/Invoice/${this.$route.params.id}`).then(response=>{
                const { description, amount } = response.data.editData
                this.Invoice.amount = amount
                this.Invoice.description = description
                console.log(response.data.editData)
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