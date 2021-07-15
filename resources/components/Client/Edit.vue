<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Client details</h4>
          <Breadcrumbs />
          <div class="col-12">
            <div class="cus-card">
              <div class="cus-card-body">
                <form>
                  <div class="row">
                    <div class="col-12 mb-2">
                      <div class="from-group">
                        <input
                          type="text"
                          class="cus-field"
                          placeholder=" "
                          v-model="Client.client_name"
                        />
                        <label>Client Name</label>
                      </div>
                    </div>
                    <div class="col-12 mb-2">
                      <div class="from-group">
                        <input
                          type="text"
                          class="cus-field"
                          placeholder=" "
                          v-model="Client.company_name"
                        />
                        <label>Company Name</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="form-group">
                      <label>Country</label>
                      <select
                        name="country"
                        class="form-control"
                        id="country"
                        v-model="Client.country"
                      >
                        <option value="">Select Country</option>
                        <option v-bind:value="Client.country" selected>
                          {{ Client.country.split("+")[1] }}
                        </option>
                        <option
                          v-for="(country, key) in country_list"
                          :key="key"
                          :value="country.short"
                        >
                          {{ country.name }}
                        </option>
                      </select>
                    </div>
                    <div class="col-12 mb-2">
                      <div class="from-group">
                        <input
                          type="text"
                          class="cus-field"
                          placeholder=" "
                          v-model="Client.email"
                        />
                        <label>Email</label>
                      </div>
                    </div>
                    <div class="col-12 mb-2">
                      <div class="from-group">
                        <textarea
                          class="cus-field"
                          placeholder=" "
                          v-model="Client.address"
                        >
                        </textarea>
                        <label>Address</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="btn-groups">
                      <button class="btn custom-btn" @click.prevent="update">
                        Update
                      </button>
                      <!-- <button class="btn custom-border-btn">Cancel</button> -->
                      <button
                        type="button"
                        @click="deleteClient()"
                        class="btn btn-danger-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "update-Client",
  data() {
    return {
      Client: {
        client_name: "",
        company_name: "",
        email: "",
        address: "",
        country: "",
        _method: "patch",
      },
      errors: [],
      client_id: this.$route.params.id,
      country_list: [
        {
          short: "AF+Afghanistan",
          name: "Afghanistan",
          flag: "1625315777.png",
        },
        { short: "AL+Albania", name: "Albania", flag: "url" },
        { short: "DZ+Algeria", name: "Algeria", flag: "url" },
        { short: "AS+American Samoa", name: "American Samoa", flag: "url" },
        { short: "AD+Andorra", name: "Andorra", flag: "url" },
        { short: "AO+Angola", name: "Angola", flag: "url" },
        { short: "AI+Anguilla", name: "Anguilla", flag: "url" },
        { short: "AQ+Antarctica", name: "Antarctica", flag: "url" },
        {
          short: "AG+Antigua and Barbuda",
          name: "Antigua and Barbuda",
          flag: "url",
        },
        { short: "AR+Argentina", name: "Argentina", flag: "url" },
        { short: "AM+Armenia", name: "Armenia", flag: "url" },
        { short: "AW+Aruba", name: "Aruba", flag: "url" },
        { short: "AU+Australia", name: "Australia", flag: "url" },
        { short: "AT+Austria", name: "Austria", flag: "url" },
        { short: "AZ+Azerbaijan", name: "Azerbaijan", flag: "url" },
        { short: "BS+Bahamas", name: "Bahamas", flag: "url" },
        { short: "BH+Bahrain", name: "Bahrain", flag: "url" },
        { short: "BD+Bangladesh", name: "Bangladesh", flag: "url" },
        { short: "BB+Barbados", name: "Barbados", flag: "url" },
        { short: "BY+Belarus", name: "Belarus", flag: "url" },
        { short: "BE+Belgium", name: "Belgium", flag: "url" },
        { short: "BZ+Belize", name: "Belize", flag: "url" },
        { short: "BJ+Benin", name: "Benin", flag: "url" },
        { short: "BM+Bermuda", name: "Bermuda", flag: "url" },
        { short: "BT+Bhutan", name: "Bhutan", flag: "url" },
        { short: "BW+Botswana", name: "Botswana", flag: "url" },
        { short: "BV+Bouvet Island", name: "Bouvet Island", flag: "url" },
        { short: "BR+Brazil", name: "Brazil", flag: "url" },
        {
          short: "BN+Brunei Darussalam",
          name: "Brunei Darussalam",
          flag: "url",
        },
        { short: "BG+Bulgaria", name: "Bulgaria", flag: "url" },
        { short: "BF+Burkina Faso", name: "Burkina Faso", flag: "url" },
        { short: "BI+Burundi", name: "Burundi", flag: "url" },
        { short: "CV+Cabo Verde", name: "Cabo Verde", flag: "url" },
        { short: "KH+Cambodia", name: "Cambodia", flag: "url" },
        { short: "CM+Cameroon", name: "Cameroon", flag: "url" },
        { short: "CA+Canada", name: "Canada", flag: "url" },
        { short: "KY+Cayman Islands", name: "Cayman Islands", flag: "url" },
        { short: "TD+Chad", name: "Chad", flag: "url" },
        { short: "CL+Chile", name: "Chile", flag: "url" },
        { short: "CN+China", name: "China", flag: "url" },
        { short: "CX+Christmas Island", name: "Christmas Island", flag: "url" },
        { short: "CO+Colombia", name: "Colombia", flag: "url" },
        { short: "KM+Comoros", name: "Comoros", flag: "url" },
        { short: "CG+Congo", name: "Congo ", flag: "url" },
        { short: "CK+Cook Islands", name: "Cook Islands ", flag: "url" },
        { short: "CR+Costa Rica", name: "Costa Rica", flag: "url" },
        { short: "HR+Croatia", name: "Croatia", flag: "url" },
        { short: "CU+Cuba", name: "Cuba", flag: "url" },
        { short: "CW+Curaçao", name: "Curaçao", flag: "url" },
        { short: "CY+Cyprus", name: "Cyprus", flag: "url" },
        { short: "CZ+Czechia", name: "Czechia", flag: "url" },
        { short: "DK+Denmark", name: "Denmark", flag: "url" },
        { short: "DJ+Djibouti", name: "Djibouti", flag: "url" },
        { short: "DM+Dominica", name: "Dominica", flag: "url" },
        {
          short: "DO+Dominican Republic",
          name: "Dominican Republic ",
          flag: "url",
        },
        { short: "EC+Ecuador", name: "Ecuador", flag: "url" },
        { short: "EG+Egypt", name: "Egypt", flag: "url" },
        {
          short: "GQ+Equatorial Guinea",
          name: "Equatorial Guinea",
          flag: "url",
        },
        { short: "ER+Eritrea", name: "Eritrea", flag: "url" },
        { short: "EE+Estonia", name: "Estonia", flag: "url" },
        { short: "SZ+Eswatini", name: "Eswatini", flag: "url" },
        { short: "ET+Ethiopia", name: "Ethiopia", flag: "url" },
        { short: "FO+Faroe Islands", name: "Faroe Islands ", flag: "url" },
        { short: "FJ+Fiji", name: "Fiji", flag: "url" },
        { short: "FI+Finland", name: "Finland", flag: "url" },
        { short: "FR+France", name: "France", flag: "url" },
        { short: "GF+French Guiana", name: "French Guiana", flag: "url" },
        { short: "PF+French Polynesia", name: "French Polynesia", flag: "url" },
        {
          short: "TF+French Son Territories",
          name: "French Son Territories ",
          flag: "url",
        },
        { short: "GA+Gabon", name: "Gabon", flag: "url" },
        { short: "GM+Gambia", name: "Gambia ", flag: "url" },
        { short: "GE+Georgia", name: "Georgia", flag: "url" },
        { short: "DE+Germany", name: "Germany", flag: "url" },
        { short: "GH+Ghana", name: "Ghana", flag: "url" },
        { short: "GI+Gibraltar", name: "Gibraltar", flag: "url" },
        { short: "GR+Greece", name: "Greece", flag: "url" },
        { short: "GL+Greenland", name: "Greenland", flag: "url" },
        { short: "GD+Grenada", name: "Grenada", flag: "url" },
        { short: "GP+Guadeloupe", name: "Guadeloupe", flag: "url" },
        { short: "GU+Guam", name: "Guam", flag: "url" },
        { short: "GT+Guatemala", name: "Guatemala", flag: "url" },
        { short: "GG+Guernsey", name: "Guernsey", flag: "url" },
        { short: "GN+Guinea", flag: "url" },
        { short: "GW+Guinea-Bissau", name: "Guinea-Bissau", flag: "url" },
        { short: "GY+Guyana", name: "Guyana", flag: "url" },
        { short: "HT+Haiti", name: "Haiti", flag: "url" },
        {
          short: "HM+Heard Island and McDonald Islands",
          name: "Heard Island and McDonald Islands",
          flag: "url",
        },
        { short: "VA+Holy See", name: "Holy See ", flag: "url" },
        { short: "HN+Honduras", name: "Honduras", flag: "url" },
        { short: "HK+Hong Kong", name: "Hong Kong", flag: "url" },
        { short: "HU+Hungary", name: "Hungary", flag: "url" },
        { short: "IS+Iceland", name: "Iceland", flag: "url" },
        { short: "IN+India", name: "India", flag: "url" },
        { short: "ID+Indonesia", name: "Indonesia", flag: "url" },
        { short: "IR+Iran", name: "Iran", flag: "url" },
        { short: "IQ+Iraq", name: "Iraq", flag: "url" },
        { short: "IE+Ireland", name: "Ireland", flag: "url" },
        { short: "IM+Isle of Man", name: "Isle of Man", flag: "url" },
        { short: "IL+Israel", name: "Israel", flag: "url" },
        { short: "IT+Italy", name: "Italy", flag: "url" },
        { short: "JM+Jamaica", name: "Jamaica", flag: "url" },
        { short: "JP+Japan", name: "Japan", flag: "url" },
        { short: "JE+Jersey", name: "Jersey", flag: "url" },
        { short: "JO+Jordan", name: "Jordan", flag: "url" },
        { short: "KZ+Kazakhstan", name: "Kazakhstan", flag: "url" },
        { short: "KE+Kenya", name: "Kenya", flag: "url" },
        { short: "KI+Kiribati", name: "Kiribati", flag: "url" },
        { short: "KP+Korea", name: "Korea", flag: "url" },
        { short: "KW+Kuwait", name: "Kuwait", flag: "url" },
        { short: "KG+Kyrgyzstan", name: "Kyrgyzstan", flag: "url" },
        { short: "LV+Latvia", name: "Latvia", flag: "url" },
        { short: "LB+Lebanon", name: "Lebanon", flag: "url" },
        { short: "LS+Lesotho", name: "Lesotho", flag: "url" },
        { short: "LR+Liberia", name: "Liberia", flag: "url" },
        { short: "LY+Libya", name: "Libya", flag: "url" },
        { short: "LI+Liechtenstein", name: "Liechtenstein", flag: "url" },
        { short: "LT+Lithuania", name: "Lithuania", flag: "url" },
        { short: "LU+Luxembourg", name: "Luxembourg", flag: "url" },
        { short: "MO+Macao", name: "Macao", flag: "url" },
        { short: "MG+Madagascar", name: "Madagascar", flag: "url" },
        { short: "MW+Malawi", name: "Malawi", flag: "url" },
        { short: "MY+Malaysia", name: "Malaysia", flag: "url" },
        { short: "MV+Maldives", name: "Maldives", flag: "url" },
        { short: "ML+Mali", name: "Mali", flag: "url" },
        { short: "MT+Malta", name: "Malta", flag: "url" },
        {
          short: "MH+Marshall Islands",
          name: "Marshall Islands ",
          flag: "url",
        },
        { short: "MQ+Martinique", name: "Martinique", flag: "url" },
        { short: "MR+Mauritania", name: "Mauritania", flag: "url" },
        { short: "MU+Mauritius", name: "Mauritius", flag: "url" },
        { short: "YT+Mayotte", name: "Mayotte", flag: "url" },
        { short: "MX+Mexico", name: "Mexico", flag: "url" },
        { short: "MC+Monaco", name: "Monaco", flag: "url" },
        { short: "MN+Mongolia", name: "Mongolia", flag: "url" },
        { short: "ME+Montenegro", name: "Montenegro", flag: "url" },
        { short: "MS+Montserrat", name: "Montserrat", flag: "url" },
        { short: "MA+Morocco", name: "Morocco", flag: "url" },
        { short: "MZ+Mozambique", name: "Mozambique", flag: "url" },
        { short: "MM+Myanmar", name: "Myanmar", flag: "url" },
        { short: "NA+Namibia", name: "Namibia", flag: "url" },
        { short: "NR+Nauru", name: "Nauru", flag: "url" },
        { short: "NP+Nepal", name: "Nepal", flag: "url" },
        { short: "NL+Ntherlands", name: "Ntherlands ", flag: "url" },
        { short: "NC+New Caledonia", name: "New Caledonia", flag: "url" },
        { short: "NZ+New Zealand", name: "New Zealand", flag: "url" },
        { short: "NI+Nicaragua", name: "Nicaragua", flag: "url" },
        { short: "NE+Niger", name: "Niger ", flag: "url" },
        { short: "NG+Nigeria", name: "Nigeria", flag: "url" },
        { short: "NU+Niue", name: "Niue", flag: "url" },
        { short: "NF+Norfolk Island", name: "Norfolk Island", flag: "url" },
        { short: "NO+Norway", name: "Norway", flag: "url" },
        { short: "OM+Oman", name: "Oman", flag: "url" },
        { short: "PK+Pakistan", name: "Pakistan", flag: "url" },
        { short: "PW+Palau", name: "Palau", flag: "url" },
        { short: "PA+Panama", name: "Panama", flag: "url" },
        { short: "PY+Paraguay", name: "Paraguay", flag: "url" },
        { short: "PE+Peru", name: "Peru", flag: "url" },
        { short: "PH+Philippines", name: "Philippines", flag: "url" },
        { short: "PN+Pitcairn", name: "Pitcairn", flag: "url" },
        { short: "PL+Poland", name: "Poland", flag: "url" },
        { short: "PT+Portugal", name: "Portugal", flag: "url" },
        { short: "PR+Puerto Rico", name: "Puerto Rico", flag: "url" },
        { short: "QA+Qatar", name: "Qatar", flag: "url" },
        { short: "RO+Romania", name: "Romania", flag: "url" },
        {
          short: "RU+Russian Federation",
          name: "Russian Federation",
          flag: "url",
        },
        { short: "RW+Rwanda", name: "Rwanda", flag: "url" },
        { short: "RE+Réunion", name: "Réunion", flag: "url" },
        { short: "WS+Samoa", name: "Samoa", flag: "url" },
        { short: "SM+San Marino", name: "San Marino", flag: "url" },
        { short: "SA+Saudi Arabia", name: "Saudi Arabia", flag: "url" },
        { short: "SN+Senegal", name: "Senegal", flag: "url" },
        { short: "RS+Serbia", name: "Serbia", flag: "url" },
        { short: "SC+Seychelles", name: "Seychelles", flag: "url" },
        { short: "SL+Sierra Leone", name: "Sierra Leone", flag: "url" },
        { short: "SG+Singapore", name: "Singapore", flag: "url" },
        { short: "SX+Sint Maarten", name: "Sint Maarten", flag: "url" },
        { short: "SK+Slovakia", name: "Slovakia", flag: "url" },
        { short: "SI+Slovenia", name: "Slovenia", flag: "url" },
        { short: "SB+Solomon Islands", name: "Solomon Islands", flag: "url" },
        { short: "SO+Somalia", name: "Somalia", flag: "url" },
        { short: "ZA+South Africa", name: "South Africa", flag: "url" },
        { short: "SS+South Sudan", name: "South Sudan", flag: "url" },
        { short: "ES+Spain", name: "Spain", flag: "url" },
        { short: "LK+Sri Lanka", name: "Sri Lanka", flag: "url" },
        { short: "SD+Sudan", name: "Sudan", flag: "url" },
        { short: "SR+Suriname", name: "Suriname", flag: "url" },
        { short: "SE+Sweden", name: "Sweden", flag: "url" },
        { short: "CH+Switzerland", name: "Switzerland", flag: "url" },
        { short: "TW+Taiwan", name: "Taiwan", flag: "url" },
        { short: "TJ+Tajikistan", name: "Tajikistan", flag: "url" },
        { short: "TH+Thailand", name: "Thailand", flag: "url" },
        { short: "TL+Timor-Leste", name: "Timor-Leste", flag: "url" },
        { short: "TG+Togo", name: "Togo", flag: "url" },
        { short: "TK+Tokelau", name: "Tokelau", flag: "url" },
        { short: "TO+Tonga", name: "Tonga", flag: "url" },
        { short: "TN+Tunisia", name: "Tunisia", flag: "url" },
        { short: "TR+Turkey", name: "Turkey", flag: "url" },
        { short: "TM+Turkmenistan", name: "Turkmenistan", flag: "url" },
        { short: "TV+Tuvalu", name: "Tuvalu", flag: "url" },
        { short: "UG+Uganda", name: "Uganda", flag: "url" },
        { short: "UA+Ukraine", name: "Ukraine", flag: "url" },
        {
          short: "AE+United Arab Emirates",
          name: "United Arab Emirates",
          flag: "url",
        },
        { short: "UK+United Kingdom", name: "United Kingdom", flag: "url" },
        {
          short: "USA+United States of America",
          name: "United States of America",
          flag: "url",
        },
        { short: "UY+Uruguay", name: "Uruguay", flag: "url" },
        { short: "UZ+Uzbekistan", name: "Uzbekistan", flag: "url" },
        { short: "VU+Vanuatu", name: "Vanuatu", flag: "url" },
        { short: "EH+Western Sahara", name: "Western Sahara", flag: "url" },
        { short: "YE+Yemen", name: "Yemen", flag: "url" },
        { short: "ZM+Zambia", name: "Zambia", flag: "url" },
        { short: "ZW+Zimbabwe", name: "Zimbabwe", flag: "url" },
      ],
    };
  },
  mounted() {
    this.showClient();
  },
  methods: {
    async showClient() {
      await this.axios
        .get(`/api/Client/${this.$route.params.id}`)
        .then((response) => {
          const { client_name, country, company_name, email, address } =
            response.data;
          this.Client.client_name = client_name;
          this.Client.company_name = company_name;
          this.Client.country = country;
          this.Client.email = email;
          this.Client.address = address;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data);
        });
    },
    async update() {
      await this.axios
        .post(`/api/Client/${this.$route.params.id}`, this.Client)
        .then((response) => {
          this.$router.push({ name: "clientlist" });
          this.$swal("Client update successfully.", ``, "success");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteClient() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3fa9f4",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          this.axios
            .delete(`/api/Client/${this.$route.params.id}`)
            .then((response) => {
              this.$swal("Deleted!", ``, "success");
              this.$router.push("/client");
            });
        }
      });
    },
  },
};
</script>