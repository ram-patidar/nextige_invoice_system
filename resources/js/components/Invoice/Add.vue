<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                     <div>
      <router-link :to='{name:"InvoiceList"}' class="btn btn-primary back">&#8592; Back</router-link>
        
    </div>
                    <h4>Add Invoice</h4>
                             <span class="error" v-if="errors.msg">{{errors.msg[0]}}</span>

                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>

                                    <input type="text" name="description" class="form-control" v-model="Invoice.description">
                                     <span class="error" v-if="errors.description">{{errors.description[0]}}</span>
                                
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Amount</label>
                                    <input type="number" name="amount" class="form-control" v-model="Invoice.amount">
                                     <span class="error" v-if="errors.amount">{{errors.amount[0]}}</span>
                                
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save Invoice</button>
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
    name:"add-Invoice",
    data(){
        return {
            Invoice:{
                id:this.$route.params.id,
                description:"",
                amount:"",
            },
            errors:[]

        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/Invoice',this.Invoice).then(response=>{
                 this.$swal(
                  'Invoice Added Successfully ',
                  '',
                  'success'
                )
                this.$router.push({name:"InvoiceList"})
                 this.errors= error.response.data.errors;

            }).catch(error=>{
                console.log(error)
                 this.errors= error.response.data.errors;

            })
        }
    }
}
</script>
<style scoped>
.back{
    text-align: right;
        position: inherit;
    margin: 0;
    margin-left: 1004px;
    margin-top: -94px;
}
</style>
