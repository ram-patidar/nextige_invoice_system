<template>
    <div>
        <div class="container">
            <div><h2>Register</h2></div>
            <div class="from-group col-md-5">
    <label for="Name">Name</label>
    <input type="text" class="form-control" v-model="form.name" name="name" placeholder="Enter Name">
            <span class="error" v-if="errors.name">{{errors.name[0]}}</span>
</div>
<div class="from-group col-md-5">
    <label for="email">Email</label>
    <input type="text" class="form-control" v-model="form.email" name="email" placeholder="Enter Email">
            <span class="error" v-if="errors.email">{{errors.email[0]}}</span>
            <span class="error" v-if="errors.email_unique">{{errors.email_unique}}</span>
            
</div>
<div class="from-group col-md-5">
    <label for="password">Password</label>
    <input type="password" class="form-control" v-model="form.password"  name="password" placeholder="Enter Password">
            <span class="error" v-if="errors.password">{{errors.password[0]}}</span>
</div>
<div>
    <input type="submit" class="btn btn-primary" @click.prevent="register"  name="register" value="Register">
</div>
<div>Already a user? <router-link to="/">Login here</router-link></div>

        </div>

    </div>
</template>
<script>

export default{
    data(){
        return{
            form:{
                name:'',
            email:'',
            password:'',
            email_unique:'',
            },
            errors:[]

        }
    },
    methods:{
        register(){
            axios.post('api/register', this.form).then(()=>{
                 this.$swal(
                  'Register Successfully ',
                  '',
                  'success'
                )
                this.$router.push({name:'login'});
                console.log("register Successfully");
            }).catch((error)=>{
                this.errors= error.response.data.errors;
               console.log(email_unique)
            })
        }
    }
}
</script>
