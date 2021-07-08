<template>
  <div>
    <h5>{{ this.$route.params.name }} Invoice list</h5>
    <div>
      <router-link :to="{ name: 'clientlist' }" class="btn btn-primary back"
        >&#8592; Back</router-link
      >
    </div>
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-8">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Client name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="this.$route.params.name"
                    disabled
                  />
                </div>
              </div>
              <!--  -->
              <tr v-for="(Invoice, key) in Invoices" :key="key">
                   <td>
                  <input
                    name="key"
                    value="#"
                    class="form-control"
                    type="text"
                    disabled
                  />
                </td>
                <td>
                  <input
                    name="description"
                    v-model="Invoice.description"
                    class="form-control"
                    type="text"
                    disabled
                  />
                </td>
                <td>
                  <input
                    name="amount"
                    v-model="Invoice.amount"
                    class="form-control"
                    type="number"
                    disabled

                  />
                </td>
                <td>
                  <button
                    type="button"
                    @click="deleteInvoice(Invoice.id, Invoice.description)"
                    class="btn btn-danger"
                  >
                    drop
                  </button>
                </td>
              </tr>
              <!--  -->
              <tr v-for="(user, key) in users" :key="key">
                <input
                  name="client_id"
                  v-model="users.client_id"
                  class="form-control"
                  type="hidden"
                />
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
                <label for="rate">Hours</label
                ><br />
                <input
                  type="hidden"
                  name="client_id"
                  v-model="users.client_id"
                />
                <td>
                  <input
                    name="description"
                    v-model="users.description"
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
                    v-model="users.qty"
                    placeholder="Enter hours"
                    class="form-control"
                    :type="type"
                  />
                </td>
                <td>
                  <input
                    name="amount"
                    v-model="users.rate"
                    placeholder="Enter price rate"
                    class="form-control"
                    type="number"
                  />
                </td>
                <span class="error" v-if="errors.amount">{{
                  errors.amount[0]
                }}</span>
                <td>
                  <button @click.prevent="create" class="btn btn-primary">
                    Save
                  </button>
                  <button @click="deleteRow(key)" class="btn btn-danger">
                    Drop
                  </button>
                </td>
              </tr>
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
                          ? (users.qty
                            ? users.qty * users.rate
                            : users.rate)
                          : "00"
                      }}</b
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label>Total</label>
                  <div>
                    <b
                      >$ {{this.sum}}
                     </b
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <router-link
      :to="{ name: 'generate_invoice', params: { id: this.$route.params.id } }"
      class="btn btn-primary"
      >Generate Invoice</router-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          client_id: "",
          description: "",
          rate: "",
          amount: "",
          qty: "",
          priceBtn: "",
        },
      ],
      Client: {
        invoice_code: "",
        client_id: "",
        date: null,
      },
      Invoices: [],
      errors: [],
      length: null,
      sum: "",
      a_checked: "",
      h_checked: "",
      type: "",
    };
  },
  mounted() {
    this.showData();
    this.ClientData();
    this.date_function();
    this.a_checked = true;
    this.type = "hidden";
  },

  methods: {
    async showData() {
      await this.axios
        .get(`/api/Invoice/${this.$route.params.id}`)
        .then((response) => {
          this.Invoices = response.data.showData;
          this.sum = response.data.Sum;
          console.log(this.sum)
          this.length = response.data.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async ClientData(id) {
      await this.axios
        .get(`/api/Client/${this.$route.params.id}`)
        .then((response) => {
          const { invoice_code, id } = response.data;
          this.Client.invoice_code = invoice_code;
          this.users.client_id = id;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data);
        });
    },

    addRow: function () {
      this.users.push({ description: "", amount: "" });
    },
    deleteRow(key) {
      this.users.splice(key, 1);
    },
    priceBtn(key) {
      this.users.priceBtn = key;
    },
    deleteInvoice(id, name) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.axios.delete(`/api/Invoice/${id}`).then((response) => {
            // this.$swal("Deleted!", `${name} has been deleted.`, "success");
          });
        }
        this.showData();
      });
    },

    async create() {
         this.users.amount = (this.users.qty?this.users.qty:1) * this.users.rate;
    //   console.log(this.users.amount);
      await this.axios
        .post("/api/Invoice", {
          client_id: this.$route.params.id,
          description: this.users.description,
          amount: this.users.amount,
        })
        .then((response) => {
        //   this.$swal("Added", `Invoice Added Success.`, "success");
          this.showData();
          this.users.description = null;
          this.users.qty = null;
          this.users.rate = null;
          this.errors = error.response.data.errors;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
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
    date_function() {
      const current = new Date();
      const date =
        current.getDate() +
        "/" +
        current.getMonth() +
        "/" +
        current.getFullYear();
      this.Client.date = date;
    //   console.log(this.Client.date);
    },
  },
};
</script>
<style scoped>
.back {
  text-align: right;
  position: inherit;
  margin: 0;
  margin-left: 1039px;
  margin-top: -111px;
}
</style>
