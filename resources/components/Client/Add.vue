<template>
  <section class="dashboard-main">
    <div class="row">
      <div class="col-12">
        <div class="page-header">
          <h4>Add Client</h4>
          <router-link to="/client" class="btn custom-btn"><svg xmlns="http://www.w3.org/2000/svg" width="8.152" height="14.258" viewBox="0 0 8.152 14.258"><path d="M13.319,16.941l5.391-5.4a1.015,1.015,0,0,1,1.439,0,1.028,1.028,0,0,1,0,1.443L14.041,19.1a1.017,1.017,0,0,1-1.405.03L6.485,12.993A1.019,1.019,0,1,1,7.924,11.55Z" transform="translate(19.399 -6.188) rotate(90)" fill="#fff"/></svg> Back</router-link>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="cus-card">
          <div class="cus-card-body">
            <form @submit.prevent="create">
              <div class="row">
                <div class="col-12">
                  <div class="from-group">
                    <input
                      type="text"
                      name="client_name"
                      class="cus-field"
                      v-model="Client.client_name"
                      autocomplete="off" 
                      placeholder=" "
                    />
                    <label>Client Name</label>
                    <span class="error" v-if="errors.client_name">{{
                      errors.client_name[0]
                    }}</span>
                  </div>
                </div>
                <div class="col-12">
                  <div class="from-group">
                    <input
                      type="text"
                      name="company_name"
                      class="cus-field"
                      v-model="Client.company_name"
                      autocomplete="off" 
                      placeholder=" "
                    />
                    <label>Company Name</label>
                    <span class="error" v-if="errors.company_name">{{
                      errors.company_name[0]
                    }}</span>
                  </div>
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
                    <option value=""> Select country</option>
                    <option
                      v-for="(country, key) in country_list"
                      :key="key"
                      :value="country.short"
                    >
                    <!-- <img v-bind:src="'/images/'+img_url" alt=""> -->
                      {{ country.name }}
                      
                    </option>
                  </select>

                  <span class="error" v-if="errors.country">{{
                    errors.country[0]
                  }}</span>
                </div>
                <div class="col-12">
                  <div class="from-group">
                    <input
                      type="text"
                      name="email"
                      class="cus-field"
                      v-model="Client.email"
                      autocomplete="off" 
                      placeholder=" "
                    />
                    <label>Email</label>
                    <span class="error" v-if="errors.email">{{
                      errors.email[0]
                    }}</span>
                  </div>
                </div>
                <div class="col-12">
                  <div class="from-group">
                    <textarea
                      type="text"
                      name="address"
                      class="cus-field"
                      v-model="Client.address"
                      autocomplete="off" 
                      placeholder=" "
                    />
                    <label>Address</label>
                    <span class="error" v-if="errors.address">{{
                      errors.address[0]
                    }}</span>
                  </div>
                </div>
                <div class="col-12">
                 <div class="text-center btn-groups">
                    <button type="submit" class="btn custom-btn">
                    Add Client
                  </button>
                  <button class="btn custom-border-btn">Cancel</button>
                 </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      increment_id: "",
      country_list: [
        { short: "AF", name: "Afghanistan", flag: "1625315777.png" },
        { short: "AL", name: "Albania", flag: "url" },
        { short: "DZ", name: "Algeria", flag: "url" },
        { short: "AS", name: "American Samoa", flag: "url" },
        { short: "AD", name: "Andorra", flag: "url" },
        { short: "AO", name: "Angola", flag: "url" },
        { short: "AI", name: "Anguilla", flag: "url" },
        { short: "AQ", name: "Antarctica", flag: "url" },
        { short: "AG", name: "Antigua and Barbuda", flag: "url" },
        { short: "AR", name: "Argentina", flag: "url" },
        { short: "AM", name: "Armenia", flag: "url" },
        { short: "AW", name: "Aruba", flag: "url" },
        { short: "AU", name: "Australia", flag: "url" },
        { short: "AT", name: "Austria", flag: "url" },
        { short: "AZ", name: "Azerbaijan", flag: "url" },
        { short: "BS", name: "Bahamas (the)", flag: "url" },
        { short: "BH", name: "Bahrain", flag: "url" },
        { short: "BD", name: "Bangladesh", flag: "url" },
        { short: "BB", name: "Barbados", flag: "url" },
        { short: "BY", name: "Belarus", flag: "url" },
        { short: "BE", name: "Belgium", flag: "url" },
        { short: "BZ", name: "Belize", flag: "url" },
        { short: "BJ", name: "Benin", flag: "url" },
        { short: "BM", name: "Bermuda", flag: "url" },
        { short: "BT", name: "Bhutan", flag: "url" },
        { short: "BW", name: "Botswana", flag: "url" },
        { short: "BV", name: "Bouvet Island", flag: "url" },
        { short: "BR", name: "Brazil", flag: "url" },
        { short: "BN", name: "Brunei Darussalam", flag: "url" },
        { short: "BG", name: "Bulgaria", flag: "url" },
        { short: "BF", name: "Burkina Faso", flag: "url" },
        { short: "BI", name: "Burundi", flag: "url" },
        { short: "CV", name: "Cabo Verde", flag: "url" },
        { short: "KH", name: "Cambodia", flag: "url" },
        { short: "CM", name: "Cameroon", flag: "url" },
        { short: "CA", name: "Canada", flag: "url" },
        { short: "KY", name: "Cayman Islands (the)", flag: "url" },
        { short: "TD", name: "Chad", flag: "url" },
        { short: "CL", name: "Chile", flag: "url" },
        { short: "CN", name: "China", flag: "url" },
        { short: "CX", name: "Christmas Island", flag: "url" },
        { short: "CO", name: "Colombia", flag: "url" },
        { short: "KM", name: "Comoros (the)", flag: "url" },
        { short: "CG", name: "Congo (the)", flag: "url" },
        { short: "CK", name: "Cook Islands (the)", flag: "url" },
        { short: "CR", name: "Costa Rica", flag: "url" },
        { short: "HR", name: "Croatia", flag: "url" },
        { short: "CU", name: "Cuba", flag: "url" },
        { short: "CW", name: "Curaçao", flag: "url" },
        { short: "CY", name: "Cyprus", flag: "url" },
        { short: "CZ", name: "Czechia", flag: "url" },
        { short: "CI", name: "Côte d'Ivoire", flag: "url" },
        { short: "DK", name: "Denmark", flag: "url" },
        { short: "DJ", name: "Djibouti", flag: "url" },
        { short: "DM", name: "Dominica", flag: "url" },
        { short: "DO", name: "Dominican Republic (the)", flag: "url" },
        { short: "EC", name: "Ecuador", flag: "url" },
        { short: "EG", name: "Egypt", flag: "url" },
        { short: "SV", name: "El Salvador", flag: "url" },
        { short: "GQ", name: "Equatorial Guinea", flag: "url" },
        { short: "ER", name: "Eritrea", flag: "url" },
        { short: "EE", name: "Estonia", flag: "url" },
        { short: "SZ", name: "Eswatini", flag: "url" },
        { short: "ET", name: "Ethiopia", flag: "url" },
        { short: "FK", name: "Falkland Islands (the) [Malvinas]", flag: "url" },
        { short: "FO", name: "Faroe Islands (the)", flag: "url" },
        { short: "FJ", name: "Fiji", flag: "url" },
        { short: "FI", name: "Finland", flag: "url" },
        { short: "FR", name: "France", flag: "url" },
        { short: "GF", name: "French Guiana", flag: "url" },
        { short: "PF", name: "French Polynesia", flag: "url" },
        { short: "TF", name: "French Southern Territories (the)", flag: "url" },
        { short: "GA", name: "Gabon", flag: "url" },
        { short: "GM", name: "Gambia (the)", flag: "url" },
        { short: "GE", name: "Georgia", flag: "url" },
        { short: "DE", name: "Germany", flag: "url" },
        { short: "GH", name: "Ghana", flag: "url" },
        { short: "GI", name: "Gibraltar", flag: "url" },
        { short: "GR", name: "Greece", flag: "url" },
        { short: "GL", name: "Greenland", flag: "url" },
        { short: "GD", name: "Grenada", flag: "url" },
        { short: "GP", name: "Guadeloupe", flag: "url" },
        { short: "GU", name: "Guam", flag: "url" },
        { short: "GT", name: "Guatemala", flag: "url" },
        { short: "GG", name: "Guernsey", flag: "url" },
        { short: "GN", name: "Guinea", flag: "url" },
        { short: "GW", name: "Guinea-Bissau", flag: "url" },
        { short: "GY", name: "Guyana", flag: "url" },
        { short: "HT", name: "Haiti", flag: "url" },
        { short: "HM", name: "Heard Island and McDonald Islands", flag: "url" },
        { short: "VA", name: "Holy See (the)", flag: "url" },
        { short: "HN", name: "Honduras", flag: "url" },
        { short: "HK", name: "Hong Kong", flag: "url" },
        { short: "HU", name: "Hungary", flag: "url" },
        { short: "IS", name: "Iceland", flag: "url" },
        { short: "IN", name: "India", flag: "url" },
        { short: "ID", name: "Indonesia", flag: "url" },
        { short: "IR", name: "Iran (Islamic Republic of)", flag: "url" },
        { short: "IQ", name: "Iraq", flag: "url" },
        { short: "IE", name: "Ireland", flag: "url" },
        { short: "IM", name: "Isle of Man", flag: "url" },
        { short: "IL", name: "Israel", flag: "url" },
        { short: "IT", name: "Italy", flag: "url" },
        { short: "JM", name: "Jamaica", flag: "url" },
        { short: "JP", name: "Japan", flag: "url" },
        { short: "JE", name: "Jersey", flag: "url" },
        { short: "JO", name: "Jordan", flag: "url" },
        { short: "KZ", name: "Kazakhstan", flag: "url" },
        { short: "KE", name: "Kenya", flag: "url" },
        { short: "KI", name: "Kiribati", flag: "url" },
        {
          short: "KP",
          name: "Korea",
          flag: "url",
        },
        { short: "KR", name: "Korea (the Republic of)", flag: "url" },
        { short: "KW", name: "Kuwait", flag: "url" },
        { short: "KG", name: "Kyrgyzstan", flag: "url" },
        { short: "LV", name: "Latvia", flag: "url" },
        { short: "LB", name: "Lebanon", flag: "url" },
        { short: "LS", name: "Lesotho", flag: "url" },
        { short: "LR", name: "Liberia", flag: "url" },
        { short: "LY", name: "Libya", flag: "url" },
        { short: "LI", name: "Liechtenstein", flag: "url" },
        { short: "LT", name: "Lithuania", flag: "url" },
        { short: "LU", name: "Luxembourg", flag: "url" },
        { short: "MO", name: "Macao", flag: "url" },
        { short: "MG", name: "Madagascar", flag: "url" },
        { short: "MW", name: "Malawi", flag: "url" },
        { short: "MY", name: "Malaysia", flag: "url" },
        { short: "MV", name: "Maldives", flag: "url" },
        { short: "ML", name: "Mali", flag: "url" },
        { short: "MT", name: "Malta", flag: "url" },
        { short: "MH", name: "Marshall Islands (the)", flag: "url" },
        { short: "MQ", name: "Martinique", flag: "url" },
        { short: "MR", name: "Mauritania", flag: "url" },
        { short: "MU", name: "Mauritius", flag: "url" },
        { short: "YT", name: "Mayotte", flag: "url" },
        { short: "MX", name: "Mexico", flag: "url" },
        { short: "MC", name: "Monaco", flag: "url" },
        { short: "MN", name: "Mongolia", flag: "url" },
        { short: "ME", name: "Montenegro", flag: "url" },
        { short: "MS", name: "Montserrat", flag: "url" },
        { short: "MA", name: "Morocco", flag: "url" },
        { short: "MZ", name: "Mozambique", flag: "url" },
        { short: "MM", name: "Myanmar", flag: "url" },
        { short: "NA", name: "Namibia", flag: "url" },
        { short: "NR", name: "Nauru", flag: "url" },
        { short: "NP", name: "Nepal", flag: "url" },
        { short: "NL", name: "Netherlands (the)", flag: "url" },
        { short: "NC", name: "New Caledonia", flag: "url" },
        { short: "NZ", name: "New Zealand", flag: "url" },
        { short: "NI", name: "Nicaragua", flag: "url" },
        { short: "NE", name: "Niger (the)", flag: "url" },
        { short: "NG", name: "Nigeria", flag: "url" },
        { short: "NU", name: "Niue", flag: "url" },
        { short: "NF", name: "Norfolk Island", flag: "url" },
        { short: "NO", name: "Norway", flag: "url" },
        { short: "OM", name: "Oman", flag: "url" },
        { short: "PK", name: "Pakistan", flag: "url" },
        { short: "PW", name: "Palau", flag: "url" },
        { short: "PS", name: "Palestine, State of", flag: "url" },
        { short: "PA", name: "Panama", flag: "url" },
        { short: "PG", name: "Papua New Guinea", flag: "url" },
        { short: "PY", name: "Paraguay", flag: "url" },
        { short: "PE", name: "Peru", flag: "url" },
        { short: "PH", name: "Philippines (the)", flag: "url" },
        { short: "PN", name: "Pitcairn", flag: "url" },
        { short: "PL", name: "Poland", flag: "url" },
        { short: "PT", name: "Portugal", flag: "url" },
        { short: "PR", name: "Puerto Rico", flag: "url" },
        { short: "QA", name: "Qatar", flag: "url" },
        { short: "MK", name: "Republic of North Macedonia", flag: "url" },
        { short: "RO", name: "Romania", flag: "url" },
        { short: "RU", name: "Russian Federation (the)", flag: "url" },
        { short: "RW", name: "Rwanda", flag: "url" },
        { short: "RE", name: "Réunion", flag: "url" },
        { short: "BL", name: "Saint Barthélemy", flag: "url" },
        { short: "KN", name: "Saint Kitts and Nevis", flag: "url" },
        { short: "LC", name: "Saint Lucia", flag: "url" },
        { short: "MF", name: "Saint Martin (French part)", flag: "url" },
        { short: "PM", name: "Saint Pierre and Miquelon", flag: "url" },
        { short: "VC", name: "Saint Vincent and the Grenadines", flag: "url" },
        { short: "WS", name: "Samoa", flag: "url" },
        { short: "SM", name: "San Marino", flag: "url" },
        { short: "ST", name: "Sao Tome and Principe", flag: "url" },
        { short: "SA", name: "Saudi Arabia", flag: "url" },
        { short: "SN", name: "Senegal", flag: "url" },
        { short: "RS", name: "Serbia", flag: "url" },
        { short: "SC", name: "Seychelles", flag: "url" },
        { short: "SL", name: "Sierra Leone", flag: "url" },
        { short: "SG", name: "Singapore", flag: "url" },
        { short: "SX", name: "Sint Maarten (Dutch part)", flag: "url" },
        { short: "SK", name: "Slovakia", flag: "url" },
        { short: "SI", name: "Slovenia", flag: "url" },
        { short: "SB", name: "Solomon Islands", flag: "url" },
        { short: "SO", name: "Somalia", flag: "url" },
        { short: "ZA", name: "South Africa", flag: "url" },
        { short: "SS", name: "South Sudan", flag: "url" },
        { short: "ES", name: "Spain", flag: "url" },
        { short: "LK", name: "Sri Lanka", flag: "url" },
        { short: "SD", name: "Sudan (the)", flag: "url" },
        { short: "SR", name: "Suriname", flag: "url" },
        { short: "SJ", name: "Svalbard and Jan Mayen", flag: "url" },
        { short: "SE", name: "Sweden", flag: "url" },
        { short: "CH", name: "Switzerland", flag: "url" },
        { short: "SY", name: "Syrian Arab Republic", flag: "url" },
        { short: "TW", name: "Taiwan", flag: "url" },
        { short: "TJ", name: "Tajikistan", flag: "url" },
        { short: "TZ", name: "Tanzania, United Republic of", flag: "url" },
        { short: "TH", name: "Thailand", flag: "url" },
        { short: "TL", name: "Timor-Leste", flag: "url" },
        { short: "TG", name: "Togo", flag: "url" },
        { short: "TK", name: "Tokelau", flag: "url" },
        { short: "TO", name: "Tonga", flag: "url" },
        { short: "TT", name: "Trinidad and Tobago", flag: "url" },
        { short: "TN", name: "Tunisia", flag: "url" },
        { short: "TR", name: "Turkey", flag: "url" },
        { short: "TM", name: "Turkmenistan", flag: "url" },
        { short: "TC", name: "Turks and Caicos Islands (the)", flag: "url" },
        { short: "TV", name: "Tuvalu", flag: "url" },
        { short: "UG", name: "Uganda", flag: "url" },
        { short: "UA", name: "Ukraine", flag: "url" },
        { short: "AE", name: "United Arab Emirates (the)", flag: "url" },
        {
          short: "GB",
          name: "United Kingdom of Great Britain and Northern Ireland (the)",
          flag: "url",
        },
        {
          short: "UM",
          name: "United States Minor Outlying Islands (the)",
          flag: "url",
        },
        { short: "US", name: "United States of America (the)", flag: "url" },
        { short: "UY", name: "Uruguay", flag: "url" },
        { short: "UZ", name: "Uzbekistan", flag: "url" },
        { short: "VU", name: "Vanuatu", flag: "url" },
        {
          short: "VE",
          name: "Venezuela (Bolivarian Republic of)",
          flag: "url",
        },
        { short: "VN", name: "Viet Nam", flag: "url" },
        { short: "VG", name: "Virgin Islands (British)", flag: "url" },
        { short: "VI", name: "Virgin Islands (U.S.)", flag: "url" },
        { short: "WF", name: "Wallis and Futuna", flag: "url" },
        { short: "EH", name: "Western Sahara", flag: "url" },
        { short: "YE", name: "Yemen", flag: "url" },
        { short: "ZM", name: "Zambia", flag: "url" },
        { short: "ZW", name: "Zimbabwe", flag: "url" },
        { short: "AX", name: "Åland Islands", flag: "url" },
      ],
    };
  },
  mounted() {
    this.getClients();
  },
  methods: {
    async create() {
      this.Client.invoice_code =
        "#NX-" +
        this.Client.client_name.split(" ")[0].toUpperCase() +
        "00" +
        this.increment_id;
      await this.axios
        .post("/api/Client", this.Client)
        .then((response) => {
          this.$swal("Client Added Successfully ", "", "success");
          this.$router.push("/client");
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
          // this.Client.invoice_code = "#NX-00" + (response.data.last_id + 1);
          this.increment_id = response.data.last_id + 1;
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
