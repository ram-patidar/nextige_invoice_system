<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark nav-bg" >
                <!-- <router-link to="/" class="navbar-brand" href="#"><img class="logo" src="nextige-logo.png" alt=""></router-link> -->
            <div class="container-fluid" v-if="showMenu">
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link exact-active-class="active" to="/Dashboard" class="nav-item nav-link">Dashboard</router-link>
                        <router-link exact-active-class="active" to="/Client" class="nav-item nav-link">Clients</router-link>
                        <router-link exact-active-class="active" to="/Invoice" class="nav-item nav-link">Invoice</router-link>
                        <router-link exact-active-class="active" to="/Setting" class="nav-item nav-link">Settings</router-link>
                    </div>
                </div>
                <div>
                        <button class="btn btn-danger" @click.prevent="logout">Logout</button>

                </div>
            </div>
        </nav>

        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
    export default {
        computed: {
        showMenu() {
            return this.$route.name !== 'login' && this.$route.name !== 'register' && this.$route.name !== 'Generate_invoice' ;
        }
                },
        methods:{
            logout(){
                axios.post('/api/logout').then(()=>{
                    localStorage.clear();
                    this.$router.push({ name: 'login'})
                });
            }
        }
    }
</script>
<style scoped>
.logo{
    width: 150px;
}

</style>