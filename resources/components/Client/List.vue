<template>
  <div class="row">
    <div class="col-12 mb-2 text-end">
      <router-link :to="{ name: 'ClientAdd' }" class="btn btn-primary"
        >Add Client</router-link
      >
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Clients</h4>

          <div class="success">{{ message }}</div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <!-- <th>S.no</th> -->
                  <!-- <th>Invoice Code</th> -->
                  <th>Client name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody v-if="Clients.length > 0">
                <tr v-for="(Client, key) in Clients" :key="key">
                  <!-- <td>{{key+1}}</td> -->
                  <!-- <td>{{ Client.invoice_code }}</td> -->
                  <td>
                    <span class="profile"
                      >{{ Client.client_name.split(" ")[0][0].toUpperCase()
                      }}{{
                        Client.client_name.split(" ")[1]
                          ? Client.client_name.split(" ")[1][0].toUpperCase()
                          : " "
                      }}
                    </span>
                    <b>{{ Client.client_name }}</b>
                    {{ Client.country }}
                  </td>
                  <td>{{ Client.company_name }}</td>
                  <td>{{ Client.email }}</td>
                  <td>{{ Client.address }}</td>
                  <td>
                    <router-link
                      :to="{
                        name: 'Clientview',
                        params: { id: Client.id, name: Client.client_name },
                      }"
                      class="btn btn-primary"
                      >View</router-link
                    >
                    <router-link
                      :to="{ name: 'ClientEdit', params: { id: Client.id } }"
                      class="btn btn-success"
                      >Edit</router-link
                    >
                    <button
                      type="button"
                      @click="deleteClient(Client.id, Client.client_name)"
                      class="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="4" align="center">No Clients Found.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clients",
  data() {
    return {
      Clients: [],
      message: null,
    };
  },
  mounted() {
    this.getClients();
  },
  methods: {
    async getClients() {
      await this.axios
        .get("/api/Client")
        .then((response) => {
          this.Clients = response.data.Clients;
           this.Clients.sort((a,b)=>a.weight<b.weight?1:-1)
        })
        .catch((error) => {
          console.log(error);
          this.Clients = [];
        });
    },
    deleteClient(id, name) {
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
          this.axios.delete(`/api/Client/${id}`).then((response) => {
            this.$swal("Deleted!", `${name} has been deleted.`, "success");
          });
        }
        this.getClients();
      });
    },
  },
};
</script>
<style scoped>
.success {
  color: green;
}
.profile {
  height: 40px;
  width: 40px;
  text-align: center;
  color: white;
  background-color: #0d6efd;
  border-radius: 60%;
  display: inline-block;
}
</style>