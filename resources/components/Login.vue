<template>
  <div class="login-box">
     <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    <div class="login-wrapper">
      <div class="login-left">
        <div class="login-logo">
          <a href="">
            <img src="images/logo.svg" alt="" />
          </a>
        </div>
        <div class="copyright-footer">
          <p>@{{date}} <a href="">Nextige</a></p>
        </div>
      </div>
      <div class="login-right">
        <div class="login-frm">
          <div class="login-head"><h2>Login To Nextige</h2></div>
          <div class="invalid alert" v-if="errors.msg">
            <span>{{ errors.msg[0] }}</span>
          </div>
          <div class="from-group">
            <input
              type="text"
              class="cus-field"
              v-model="form.email"
              name="email"
              autocomplete="off"
              placeholder=" "
            />
            <label for="email">Email Address </label>
            <span class="error" v-if="errors.email">{{ errors.email[0] }}</span>
          </div>
          <div class="from-group">
            <input
              type="password"
              class="cus-field"
              v-model="form.password"
              name="password"
              id="inputtype"
              autocomplete="off" 
              placeholder=" "
            />
            <label for="password">Password</label>
            <span class="forgot-link">
              <a href="">Forgot Password?</a>
            </span>
            <div class="input-group-addon" id="show_hide_password" @click="show">
              <a>
                <img src="images/feather-eye.svg" alt="" />
              </a>
            </div>
            <span class="error" v-if="errors.password">{{
              errors.password[0]
            }}</span>
          </div>
           <div class="custom-checkbox">
            <input
              type="checkbox"
              v-model="checked"
              name="checkbox"
              id="me"
            />
            <label for="me">Remember Me</label>
          </div>
          <div class="submit-sec">
            <button type="submit" class="btn custom-btn" @click.prevent="login">
              <svg xmlns="http://www.w3.org/2000/svg" width="25.863" height="25.863" viewBox="0 0 25.863 25.863"><g transform="translate(1.1 1.556)"><path d="M29.264,3,16.5,15.764" transform="translate(-6.057 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2"/><path d="M26.207,3,18.085,26.207,13.443,15.764,3,11.122Z" transform="translate(-3 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2"/></g></svg>
              Log In
            </button>
          </div>
          <!-- <div>
            Don't have an account?
            <router-link to="/register">Register here</router-link>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        msg: "",
      },
      errors: [],
       date:null,
       checked:'',
       name:""
    };
  },
  components: {
    PulseLoader
  },

    mounted(){
        this.date_function()
        this.CookieValue()
    },

  methods: {
   
    login() {
      if(this.checked == true){
        this.$cookies.set('email',this.form.email)
        this.$cookies.set('password',this.form.password)
      }else{
        this.$cookies.remove('email')
        this.$cookies.remove('password')
      }
      axios
        .post("api/login", this.form)
        .then(() => {
          localStorage.setItem("token", this.form.email);
          this.$router.go({ name: "dashboard" });
          this.errors = error.response.data.errors;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    CookieValue(){
           this.form.email = this.$cookies.get('email')
        this.form.password = this.$cookies.get('password')
        console.log(this.$cookies.get('password'))
      if(this.$cookies.get('password')== null){
        this.checked = false
      }else{
        this.checked = true
      }
    },
    date_function() {
        const current = new Date();
      const date = current.getFullYear();
      this.date = date
        },
        show(){
          var x = document.getElementById('inputtype');
          if (x.type === 'password') {
            x.type = "text";
          }else {
            x.type = "password";
          }
        }
  },
};
</script>


