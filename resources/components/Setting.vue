<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Profile Info.</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update" enctype="multipart/form-data">
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
                             <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Profile</label>
                                    <p><img class="profile" v-bind:src="'/images/' + this.User.profile" /></p>
                                    <input type="file" name="file" class="form-control" @change="upload">
                                    <!-- <span class="error" v-if="errors.email">{{ errors.email[0] }}</span> -->
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
                profile:"",
                _method:"patch"
            },
            errors: [],
            file:"",
        }
    },
    mounted(){
        this.showUser()
        console.log(window.location.origin)

    },
    methods:{
        upload(e){
            this.file = e.target.files[0];
            console.log(this.file)
        },
        async update(){
            let formdata = new FormData();
            formdata.append('file', this.file)
            formdata.append('id', this.User.id)
            formdata.append('name', this.User.name)
            formdata.append('email', this.User.email)
            formdata.append('title', this.User.title)
            formdata.append('_method', this.User._method)

            await this.axios.post(`/api/login/${this.User.id}`,formdata).then(response=>{
                this.$swal(
                  'User Update Successfully ',
                  '',
                  'success'
                )
                this.showUser()
                console.log(response.data.message)
            }).catch(error=>{
                console.log(error)
                this.errors = error.response.data.errors
            })
        },
          async showUser(){
            await this.axios.get(`/api/login/${localStorage.getItem('token')}`).then(response=>{
                const { id,name, title,profile, email, password } = response.data.user_data
                this.User.name = name
                this.User.id = id
                this.User.title = title
                this.User.profile = profile
                this.User.email = email
                this.User.password = password

            }).catch(error=>{
                console.log(error)
            })
        },
    }
}
</script>
<style scoped>
.profile{
width: 100px;
height: 100px;
}
input[type='file'] {
  /* opacity:0     */
  color: white;
}
</style>
