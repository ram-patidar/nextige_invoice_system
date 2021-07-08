<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <div>
            <router-link
              :to="{ name: 'invoicelist' }"
              class="btn btn-primary back"
              >&#8592; Back</router-link
            >
          </div>
          <h4>Add Invoice</h4>
          <span class="error" v-if="errors.msg">{{ errors.msg[0] }}</span>
        </div>
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-8">
                <div class="row">
                  <div class="col-12 mb-2">
                    <div class="form-group">
                      <label>Select Client</label>
                      <select
                        name="client_id"
                        id="client_id"
                        class="form-control"
                        v-on:change="SelectClient($event)"
                        v-model="Invoice.client_id"
                      >
                        <option value="">Select Client Name</option>
                        <option
                          v-for="(Client, key) in Clients"
                          :key="key"
                          v-bind:value="Client.id"
                        >
                          {{ Client.client_name }}
                        </option>
                      </select>
                      <span class="error" v-if="errors.client_id">{{
                        errors.client_id[0]
                      }}</span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="rate"
                    value="Amount"
                    :checked="a_checked"
                    @change="Amount"
                  />
                  <label for="rate">Amount</label>
                  <input
                    type="radio"
                    name="rate"
                    value="Hours"
                    :checked="h_checked"
                    @change="Hours"
                  />
                  <label for="rate">Hours</label>
                  <div v-for="(user, key) in users" :key="key">
                    <input
                      name="client_id"
                      v-model="user.client_id"
                      class="form-control"
                      type="hidden"
                    />

                    <input
                      type="hidden"
                      name="client_id"
                      v-model="users.client_id"
                    />
                    <td>
                      <input
                        name="description"
                        v-model="user.description"
                        placeholder="Enter item"
                        class="form-control"
                        type="text"
                      />
                    </td>
                    <span class="error" v-if="errors.description">{{
                      errors.description[0]
                    }}</span>
                    <td>
                      <input
                        name="qty"
                        v-model="user.qty"
                        placeholder="Enter hours"
                        class="form-control"
                        :type="type"
                      />
                    </td>
                    <td>
                      <input
                        name="amount"
                        v-model="user.rate"
                        placeholder="Enter price rate"
                        class="form-control"
                        type="number"
                      />
                    </td>
                    <span class="error" v-if="errors.amount">{{
                      errors.amount[0]
                    }}</span>
                    <td>
                      <!-- <button @click.prevent="create" class="btn btn-primary">Save</button> -->
                      <button @click="deleteRow(key)" class="btn btn-danger">
                        Drop
                      </button>
                    </td>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary" @click.prevent="addRow">
                      Add new item
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-12 mb-2">
                    <div class="form-group">
                      <label>Invoice #</label>
                      <input
                        type="text"
                        name="invoice_code"
                        class="form-control"
                        v-model="Client.invoice_code"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="form-group">
                      <label>date</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="Client.date"
                        disabled
                      />
                    </div>
                    <div class="form-group">
                      <label>Subtotal</label>
                      <div>
                        <b
                          >$
                          {{
                            users.rate
                              ? users.qty
                                ? users.qty * users.rate
                                : users.rate
                              : "00"
                          }}</b
                        >
                      </div>
                    </div>
                    <div class="form-group">
                      <label>Total</label>
                      <div>
                        <b
                          >$
                          {{
                            users.rate
                              ? users.qty
                                ? users.qty * users.rate
                                : users.rate
                              : "00"
                          }}</b
                        >
                      </div>
                    </div>
                  </div>
                </div>
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
  name: "add-Invoice",
  data() {
    return {
      Invoice: {
        client_id: "",
        description: "",
        amount: "",
      },
      users: [
        {
          client_id: "",
          description: "",
          rate: "",
          amount: "",
          qty: 1,
        },
      ],
      Client: {
        invoice_code: "",
        client_id: "",
        client_name: "",
        date: null,
      },
      errors: [],
      Clients: [],
      a_checked: "",
      h_checked: "",
      type: "",
    };
  },
  mounted() {
    this.getClients();
    this.date_function();
    this.a_checked = true;
    this.type = "hidden";
  },
  methods: {
    // async create() {
    //   this.Invoice.amount = (this.users.qty?this.users.qty:1) * this.users.rate;
    //   this.Invoice.description = this.users.description;
    //   this.Invoice.client_id = this.users.client_id;
    //   console.log(this.Invoice);
    //   await this.axios
    //     .post("/api/Invoice", this.Invoice)
    //     .then((response) => {
    //       // this.$swal("Invoice Added Successfully ", "", "success");
    //       this.$router.push({ name: "clientview", params: { id: this.Invoice.client_id, name: this.Client.client_name } });

    //       this.errors = error.response.data.errors;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       this.errors = error.response.data.errors;
    //     });
    // },

    date_function() {
      const current = new Date();
      const date =
        current.getDate() +
        "/" +
        current.getMonth() +
        "/" +
        current.getFullYear();
      this.Client.date = date;
      // console.log(this.Client.date);
    },

    async getClients() {
      await this.axios
        .get("/api/Client")
        .then((response) => {
          this.Clients = response.data.Clients;
        })
        .catch((error) => {
          console.log(error);
          this.Clients = [];
        });
    },

    async SelectClient(event) {
      await this.axios
        .get(`/api/Client/${event.target.value}`)
        .then((response) => {
          const { invoice_code, id, client_name } = response.data;
          this.Client.invoice_code = invoice_code;
          this.users.client_id = id;
          this.Client.client_name = client_name;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data);
        });
    },

    addRow: function () {
      this.users.push({ description: "", qty: "", rate: "" });
      console.log(this.users);
    },
    deleteRow(key) {
      this.users.splice(key, 1);
    },

    Amount() {
      this.a_checked = true;
      this.h_checked = false;
      this.type = "hidden";
    },
    Hours() {
      this.a_checked = false;
      this.h_checked = true;
      this.type = "number";
    },
  },
};
</script>
<style scoped>
.back {
  text-align: right;
  position: inherit;
  margin: 0;
  margin-left: 1004px;
  margin-top: -94px;
}
</style>
