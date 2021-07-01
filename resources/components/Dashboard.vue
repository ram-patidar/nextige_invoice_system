<template>
<main>
    <section class="main-wrapper">
        <div class="page-color">
            <div class="page-header">
                <div class="page-title">
                    <h2>Dashboard</h2>
                </div>
            </div>
            <div class="page-table">
                <div class="dashboard container-fluid">
                    <div class="row first-row">
                        <div class="col-md-4">
                                <div class="columns">
                                    <div class="content">
                                      <router-link to="/Client" class="client nav-item nav-link">
                                        <h4>Clients</h4>
                                        <h5>Total Clients <br>
                                        {{ Client_count }}</h5>
                                        </router-link>
                                    </div>
                                </div>
                        </div>
                        <div class="col-md-4">
                                <div class="columns">
                                    <div class="content">
                                      <router-link to="/Invoice" class="invoice nav-item nav-link">
                                        <h4>Invoice</h4>
                                        <h5>Total Invoice <br>
                                        {{ Invoice_count }}</h5>
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
    };
  },
  mounted() {
    this.CountClients();
    this.CountInvoice();
  },
  methods: {
    async CountClients() {
      await this.axios.get("/api/Client").then((response) => {
        this.Client_count = response.data.Client_count
      });
    },
    async CountInvoice() {
      await this.axios.get("/api/Invoice").then((response) => {
        this.Invoice_count = response.data.Invoice_count;
      });
    },
  },
};
</script>
<style scoped>

.client{
    background-color: lightgreen;
    color: black;
    text-align: center;
}
.invoice{
    background-color: lightsalmon;
    color: black;
    text-align: center;
}

</style>