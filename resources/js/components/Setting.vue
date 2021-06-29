<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>User Profile</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="hidden" class="form-control" v-model="User.id">
                                    <input type="text" class="form-control" v-model="User.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" v-model="User.email">
                                </div>
                            </div>
                           
                            <div class="col-12">
                                <!-- <button type="submit" class="btn btn-primary">Update</button> -->
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
    data(){
        return {
            User:{
                id:'',
                name:"",
                email:"",
                _method:"patch"

            }
        }
    },
    mounted(){
        this.showUser()
    },
    methods:{
        async showUser(){
            await this.axios.get(`/api/login/${localStorage.getItem('token')}`).then(response=>{
                const { id,name, email, password } = response.data.user_data
                this.User.name = name
                this.User.id = id
                this.User.email = email
                this.User.password = password

            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/login/${this.User.id}`,this.User).then(response=>{
                this.$router.push({name:"Setting"})
                console.log(response.data.message)
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
