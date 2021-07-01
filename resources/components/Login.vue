<template>
  <div class="login-box">
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
            />
            <label for="password">Password</label>
            <span @click="show">show/hide</span>
            <span class="error" v-if="errors.password">{{
              errors.password[0]
            }}</span>
          </div>
          <div class="submit-sec">
            <button
              type="submit"
              class="btn custom-btn"
              @click.prevent="login"
            > Log In
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
    };
  },
    mounted(){
        this.date_function()
    },
  methods: {
    login() {
      axios
        .post("api/login", this.form)
        .then(() => {
          localStorage.setItem("token", this.form.email);
          this.$router.push({ name: "dashboard" });
          this.errors = error.response.data.errors;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
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
<style scoped>
/* .invalid {
  color: #e6133d;
  background-color: rgb(255 95 95 / 10%);
  border-color: #f10938;
  width: 300px;
  height: 40px;
  text-align: center;
}
.alert {
  padding: 10px 18px;
  border-radius: 5px;
} */
</style>
