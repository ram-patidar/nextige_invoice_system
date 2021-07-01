<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Add Client</h4>
          <span class="success">{{ message }}</span>
        </div>
        <div class="card-body">
          <form @submit.prevent="create">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Client Name</label>
                  <input
                    type="hidden"
                    name="invoice_code"
                    class="form-control"
                    v-model="Client.invoice_code"
                  />
                  <input
                    type="text"
                    name="client_name"
                    placeholder="Enter client name"
                    class="form-control"
                    v-model="Client.client_name"
                  />
                  <span class="error" v-if="errors.client_name">{{
                    errors.client_name[0]
                  }}</span>
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Enter company name"
                    class="form-control"
                    v-model="Client.company_name"
                  />
                  <span class="error" v-if="errors.company_name">{{
                    errors.company_name[0]
                  }}</span>
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Country </label>
                  <select
                    name="country"
                    id="country"
                    class="form-control"
                    v-model="Client.country"
                  >
                    <option value="">Select country</option>
                    <option value="AUS">Australia</option>
                    <option value="BGD">Bangladesh</option>
                    <option value="IDN">Indonesia</option>
                    <option value="IND">India</option>
                    <option value="MS">Malaysia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="RS">Russia</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SGP">Singapore</option>
                    <option value="SA">South Africa</option>
                    <option value="SL">Sri Lanka</option>
                    <option value="SWL">Switzerland</option>
                    <option value="TL">Thailand</option>
                    <option value="UK">United Kingdom</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="USA">United States of America</option>
                  </select>
                  <span class="error" v-if="errors.country">{{
                    errors.country[0]
                  }}</span>
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter client email"
                    class="form-control"
                    v-model="Client.email"
                  />
                  <span class="error" v-if="errors.email">{{
                    errors.email[0]
                  }}</span>
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter client address"
                    class="form-control"
                    v-model="Client.address"
                  />
                  <span class="error" v-if="errors.address">{{
                    errors.address[0]
                  }}</span>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Add Client
                </button>
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
  name: "add-Client",
  data() {
    return {
      Client: {
        invoice_code: "",
        client_name: "",
        company_name: "",
        email: "",
        address: "",
        country: "",
      },
      errors: [],
      message: null,
    };
  },
  mounted() {
    this.getClients();
  },
  methods: {
    async create() {
      await this.axios
        .post("/api/Client", this.Client)
        .then((response) => {
          this.$swal("Client Added Successfully ", "", "success");
          this.$router.push("/Client");
          this.message = response.data.message;
          //  console.log(response.data.message)
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    async getClients() {
      await this.axios
        .get("/api/Client")
        .then((response) => {
          this.Client.invoice_code = "#NX-00" + (response.data.last_id + 1);
        })
        .catch((error) => {
          console.log(error);
          this.Clients = [];
        });
    },
  },
};
</script>
<style scoped>
.success {
  color: green;
}
</style>
