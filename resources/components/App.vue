<template>
  <main>
    <div class="wrapper">
      <div class="wrapper-left" v-if="showMenu">
        <div class="sidebar">
          <div class="sidebar-head">
            <a href="">
              <img src="images/logo.svg" alt="" />
            </a>
          </div>
          <div class="sidebar-nav">
            <ul>
              <li>
                <router-link
                  exact-active-class="active"
                  to="/dashboard"
                  class="nav-item"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M10,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,19H5V15H9ZM20,3H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,9H15V5h4Zm1,7H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2ZM10,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,9H5V5H9Z" transform="translate(-3 -3)" fill="#fff"/></svg>
                  Dashboard</router-link
                >
              </li>
              <li>
                <router-link
                  exact-active-class="active"
                  to="/client"
                  class="nav-item client-nav"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20"><g transform="translate(-0.5 -3.5)"><path d="M16.5,28.5v-2a4,4,0,0,0-4-4h-7a4,4,0,0,0-4,4v2" transform="translate(0 -6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M14.75,8.5a4,4,0,1,1-4-4A4,4,0,0,1,14.75,8.5Z" transform="translate(-1.75 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M30,12v6" transform="translate(-9.5 -2.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M31.5,16.5h-6" transform="translate(-8 -4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
                  Clients</router-link
                >
              </li>
              <li>
                <router-link
                  exact-active-class="active"
                  to="/invoice"
                  class="nav-item"
                >
               <svg xmlns="http://www.w3.org/2000/svg" width="17.996" height="18" viewBox="0 0 17.996 18"><path d="M8.3,11H6.5a.9.9,0,1,0,0,1.8H8.3a.9.9,0,0,0,0-1.8ZM7.4,9.2H11a.9.9,0,0,0,0-1.8H7.4a.9.9,0,0,0,0,1.8Zm.9,5.4H6.5a.9.9,0,1,0,0,1.8H8.3a.9.9,0,1,0,0-1.8ZM19.1,11H16.4V2.9a.9.9,0,0,0-1.35-.783l-2.7,1.548-2.7-1.548a.9.9,0,0,0-.9,0l-2.7,1.548L3.35,2.117A.9.9,0,0,0,2,2.9V17.3A2.7,2.7,0,0,0,4.7,20H17.3A2.7,2.7,0,0,0,20,17.3V11.9A.9.9,0,0,0,19.1,11ZM4.7,18.2a.9.9,0,0,1-.9-.9V4.456L5.6,5.482a.972.972,0,0,0,.9,0L9.2,3.934l2.7,1.548a.972.972,0,0,0,.9,0l1.8-1.026V17.3a2.7,2.7,0,0,0,.162.9Zm13.5-.9a.9.9,0,1,1-1.8,0V12.8h1.8ZM12.4,14.75a.684.684,0,0,0-.162-.081.54.54,0,0,0-.171-.054.9.9,0,0,0-.81.243A.945.945,0,0,0,11,15.5a.9.9,0,0,0,.063.342,1.071,1.071,0,0,0,.2.3,1.035,1.035,0,0,0,.3.189.846.846,0,0,0,.684,0,1.035,1.035,0,0,0,.3-.189A.9.9,0,0,0,12.8,15.5a.945.945,0,0,0-.261-.639,1.422,1.422,0,0,0-.135-.108Zm.126-3.491a.934.934,0,1,0,.2.3.819.819,0,0,0-.2-.3Z" transform="translate(-2 -1.996)" fill="#fff"/></svg>
                  Invoice</router-link
                >
              </li>
              <li>
                <router-link
                  exact-active-class="active"
                  to="/setting"
                  class="nav-item"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="17.682" height="18" viewBox="0 0 17.682 18"><path d="M18.093,11.593a.9.9,0,0,1,0-1.188l1.152-1.3a.9.9,0,0,0,.108-1.053l-1.8-3.114a.9.9,0,0,0-.963-.432L14.9,4.852a.9.9,0,0,1-1.035-.594l-.549-1.647A.9.9,0,0,0,12.46,2h-3.6a.9.9,0,0,0-.9.612l-.5,1.647a.9.9,0,0,1-1.035.594L4.685,4.511a.9.9,0,0,0-.9.432l-1.8,3.114a.9.9,0,0,0,.09,1.053l1.143,1.3a.9.9,0,0,1,0,1.188l-1.143,1.3a.9.9,0,0,0-.09,1.053l1.8,3.114a.9.9,0,0,0,.963.432l1.692-.342a.9.9,0,0,1,1.035.594l.549,1.647a.9.9,0,0,0,.9.612h3.6a.9.9,0,0,0,.855-.612l.549-1.647a.9.9,0,0,1,1.035-.594l1.692.342a.9.9,0,0,0,.963-.432l1.8-3.114a.9.9,0,0,0-.108-1.053ZM16.753,12.8l.72.81-1.152,2-1.062-.216a2.7,2.7,0,0,0-3.1,1.8L11.812,18.2h-2.3l-.324-1.026a2.7,2.7,0,0,0-3.1-1.8l-1.062.216L3.848,13.6l.72-.81a2.7,2.7,0,0,0,0-3.6l-.72-.81L5,6.4l1.062.216a2.7,2.7,0,0,0,3.1-1.8L9.509,3.8h2.3l.342,1.026a2.7,2.7,0,0,0,3.1,1.8l1.062-.216,1.152,2-.72.81a2.7,2.7,0,0,0,0,3.582ZM10.66,7.4a3.6,3.6,0,1,0,3.6,3.6A3.6,3.6,0,0,0,10.66,7.4Zm0,5.4a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,10.66,12.8Z" transform="translate(-1.857 -1.999)" fill="#fff"/></svg>
                  Settings</router-link
                >
              </li>
            </ul>
            <div class="logout-btn">
              <button class="btn" @click.prevent="logout">
               <svg xmlns="http://www.w3.org/2000/svg" width="17.995" height="18" viewBox="0 0 17.995 18"><path d="M11.53,11.9,9.46,13.96a.9.9,0,1,0,1.278,1.278l3.6-3.6a.93.93,0,0,0,0-1.278l-3.6-3.6A.9.9,0,0,0,9.46,8.039L11.53,10.1H2.9a.9.9,0,1,0,0,1.8ZM11,2A9,9,0,0,0,2.9,6.995a.906.906,0,0,0,1.62.81,7.236,7.236,0,1,1,.036,6.389.906.906,0,0,0-1.62.81A9,9,0,1,0,11,2Z" transform="translate(-2 -2)" fill="#fff"/></svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-right">
        <nav class="navbar navbar-expand-lg" v-if="showMenu">
          <!-- <router-link to="/" class="navbar-brand" href="#"><img class="logo" src="nextige-logo.png" alt=""></router-link> -->
          <div class="container-fluid">
            <div class="navbar-inr">
              <div class="current-user">
                <div>
                  <h4>
                  <div v-if="this.profile == ''">
                    <span class="c-user-icon">
                      {{
                        name.split(" ")[0][0] +
                        (name.split(" ")[1]
                          ? name.split(" ")[1][0].toUpperCase()
                          : " ")
                      }}
                    </span>
                  </div>
                  <div v-else>
                      <img
                        class="c-user-icon"
                        v-bind:src="'/images/' + this.profile"
                      />
                  </div>
                  </h4>
                </div>
                <div class="user-name">
                  <h5>{{ name }}</h5>
                  <span>{{ title }}</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="main-wrapeer">
            <transition name="fade" mode="out-in">
          <router-view></router-view>
           </transition>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      title: "",
      profile: "",
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
    this.showUser();
  },
  computed: {
    showMenu() {
      return (
        this.$route.name !== "login" &&
        this.$route.name !== "register" &&
        this.$route.name !== "generate_invoice"
      );
    },
  },
  methods: {
    logout() {
      axios.post("/api/logout").then(() => {
        localStorage.clear();
        this.$router.push({ name: "login" });
      });
    },
    async showUser() {
      await this.axios
        .get(`/api/login/${localStorage.getItem("token")}`)
        .then((response) => {
          const { name, title, profile } = response.data.user_data;
          this.name = name.charAt(0).toUpperCase() + name.slice(1);
          this.title = title;
          this.profile = profile;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.logo {
  width: 150px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
