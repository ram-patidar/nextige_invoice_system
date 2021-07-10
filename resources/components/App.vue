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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    viewBox="0 0 18 20"
                    fill="none"
                  >
                    <path
                      d="M12.5324 12.8555C13.0479 12.5708 13.6381 12.4088 14.2666 12.4088H14.2687C14.3326 12.4088 14.3625 12.3299 14.3156 12.2861C13.662 11.6832 12.9154 11.1963 12.1063 10.8453C12.0978 10.8409 12.0892 10.8387 12.0807 10.8343C13.4037 9.84671 14.2645 8.24161 14.2645 6.43066C14.2645 3.43066 11.9039 1 8.9915 1C6.07913 1 3.72068 3.43066 3.72068 6.43066C3.72068 8.24161 4.5814 9.84671 5.90656 10.8343C5.89804 10.8387 5.88952 10.8409 5.881 10.8453C4.92867 11.2591 4.07434 11.8526 3.33933 12.6102C2.60855 13.36 2.02676 14.2488 1.62642 15.227C1.23252 16.185 1.01993 17.2113 1.00005 18.2511C0.999485 18.2745 1.00347 18.2977 1.01178 18.3195C1.02009 18.3412 1.03256 18.3611 1.04844 18.3778C1.06433 18.3945 1.08331 18.4078 1.10427 18.4169C1.12523 18.426 1.14775 18.4307 1.17049 18.4307H2.44665C2.53826 18.4307 2.61496 18.354 2.61709 18.2599C2.6597 16.5693 3.31802 14.9861 4.4834 13.7861C5.68712 12.5445 7.28925 11.8613 8.99364 11.8613C10.2016 11.8613 11.3606 12.2051 12.3598 12.8489C12.3855 12.8655 12.4149 12.8748 12.4452 12.876C12.4755 12.8771 12.5056 12.8701 12.5324 12.8555ZM8.99364 10.1971C8.01787 10.1971 7.09963 9.80511 6.40723 9.09343C6.06655 8.74418 5.79647 8.3291 5.61255 7.8721C5.42863 7.4151 5.33451 6.92521 5.33559 6.43066C5.33559 5.42555 5.71695 4.47956 6.40723 3.76788C7.0975 3.0562 8.01574 2.66423 8.99364 2.66423C9.97153 2.66423 10.8876 3.0562 11.58 3.76788C11.9207 4.11713 12.1908 4.53221 12.3747 4.98921C12.5586 5.44621 12.6528 5.9361 12.6517 6.43066C12.6517 7.43577 12.2703 8.38175 11.58 9.09343C10.8876 9.80511 9.9694 10.1971 8.99364 10.1971ZM16.8296 15.4088H15.04V13.5693C15.04 13.473 14.9633 13.3942 14.8695 13.3942H13.6764C13.5827 13.3942 13.506 13.473 13.506 13.5693V15.4088H11.7164C11.6227 15.4088 11.546 15.4876 11.546 15.5839V16.8102C11.546 16.9066 11.6227 16.9854 11.7164 16.9854H13.506V18.8248C13.506 18.9212 13.5827 19 13.6764 19H14.8695C14.9633 19 15.04 18.9212 15.04 18.8248V16.9854H16.8296C16.9233 16.9854 17 16.9066 17 16.8102V15.5839C17 15.4876 16.9233 15.4088 16.8296 15.4088Z"
                      fill="#ffffffcc"
                      stroke="#ffffffcc"
                      stroke-width="0.6"
                    />
                  </svg>
                  Dashboard</router-link
                >
              </li>
              <li>
                <router-link
                  exact-active-class="active"
                  to="/client"
                  class="nav-item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    viewBox="0 0 18 20"
                    fill="none"
                  >
                    <path
                      d="M12.5324 12.8555C13.0479 12.5708 13.6381 12.4088 14.2666 12.4088H14.2687C14.3326 12.4088 14.3625 12.3299 14.3156 12.2861C13.662 11.6832 12.9154 11.1963 12.1063 10.8453C12.0978 10.8409 12.0892 10.8387 12.0807 10.8343C13.4037 9.84671 14.2645 8.24161 14.2645 6.43066C14.2645 3.43066 11.9039 1 8.9915 1C6.07913 1 3.72068 3.43066 3.72068 6.43066C3.72068 8.24161 4.5814 9.84671 5.90656 10.8343C5.89804 10.8387 5.88952 10.8409 5.881 10.8453C4.92867 11.2591 4.07434 11.8526 3.33933 12.6102C2.60855 13.36 2.02676 14.2488 1.62642 15.227C1.23252 16.185 1.01993 17.2113 1.00005 18.2511C0.999485 18.2745 1.00347 18.2977 1.01178 18.3195C1.02009 18.3412 1.03256 18.3611 1.04844 18.3778C1.06433 18.3945 1.08331 18.4078 1.10427 18.4169C1.12523 18.426 1.14775 18.4307 1.17049 18.4307H2.44665C2.53826 18.4307 2.61496 18.354 2.61709 18.2599C2.6597 16.5693 3.31802 14.9861 4.4834 13.7861C5.68712 12.5445 7.28925 11.8613 8.99364 11.8613C10.2016 11.8613 11.3606 12.2051 12.3598 12.8489C12.3855 12.8655 12.4149 12.8748 12.4452 12.876C12.4755 12.8771 12.5056 12.8701 12.5324 12.8555ZM8.99364 10.1971C8.01787 10.1971 7.09963 9.80511 6.40723 9.09343C6.06655 8.74418 5.79647 8.3291 5.61255 7.8721C5.42863 7.4151 5.33451 6.92521 5.33559 6.43066C5.33559 5.42555 5.71695 4.47956 6.40723 3.76788C7.0975 3.0562 8.01574 2.66423 8.99364 2.66423C9.97153 2.66423 10.8876 3.0562 11.58 3.76788C11.9207 4.11713 12.1908 4.53221 12.3747 4.98921C12.5586 5.44621 12.6528 5.9361 12.6517 6.43066C12.6517 7.43577 12.2703 8.38175 11.58 9.09343C10.8876 9.80511 9.9694 10.1971 8.99364 10.1971ZM16.8296 15.4088H15.04V13.5693C15.04 13.473 14.9633 13.3942 14.8695 13.3942H13.6764C13.5827 13.3942 13.506 13.473 13.506 13.5693V15.4088H11.7164C11.6227 15.4088 11.546 15.4876 11.546 15.5839V16.8102C11.546 16.9066 11.6227 16.9854 11.7164 16.9854H13.506V18.8248C13.506 18.9212 13.5827 19 13.6764 19H14.8695C14.9633 19 15.04 18.9212 15.04 18.8248V16.9854H16.8296C16.9233 16.9854 17 16.9066 17 16.8102V15.5839C17 15.4876 16.9233 15.4088 16.8296 15.4088Z"
                      fill="#ffffffcc"
                      stroke="#ffffffcc"
                      stroke-width="0.6"
                    />
                  </svg>
                  Clients</router-link
                >
              </li>
              <li>
                <router-link
                  exact-active-class="active"
                  to="/invoice"
                  class="nav-item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    viewBox="0 0 18 20"
                    fill="none"
                  >
                    <path
                      d="M12.5324 12.8555C13.0479 12.5708 13.6381 12.4088 14.2666 12.4088H14.2687C14.3326 12.4088 14.3625 12.3299 14.3156 12.2861C13.662 11.6832 12.9154 11.1963 12.1063 10.8453C12.0978 10.8409 12.0892 10.8387 12.0807 10.8343C13.4037 9.84671 14.2645 8.24161 14.2645 6.43066C14.2645 3.43066 11.9039 1 8.9915 1C6.07913 1 3.72068 3.43066 3.72068 6.43066C3.72068 8.24161 4.5814 9.84671 5.90656 10.8343C5.89804 10.8387 5.88952 10.8409 5.881 10.8453C4.92867 11.2591 4.07434 11.8526 3.33933 12.6102C2.60855 13.36 2.02676 14.2488 1.62642 15.227C1.23252 16.185 1.01993 17.2113 1.00005 18.2511C0.999485 18.2745 1.00347 18.2977 1.01178 18.3195C1.02009 18.3412 1.03256 18.3611 1.04844 18.3778C1.06433 18.3945 1.08331 18.4078 1.10427 18.4169C1.12523 18.426 1.14775 18.4307 1.17049 18.4307H2.44665C2.53826 18.4307 2.61496 18.354 2.61709 18.2599C2.6597 16.5693 3.31802 14.9861 4.4834 13.7861C5.68712 12.5445 7.28925 11.8613 8.99364 11.8613C10.2016 11.8613 11.3606 12.2051 12.3598 12.8489C12.3855 12.8655 12.4149 12.8748 12.4452 12.876C12.4755 12.8771 12.5056 12.8701 12.5324 12.8555ZM8.99364 10.1971C8.01787 10.1971 7.09963 9.80511 6.40723 9.09343C6.06655 8.74418 5.79647 8.3291 5.61255 7.8721C5.42863 7.4151 5.33451 6.92521 5.33559 6.43066C5.33559 5.42555 5.71695 4.47956 6.40723 3.76788C7.0975 3.0562 8.01574 2.66423 8.99364 2.66423C9.97153 2.66423 10.8876 3.0562 11.58 3.76788C11.9207 4.11713 12.1908 4.53221 12.3747 4.98921C12.5586 5.44621 12.6528 5.9361 12.6517 6.43066C12.6517 7.43577 12.2703 8.38175 11.58 9.09343C10.8876 9.80511 9.9694 10.1971 8.99364 10.1971ZM16.8296 15.4088H15.04V13.5693C15.04 13.473 14.9633 13.3942 14.8695 13.3942H13.6764C13.5827 13.3942 13.506 13.473 13.506 13.5693V15.4088H11.7164C11.6227 15.4088 11.546 15.4876 11.546 15.5839V16.8102C11.546 16.9066 11.6227 16.9854 11.7164 16.9854H13.506V18.8248C13.506 18.9212 13.5827 19 13.6764 19H14.8695C14.9633 19 15.04 18.9212 15.04 18.8248V16.9854H16.8296C16.9233 16.9854 17 16.9066 17 16.8102V15.5839C17 15.4876 16.9233 15.4088 16.8296 15.4088Z"
                      fill="#ffffffcc"
                      stroke="#ffffffcc"
                      stroke-width="0.6"
                    />
                  </svg>
                  Invoice</router-link
                >
              </li>
              <li>
                <router-link
                  exact-active-class="active"
                  to="/setting"
                  class="nav-item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    viewBox="0 0 18 20"
                    fill="none"
                  >
                    <path
                      d="M12.5324 12.8555C13.0479 12.5708 13.6381 12.4088 14.2666 12.4088H14.2687C14.3326 12.4088 14.3625 12.3299 14.3156 12.2861C13.662 11.6832 12.9154 11.1963 12.1063 10.8453C12.0978 10.8409 12.0892 10.8387 12.0807 10.8343C13.4037 9.84671 14.2645 8.24161 14.2645 6.43066C14.2645 3.43066 11.9039 1 8.9915 1C6.07913 1 3.72068 3.43066 3.72068 6.43066C3.72068 8.24161 4.5814 9.84671 5.90656 10.8343C5.89804 10.8387 5.88952 10.8409 5.881 10.8453C4.92867 11.2591 4.07434 11.8526 3.33933 12.6102C2.60855 13.36 2.02676 14.2488 1.62642 15.227C1.23252 16.185 1.01993 17.2113 1.00005 18.2511C0.999485 18.2745 1.00347 18.2977 1.01178 18.3195C1.02009 18.3412 1.03256 18.3611 1.04844 18.3778C1.06433 18.3945 1.08331 18.4078 1.10427 18.4169C1.12523 18.426 1.14775 18.4307 1.17049 18.4307H2.44665C2.53826 18.4307 2.61496 18.354 2.61709 18.2599C2.6597 16.5693 3.31802 14.9861 4.4834 13.7861C5.68712 12.5445 7.28925 11.8613 8.99364 11.8613C10.2016 11.8613 11.3606 12.2051 12.3598 12.8489C12.3855 12.8655 12.4149 12.8748 12.4452 12.876C12.4755 12.8771 12.5056 12.8701 12.5324 12.8555ZM8.99364 10.1971C8.01787 10.1971 7.09963 9.80511 6.40723 9.09343C6.06655 8.74418 5.79647 8.3291 5.61255 7.8721C5.42863 7.4151 5.33451 6.92521 5.33559 6.43066C5.33559 5.42555 5.71695 4.47956 6.40723 3.76788C7.0975 3.0562 8.01574 2.66423 8.99364 2.66423C9.97153 2.66423 10.8876 3.0562 11.58 3.76788C11.9207 4.11713 12.1908 4.53221 12.3747 4.98921C12.5586 5.44621 12.6528 5.9361 12.6517 6.43066C12.6517 7.43577 12.2703 8.38175 11.58 9.09343C10.8876 9.80511 9.9694 10.1971 8.99364 10.1971ZM16.8296 15.4088H15.04V13.5693C15.04 13.473 14.9633 13.3942 14.8695 13.3942H13.6764C13.5827 13.3942 13.506 13.473 13.506 13.5693V15.4088H11.7164C11.6227 15.4088 11.546 15.4876 11.546 15.5839V16.8102C11.546 16.9066 11.6227 16.9854 11.7164 16.9854H13.506V18.8248C13.506 18.9212 13.5827 19 13.6764 19H14.8695C14.9633 19 15.04 18.9212 15.04 18.8248V16.9854H16.8296C16.9233 16.9854 17 16.9066 17 16.8102V15.5839C17 15.4876 16.9233 15.4088 16.8296 15.4088Z"
                      fill="#ffffffcc"
                      stroke="#ffffffcc"
                      stroke-width="0.6"
                    />
                  </svg>
                  Settings</router-link
                >
              </li>
            </ul>
            <div class="login-btn">
              <button class="btn" @click.prevent="logout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.79413 16.114V2.7373H10.8677V5.82683C10.8677 6.30597 11.2559 6.69669 11.732 6.69669C12.2089 6.69669 12.5971 6.30597 12.5971 5.82683V3C12.5971 1.89543 11.7017 1 10.5971 1H3.03515C1.93058 1 1.03516 1.89543 1.03516 3V15.8827C1.03516 16.9872 1.93059 17.8827 3.03516 17.8827H10.5971C11.7017 17.8827 12.5971 16.9872 12.5971 15.8827V13.0245C12.5971 12.5445 12.2089 12.1538 11.732 12.1538C11.2559 12.1538 10.8677 12.5445 10.8677 13.0245V16.1132H10.8381L2.79413 16.114Z"
                    fill="#ffffffcc"
                    stroke="#ffffffcc"
                    stroke-width="0.5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.4151 6.66026L17.5264 8.61303H8.27215C7.77529 8.61303 7.37109 8.98686 7.37109 9.44591C7.37109 9.90415 7.77529 10.2788 8.27215 10.2788H17.5879L15.475 12.2323C15.1036 12.5756 15.1036 13.0926 15.475 13.4085C15.8473 13.7526 16.4064 13.7526 16.7475 13.4085L21.0339 9.44591L16.7475 5.48251C16.3684 5.13897 15.7927 5.13897 15.4135 5.48251C15.0405 5.82739 15.0421 6.34432 15.4151 6.66026Z"
                    fill="#ffffffcc"
                    stroke="#ffffffcc"
                    stroke-width="0.5"
                  />
                </svg>
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
                <span class="arrow-ico">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.992"
                    height="8"
                    viewBox="0 0 13.992 8"
                  >
                    <path
                      class="a"
                      d="M13.186,16.835l5.291-5.295a1,1,0,0,1,1.412,0,1.008,1.008,0,0,1,0,1.416l-5.995,6a1,1,0,0,1-1.379.029L6.479,12.961a1,1,0,0,1,1.412-1.416Z"
                      transform="translate(-6.188 -11.246)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </nav>
        <div class="main-wrapeer">
          <router-view></router-view>
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
          // console.log(this.profile);
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
</style>
