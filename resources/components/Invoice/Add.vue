<template>
  <div class="row">
            <Breadcrumbs/>

    <div class="col-12">
      <div class="card">

        <div class="card-header">
          <div></div>
          <h4>Add Invoice</h4>
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
                        errors.client_id
                      }}</span>
                    </div>
                  </div>

                  <div v-for="(user, key) in users" :key="key">
                    <input
                      type="radio"
                      name="rate"
                      :checked="a_checked"
                      @change="Amount(key)"
                    />
                    <label for="rate">Amount</label>
                    <input
                      type="radio"
                      name="rate"
                      :checked="h_checked"
                      @change="Hours(key)"
                    />
                    <label for="rate">Hours</label>
                    <input
                      type="hidden"
                      name="client_id"
                      v-model="users.client_id"
                    />

                    <input
                      name="description"
                      v-model="user.description"
                      placeholder="Enter item"
                      class="form-control"
                      type="text"
                    />
                    <div v-bind:class="{ hide: isActive[key] }">
                      <label for="">Enter Hours</label>
                      <input
                      name="qty"
                      v-model="user.qty"
                      placeholder="Enter hours"
                      class="form-control"
                      :type="type[key]"
                    />
                    </div>
                    <input
                      name="amount"
                      v-model="user.rate"
                      placeholder="Enter price rate"
                      class="form-control"
                      type="number"
                      v-on:keyup="SubTotal(user.qty * user.rate)"
                      @change="Calculate(user.qty * user.rate)"
                    />

                    <button
                      @click.prevent="deleteRow(key)"
                      class="btn btn-danger"
                    >
                      Drop
                    </button>
                  </div>
                  <div class="col-12">
                    <button
                      class="btn btn-primary"
                      @click.prevent="addRow(users.length)"
                    >
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
                        <b>$ {{ this.subtotal }}</b>
                      </div>
                    </div>
                    <div class="form-group">
                      <label>Total</label>
                      <div>
                        <b>$ {{ this.total }}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <span class="error" v-if="errors.rate">{{ errors.rate }}</span>
            </p>
            <button @click.prevent="create" class="btn btn-success">
              Save invoice
            </button>
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
      errors: {
        rate: "",
        client_id: "",
      },
      Clients: [],
      a_checked: [],
      h_checked: [],
      key: 0,
      type: [],
      subtotal: 0,
      total: 0,
       isActive: []
    };
  },
  mounted() {
    this.getClients();
    this.date_function();
    this.a_checked = true;
    this.type[0] = "hidden";
    this.type[1] = "hidden";
    this.isActive[0] = true;
    
  },
  methods: {
    async create() {
      this.Invoice.client_id = this.users.client_id;
      if (this.Invoice.client_id == null) {
        this.errors.client_id = "*The client name field is required.";
      } else {
        await this.axios
          .post("/api/Invoice", {
            invoice: JSON.stringify(this.users),
            id: this.users.client_id,
          })
          .then((response) => {
            this.$swal("Invoice Added Successfully ", "", "success");
            // setTimeout(() => this.$router.go(), 1000);
            this.$router.push('/invoice');
          })
          .catch((error) => {
            console.log(error.response.data.message);
            this.errors.rate = "*Please fill out all empty and required fields";
          });
      }
    },

    date_function() {
      const current = new Date();
      const date =
        current.getDate() +
        "/" +
        current.getMonth() +
        "/" +
        current.getFullYear();
      this.Client.date = date;
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

    addRow: function (key) {
      this.users.push({
        description: "",
        client_id: "",
        qty: 1,
        rate: "",
      });
      this.type[key] = "hidden";
      this.h_checked = false;
      this.a_checked = true;
       this.isActive[key]= true;

    },
    deleteRow(key) {
      if (this.type[key + 1] == "hidden") {
        console.log(key + 1 + "hidden");
        this.type[key] = "hidden";
      } else {
        console.log(key + 1 + "number");
        this.type[key] = "number";
      }
      this.users.splice(key, 1);
    },
 SubTotal(value) {
      this.subtotal = value;
    },
    Calculate(value) {
      this.total += value;
    },

    Amount(key) {
      this.type[key] = "hidden";
       this.isActive[key]= true
      if ((this.type[key] = "hidden")) {
        this.a_checked = true;
        this.h_checked = false;
       this.isActive[key]= true

      } else {
        this.a_checked = false;
        this.h_checked = true;
       this.isActive[key]= false
      }
    },
    Hours(key) {
      this.type[key] = "number";
       this.isActive[key]= false
      if ((this.type[key] = "number")) {
        this.h_checked = true;
        this.a_checked = false;
       this.isActive[key]= false
      } else {
        this.h_checked = false;
        this.a_checked = true;
       this.isActive[key]= true
      }
    },
  },
};

</script>
<style scoped>
.hide {
    display: none;
}
</style>
