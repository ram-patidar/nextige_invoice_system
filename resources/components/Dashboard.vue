<template>
  <section class="dashboard-main">
    <div class="dashboard-inr">
      <div class="row">
        <div class="page-header">
          <h3>Hello, {{name}}</h3>
        </div>
        <div class="dash-nav">
            <h5>Notifications</h5>
          </div>
      </div>
      <div class="row first-row">
        <div class="col-md-6">
              <router-link to="/client" class="noti-box nav-item nav-link">
            <div class="content">
                 <div>
                    <h5>
                  Total Clients 
                </h5>
                <h2>{{ Client_count }}+</h2>
                   </div>
                <span>Clients 
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.87284 5.44193C4.58604 6.57935 3.29924 7.71673 2.01246 8.85299C1.48262 9.32179 0.692719 8.56057 1.22502 8.09065C2.37019 7.07827 3.51537 6.067 4.6599 5.05462C3.50925 4.00765 2.35859 2.95955 1.20732 1.91257C0.683577 1.43595 1.47346 0.674721 1.99538 1.15077C3.2883 2.32668 4.58055 3.50313 5.87285 4.67959C6.0865 4.87491 6.09199 5.24885 5.87285 5.44192L5.87284 5.44193Z" fill="#1A1041"/>
          </svg>
          </span>
            </div>
            <div class="noti-img">
              <img src="images/clients-img.svg" alt="">
              </div>
              </router-link>
        </div>
        <div class="col-md-6">
            <router-link to="/invoice" class="noti-box nav-item nav-link">
            <div class="content">
                  <div>
                    <h5>
                  Total Invoice
                </h5>
                <h2>{{ Invoice_count }}+</h2>
                    </div>
                <span>Invoice
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.87284 5.44193C4.58604 6.57935 3.29924 7.71673 2.01246 8.85299C1.48262 9.32179 0.692719 8.56057 1.22502 8.09065C2.37019 7.07827 3.51537 6.067 4.6599 5.05462C3.50925 4.00765 2.35859 2.95955 1.20732 1.91257C0.683577 1.43595 1.47346 0.674721 1.99538 1.15077C3.2883 2.32668 4.58055 3.50313 5.87285 4.67959C6.0865 4.87491 6.09199 5.24885 5.87285 5.44192L5.87284 5.44193Z" fill="#1A1041"/>
          </svg>
                </span>
                 </div>
            <div class="noti-img">
              <img src="images/invoice-img.svg" alt="">
              </div>
              </router-link>
            </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  data() {
    return {
      Client_count: null,
      Invoice_count: null,
      name: "",
    };
  },
  mounted() {
    this.CountClients();
    this.CountInvoice();
    this.showUser();
  },
  methods: {
    async CountClients() {
      await this.axios.get("/api/Client").then((response) => {
        this.Client_count = response.data.Client_count;

      });
    },
    async CountInvoice() {
      await this.axios.get("/api/Invoice").then((response) => {
        this.Invoice_count = response.data.Invoice_count;
      });
    },
    async showUser() {
      await this.axios
        .get(`/api/login/${localStorage.getItem("token")}`)
        .then((response) => {
          const { name } = response.data.user_data;
          this.name = name.charAt(0).toUpperCase() + name.slice(1);
          // console.log(this.name);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
