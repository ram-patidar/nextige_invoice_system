<template>
  <section class="dashboard-main">
    <div class="row">
      <div class="col-12 mb-2">
        <div class="page-header">
            <h3>Clients</h3>
        <router-link to="/client/add" class="btn custom-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M11,2a9,9,0,1,0,9,9A9,9,0,0,0,11,2Zm0,16.2A7.2,7.2,0,1,1,18.2,11,7.2,7.2,0,0,1,11,18.2Zm3.6-8.1H11.9V7.4a.9.9,0,1,0-1.8,0v2.7H7.4a.9.9,0,1,0,0,1.8h2.7v2.7a.9.9,0,0,0,1.8,0V11.9h2.7a.9.9,0,0,0,0-1.8Z" transform="translate(-2 -2)" fill="#fff"/></svg>
        Add Client</router-link>
        </div>
            <Breadcrumbs/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
            <div class="table-sec">
              <table id="example" class="table responsive nowrap cus-table" style="width:100%">
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
                        <div class="d-flex align-items-center mr-3">
                      <span class="avatar"
                        >{{ Client.client_name.split(" ")[0][0].toUpperCase()
                        }}{{
                          Client.client_name.split(" ")[1]
                            ? Client.client_name.split(" ")[1][0].toUpperCase()
                            : " "
                        }}
                      </span>
                    <div class="client-dtl">
                        <h5>{{ Client.client_name }}</h5>
                      <div class="client-cont">
                        <span>{{ Client.country.split("+")[0] }}</span>
                        <span class="country-icon"></span>
                      </div>
                    </div>
                        </div>
                    </td>
                    <td>{{ Client.company_name }}</td>
                    <td>{{ Client.email }}</td>
                    <td class="pre-formatted">{{ Client.address.replace("\n/g",'\n') }}</td>
                    <td>
                      <router-link
                        :to="{ name: 'clientedit', params: { id: Client.id } }"
                        class="btn custom-border-btn"
                        >View</router-link
                      >
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
  </section>
</template>

<script>
export default {
  name: "clients",
  data() {
    return {
      Clients: [],
      message: null,
      add:null
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
          this.Clients.sort((a, b) => (a.weight < b.weight ? 1 : -1));
        })

        .catch((error) => {
          console.log(error);
          this.Clients = [];
        });
    },
    // deleteClient(id, name) {
    //   this.$swal({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!",
    //   }).then((result) => {
    //     if (result.value) {
    //       this.axios.delete(`/api/Client/${id}`).then((response) => {
    //         this.$swal("Deleted!", `${name} has been deleted.`, "success");
    //       });
    //     }
    //     this.getClients();
    //   });
    // },
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
.pre-formatted {
  white-space: pre;
}
</style>