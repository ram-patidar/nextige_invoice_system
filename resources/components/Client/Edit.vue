<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Client</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Client Name</label>
                                    <input type="text" class="form-control" v-model="Client.client_name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Company Name</label>
                                    <input type="text" class="form-control" v-model="Client.company_name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Country</label>
                                    <select name="country" class="form-control" id="country" v-model="Client.country">
                                        <option value="">Select Country</option>
                                        <option v-bind:value="Client.country" selected>{{Client.country}}</option>
                                        <option value="AUS">Australia</option>
                                        <option value="BGD">Bangladesh</option>
                                        <option value="IDN">Indonesia</option>
                                        <option value="IND">India</option>
                                        <option value="MS">Malaysia</option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="RS">Russia</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SGP">Singapore</option>
                                        <option value="SA">South Africa</option>
                                        <option value="SL">Sri Lanka</option>
                                        <option value="SWL">Switzerland</option>
                                        <option value="TL">Thailand</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="UAE">United Arab Emirates</option>
                                        <option value="USA">United States of America</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" v-model="Client.email">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="text" class="form-control" v-model="Client.address">
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
    name:"update-Client",
    data(){
        return {
            Client:{
                client_name:"",
                company_name:"",
                email:"",
                address:"",
                country:"",
                _method:"patch"
            },
            errors:[]
        }
    },
    mounted(){
        this.showClient()
    },
    methods:{
        async showClient(){
            await this.axios.get(`/api/Client/${this.$route.params.id}`).then(response=>{
                const { client_name,country, company_name, email , address } = response.data
                this.Client.client_name = client_name
                this.Client.company_name = company_name
                this.Client.country = country
                this.Client.email = email
                this.Client.address = address

            }).catch(error=>{
                console.log(error)
                console.log(error.response.data)
            })
        },
        async update(){
            await this.axios.post(`/api/Client/${this.$route.params.id}`,this.Client).then(response=>{
                this.$router.push({name:"ClientList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>