<template>
  <div class="row">
    <div class="col-12 mb-2 text-end">
      <router-link to="/invoice/add" class="btn btn-primary"
        >Create Invoice</router-link
      >
    </div>
    <Breadcrumbs />
    <select v-model="perPage" class="text-center" @click="setPages">
      <option :value="length">show all</option>
      <option :value="2">2</option>
      <option :value="5">5</option>
      <option :value="10">10</option>
      <option :value="15">15</option>
      <option :value="20">20</option>
    </select>
    <input
      class="form-control"
      type="text"
      v-model="searchQuery"
      placeholder="Search..."
    />
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Invoice</h4>
        </div>

        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered text-center"
              v-if="displayedPosts.length > 0"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Invoice Number</th>
                  <th>Client</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody v-for="(Invoice, key) in displayedPosts" :key="key">
                <tr v-if="key < perPage">
                  <td>{{ key + 1 }}</td>
                  <td>{{ Invoice.invoice_code }}</td>
                  <td>{{ Invoice.client_name }}</td>
                  <td>${{ Invoice.amount }}</td>
                  <td>{{ Invoice.description }}</td>
                  <td>{{ Invoice.created_at.split(" ")[0] }}</td>
                  <td>
                    <router-link
                      :to="{ name: 'invoiceedit', params: { id: Invoice.id } }"
                      class="btn btn-success"
                      >Edit</router-link
                    >
                    <button
                      type="button"
                      @click="deleteInvoice(Invoice.id, Invoice.description)"
                      class="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table table-bordered text-center" v-else>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Invoice Number</th>
                  <th>Client</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="7" align="center">No Invoices Found.</td>
                </tr>
              </tbody>
            </table>
            <div>
              <span
                >Showing 1 to {{ perPage > length ? length : perPage }} of
                {{ length }} rows</span
              >
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li class="page-item">
                    <button
                      type="button"
                      class="page-link"
                      v-if="page != 1"
                      @click="page--"
                    >
                      Previous
                    </button>
                  </li>
                  <li class="page-item">
                    <button
                      type="button"
                      class="page-link"
                      v-for="(pageNumber, num) in pages.slice(
                        page - 1,
                        page + 5
                      )"
                      :key="num"
                      @click="page = pageNumber"
                    >
                      {{ pageNumber }}
                    </button>
                  </li>
                  <li class="page-item">
                    <button
                      type="button"
                      @click="page++"
                      v-if="page < pages.length"
                      class="page-link"
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Invoices",
  data() {
    return {
      length: null,
      Invoices: [],
      searchQuery: null,
      posts: [""],
      page: 1,
      perPage: 5,
      pages: [],
    };
  },
  mounted() {
    this.getInvoices();
  },
  watch: {
    resultInvoice() {
      this.setPages();
    },
  },
  computed: {
    resultInvoice() {
      if (this.searchQuery) {
        return this.Invoices.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(
              (v) =>
                item.client_name.toLowerCase().includes(v) ||
                item.invoice_code.toLowerCase().includes(v) ||
                item.created_at.toLowerCase().includes(v)
            );
        });
      } else {
        return this.Invoices;
      }
    },
    displayedPosts() {
      return this.paginate(this.resultInvoice);
    },
  },
  methods: {
    setPages() {
      this.pages = [];
      let numberOfPages = Math.ceil(this.resultInvoice.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(resultInvoice) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return resultInvoice.slice(from, to);
    },
    async getInvoices() {
      await this.axios
        .get("/api/Invoice")
        .then((response) => {
          this.Invoices = response.data.JoinData;
          this.length = this.Invoices.length;
          this.Invoices.sort((a, b) => (a.weight < b.weight ? 1 : -1));
        })
        .catch((error) => {
          console.log(error);
          this.Invoices = [];
        });
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
            this.$swal("Deleted!", `${name} has been deleted.`, "success");
          });
        }
        this.getInvoices();
      });
    },
  },
};
</script>