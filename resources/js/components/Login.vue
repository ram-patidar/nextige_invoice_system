<template>
    <div>
        <div class="container">
            <div><h2>Login To Nextige</h2></div>
            <div class="invalid alert" v-if="errors.msg">
            <span >{{errors.msg[0]}}</span>
            </div>
<div class="from-group col-md-5">
    <label for="email">Email</label>
    <input type="text" class="form-control" v-model="form.email" name="email" placeholder="Enter Email">
            <span class="error" v-if="errors.email">{{errors.email[0]}}</span>
</div>
<div class="from-group col-md-5">
    <label for="password">Password</label>
    <input type="password" class="form-control" v-model="form.password"  name="password" placeholder="Enter Password">
            <span class="error" v-if="errors.password">{{errors.password[0]}}</span>
</div>
<div >
  
    <input type="submit" class="btn btn-primary" @click.prevent="login"  name="login" value="Login">
</div>
<div>Don't have an account? <router-link to="/register">Register here</router-link></div>
        </div>
    </div>
</template>
<script>

export default{
    data(){
        return{
            form:{
            email:'',
            password:'',
            msg:''
            },
            errors:[]

        }
    },
    methods:{
        login(){
            axios.post('api/login', this.form).then(()=>{
                localStorage.setItem('token',this.form.email)
                this.$router.push({name:'dashboard'});
                this.errors= error.response.data.errors;

            }).catch((error)=>{
                this.errors= error.response.data.errors;
            })
        }
    }
}
</script>
<style scoped>
.invalid{
     color: #e6133d;
    background-color: rgb(255 95 95 / 10%);
    border-color: #f10938;
    width: 300px;
    height: 40px;
    text-align: center;
    
}
.alert{
    padding: 10px 18px;
    border-radius: 5px;
}
</style>
