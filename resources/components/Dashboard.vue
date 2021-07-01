<template>
  <main>
    <section class="main-wrapper">
      <div class="page-color">
        <div class="page-header">
          <div class="page-title">
            <h2>Hello, {{ name }}</h2>
          </div>
        </div>
        <div class="page-table">
          <div class="dashboard container-fluid">
            <div class="row first-row">
              <div class="col-md-4">
                <div class="columns">
                  <div class="content">
                    <router-link to="/Client" class="client nav-item nav-link">
                      <h4>Total Clients</h4>
                      <h5>
                        {{ Client_count }} <br />
                        Clients &#x203A;
                      </h5>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="columns">
                  <div class="content">
                    <router-link
                      to="/Invoice"
                      class="invoice nav-item nav-link"
                    >
                      <h4>Total Invoices</h4>
                      <h5>
                        {{ Invoice_count }}<br />
                        Invoice &#x203A;
                      </h5>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
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
          console.log(this.name);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.client {
  background-color: lightgreen;
  color: black;
  text-align: center;
}
.invoice {
  background-color: lightsalmon;
  color: black;
  text-align: center;
}
</style>