require('./bootstrap');
import vue from 'vue'
window.Vue = vue;
Vue.component('Login-component', require('../components/Login.vue'));
Vue.component('Register-component', require('../components/Register.vue'));
Vue.component('Dashboard-component', require('../components/Dashboard.vue'));
Vue.component('App-component', require('../components/App.vue'));

import App from '../components/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
import VueSweetalert2 from 'vue-sweetalert2';
import VueBodyClass from 'vue-body-class';
import swal from 'sweetalert2';
import VueCookies from 'vue-cookies';

import { BPagination } from 'bootstrap-vue'
Vue.component('b-pagination', BPagination);

import VueBreadcrumbs from 'vue-2-breadcrumbs';
Vue.use(VueBreadcrumbs, {
    template:
      '        <nav v-if="$breadcrumbs.length" aria-label="breadcrumb">\n' +
      '            <ol class="">\n' +
      '                <li v-for="(crumb, key) in $breadcrumbs" v-if="crumb.meta.breadcrumb" :key="key" class="breadcrumb-item active" aria-current="page">\n' +
      '                    <router-link :to="{ path: getBreadcrumb(crumb.meta.breadcrumb.path) }"> {{ getBreadcrumb(crumb.meta.breadcrumb.parent) }} </router-link>  ' +'<router-link :to="{ path: getBreadcrumb(crumb.meta.breadcrumb.child_path) }"> {{ getBreadcrumb(crumb.meta.breadcrumb.child) }} </router-link>  ' +' {{ getBreadcrumb(crumb.meta.breadcrumb) }}'+
      '                </li>\n' +
      '            </ol>\n' +
      '        </nav>'
  });

Vue.use(VueCookies)
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: "active",
});

const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});



