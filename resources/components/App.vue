<template>
  <main>
    <div class="wrapper">
      <div class="wrapper-left" v-if="showMenu">
        <div class="sidebar">
          <div class="sidebar-head">
            <a href="">
              <img src="images/logo.svg" alt="" />
            </a>
          </div>
          <div class="sidebar-nav">
            <ul>
              <li>
                <router-link
                  exact-active-class="active"
                  to="/dashboard"
                  class="nav-item"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M10,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,19H5V15H9ZM20,3H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,9H15V5h4Zm1,7H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2ZM10,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,9H5V5H9Z" transform="translate(-3 -3)" fill="#fff"/></svg>
                  Dashboard</router-link
                >
              </li>
              <li>
                <router-link
                  exact-active-class="active"
                  to="/client"
                  class="nav-item client-nav"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20"><g transform="translate(-0.5 -3.5)"><path d="M16.5,28.5v-2a4,4,0,0,0-4-4h-7a4,4,0,0,0-4,4v2" transform="translate(0 -6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M14.75,8.5a4,4,0,1,1-4-4A4,4,0,0,1,14.75,8.5Z" transform="translate(-1.75 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M30,12v6" transform="translate(-9.5 -2.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M31.5,16.5h-6" transform="translate(-8 -4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
                  Clients</router-link
                >
              </li>
              <li>
                <router-link
                  exact-active-class="active"
                  to="/invoice"
                  class="nav-item"
                >
               <svg xmlns="http://www.w3.org/2000/svg" width="17.996" height="18" viewBox="0 0 17.996 18"><path d="M8.3,11H6.5a.9.9,0,1,0,0,1.8H8.3a.9.9,0,0,0,0-1.8ZM7.4,9.2H11a.9.9,0,0,0,0-1.8H7.4a.9.9,0,0,0,0,1.8Zm.9,5.4H6.5a.9.9,0,1,0,0,1.8H8.3a.9.9,0,1,0,0-1.8ZM19.1,11H16.4V2.9a.9.9,0,0,0-1.35-.783l-2.7,1.548-2.7-1.548a.9.9,0,0,0-.9,0l-2.7,1.548L3.35,2.117A.9.9,0,0,0,2,2.9V17.3A2.7,2.7,0,0,0,4.7,20H17.3A2.7,2.7,0,0,0,20,17.3V11.9A.9.9,0,0,0,19.1,11ZM4.7,18.2a.9.9,0,0,1-.9-.9V4.456L5.6,5.482a.972.972,0,0,0,.9,0L9.2,3.934l2.7,1.548a.972.972,0,0,0,.9,0l1.8-1.026V17.3a2.7,2.7,0,0,0,.162.9Zm13.5-.9a.9.9,0,1,1-1.8,0V12.8h1.8ZM12.4,14.75a.684.684,0,0,0-.162-.081.54.54,0,0,0-.171-.054.9.9,0,0,0-.81.243A.945.945,0,0,0,11,15.5a.9.9,0,0,0,.063.342,1.071,1.071,0,0,0,.2.3,1.035,1.035,0,0,0,.3.189.846.846,0,0,0,.684,0,1.035,1.035,0,0,0,.3-.189A.9.9,0,0,0,12.8,15.5a.945.945,0,0,0-.261-.639,1.422,1.422,0,0,0-.135-.108Zm.126-3.491a.934.934,0,1,0,.2.3.819.819,0,0,0-.2-.3Z" transform="translate(-2 -1.996)" fill="#fff"/></svg>
                  Invoice</router-link
                >
              </li>
              <li>
                <router-link
                  exact-active-class="active"
                  to="/setting"
                  class="nav-item"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="17.682" height="18" viewBox="0 0 17.682 18"><path d="M18.093,11.593a.9.9,0,0,1,0-1.188l1.152-1.3a.9.9,0,0,0,.108-1.053l-1.8-3.114a.9.9,0,0,0-.963-.432L14.9,4.852a.9.9,0,0,1-1.035-.594l-.549-1.647A.9.9,0,0,0,12.46,2h-3.6a.9.9,0,0,0-.9.612l-.5,1.647a.9.9,0,0,1-1.035.594L4.685,4.511a.9.9,0,0,0-.9.432l-1.8,3.114a.9.9,0,0,0,.09,1.053l1.143,1.3a.9.9,0,0,1,0,1.188l-1.143,1.3a.9.9,0,0,0-.09,1.053l1.8,3.114a.9.9,0,0,0,.963.432l1.692-.342a.9.9,0,0,1,1.035.594l.549,1.647a.9.9,0,0,0,.9.612h3.6a.9.9,0,0,0,.855-.612l.549-1.647a.9.9,0,0,1,1.035-.594l1.692.342a.9.9,0,0,0,.963-.432l1.8-3.114a.9.9,0,0,0-.108-1.053ZM16.753,12.8l.72.81-1.152,2-1.062-.216a2.7,2.7,0,0,0-3.1,1.8L11.812,18.2h-2.3l-.324-1.026a2.7,2.7,0,0,0-3.1-1.8l-1.062.216L3.848,13.6l.72-.81a2.7,2.7,0,0,0,0-3.6l-.72-.81L5,6.4l1.062.216a2.7,2.7,0,0,0,3.1-1.8L9.509,3.8h2.3l.342,1.026a2.7,2.7,0,0,0,3.1,1.8l1.062-.216,1.152,2-.72.81a2.7,2.7,0,0,0,0,3.582ZM10.66,7.4a3.6,3.6,0,1,0,3.6,3.6A3.6,3.6,0,0,0,10.66,7.4Zm0,5.4a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,10.66,12.8Z" transform="translate(-1.857 -1.999)" fill="#fff"/></svg>
                  Settings</router-link
                >
              </li>
            </ul>
            <div class="logout-btn">
              <button class="btn" @click.prevent="logout">
               <svg xmlns="http://www.w3.org/2000/svg" width="17.995" height="18" viewBox="0 0 17.995 18"><path d="M11.53,11.9,9.46,13.96a.9.9,0,1,0,1.278,1.278l3.6-3.6a.93.93,0,0,0,0-1.278l-3.6-3.6A.9.9,0,0,0,9.46,8.039L11.53,10.1H2.9a.9.9,0,1,0,0,1.8ZM11,2A9,9,0,0,0,2.9,6.995a.906.906,0,0,0,1.62.81,7.236,7.236,0,1,1,.036,6.389.906.906,0,0,0-1.62.81A9,9,0,1,0,11,2Z" transform="translate(-2 -2)" fill="#fff"/></svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-right">
        <nav class="navbar navbar-expand-lg" v-if="showMenu">
          <!-- <router-link to="/" class="navbar-brand" href="#"><img class="logo" src="nextige-logo.png" alt=""></router-link> -->
          <div class="container-fluid">
            <div class="navbar-inr">
              <div id="nav-icon" class=""> <span></span> <span></span> <span></span> </div>
              <div class="current-user">
                <div>
                  <h4>
                  <div v-if="this.profile == ''">
                    <span class="c-user-icon">
                      {{
                        name.split(" ")[0][0] +
                        (name.split(" ")[1]
                          ? name.split(" ")[1][0].toUpperCase()
                          : " ")
                      }}
                    </span>
                  </div>
                  <div v-else>
                      <img
                        class="c-user-icon"
                        v-bind:src="'/images/' + this.profile"
                      />
                  </div>
                  </h4>
                </div>
                <div class="user-name">
                  <h5>{{ name }}</h5>
                  <span>{{ title }}</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="main-wrapeer">
            <transition name="fade" mode="out-in">
          <router-view></router-view>
           </transition>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      title: "",
      profile: "",
    };
  },
  mounted() {
    this.showUser();
  },
  computed: {
    showMenu() {
      return (
        this.$route.name !== "login" &&
        this.$route.name !== "register" &&
        this.$route.name !== "generate_invoice"
      );
    },
  },
  methods: {
    logout() {
      axios.post("/api/logout").then(() => {
        localStorage.clear();
        this.$router.push({ name: "login" });
      });
    },
    async showUser() {
      await this.axios
        .get(`/api/login/${localStorage.getItem("token")}`)
        .then((response) => {
          const { name, title, profile } = response.data.user_data;
          this.name = name.charAt(0).toUpperCase() + name.slice(1);
          this.title = title;
          this.profile = profile;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.logo {
  width: 150px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
