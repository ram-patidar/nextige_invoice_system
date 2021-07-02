<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Profile Info.</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="hidden" class="form-control" v-model="User.id">
                                    <input type="text" class="form-control" v-model="User.name">
                                    <span class="error" v-if="errors.name">{{ errors.name[0] }}</span>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" v-model="User.email">
                                    <span class="error" v-if="errors.email">{{ errors.email[0] }}</span>
                                </div>
                            </div>
                             <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <select name="title" id="title" class="form-control" v-model="User.title">
                                        <option v-bind:value="User.title">{{User.title}}</option>
                                        <option value="Ceo of Nextige">Ceo of Nextige</option>
                                        <option value="Owner of Nextige">Owner of Nextige</option>
                                        <option value="Employee of Nextige">Employee of Nextige</option>
                                        </select>
                                    <span class="error" v-if="errors.title">{{ errors.title[0] }}</span>
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
    data(){
        return {
            User:{
                id:'',
                name:"",
                email:"",
                title:"",
                _method:"patch"
            },
            errors: []
        }
    },
    mounted(){
        this.showUser()
    },
    methods:{
        async showUser(){
            await this.axios.get(`/api/login/${localStorage.getItem('token')}`).then(response=>{
                const { id,name, title, email, password } = response.data.user_data
                this.User.name = name
                this.User.id = id
                this.User.title = title
                this.User.email = email
                this.User.password = password

            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/login/${this.User.id}`,this.User).then(response=>{
                this.$swal(
                  'Invoice Added Successfully ',
                  '',
                  'success'
                )
                // this.$router.push({name:"Setting"})
                console.log(response.data.message)
            }).catch(error=>{
                console.log(error)
                this.errors = error.response.data.errors
            })
        }
    }
}
</script>
