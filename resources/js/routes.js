const Login = () => import('../components/Login.vue')
const Register = () => import('../components/Register.vue' )
const Setting = () => import('../components/Setting.vue' )
const Dashboard = () => import('../components/Dashboard.vue' )
const ClientList = () => import('../components/Client/List.vue')
const Clientview = () => import('../components/Client/View.vue')
const ClientCreate = () => import('../components/Client/Add.vue')
const ClientEdit = () => import('../components/Client/Edit.vue')
const InvoiceList = () => import('../components/Invoice/List.vue')
const InvoiceCreate = () => import('../components/Invoice/Add.vue')
const InvoiceEdit = () => import('../components/Invoice/Edit.vue')
const Generate_invoice = () => import('../components/Client/Generate_invoice.vue')


export const routes = [
    {
        name: 'login',
        path: '/',
        component: Login,
        meta: { bodyClass: 'login' },
        beforeEnter: (to, from, next) =>{
            if(!localStorage.getItem('token')){
                return next();
            }else{
                next('/dashboard');
            }
        }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: { bodyClass: 'login' },
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        meta: {
            breadcrumb: 'Dashboard',
          },
        component: Dashboard,
        beforeEnter: (to, from, next) =>{
            if(localStorage.getItem('token')){
                return next();
            }else{
                next('/');
            }
        }
    },
    {
        name: 'setting',
        path: '/setting',
        meta: {
            label: 'Setting',
            parent: 'Dashboard ❯',
            path: '/dashboard',
          },
        component: Setting,
        beforeEnter: (to, from, next) =>{
            if(localStorage.getItem('token')){
                return next();
            }else{
                next('/');
            }
        }
    },
    {
        name: 'clientview',
        path: '/clientview/:id/:name/view',
        component: Clientview,
        beforeEnter: (to, from, next) =>{
            if(localStorage.getItem('token')){
                return next();
            }else{
                next('/');
            }
        }
    },
    {
        name: 'clientlist',
        path: '/client',
        component: ClientList,
        meta: {
            breadcrumb: {
                label: 'Clients',
                parent: 'Dashboard ❯',
                path: '/dashboard',
              }
          },
        beforeEnter: (to, from, next) =>{
            if(localStorage.getItem('token')){
                return next();
            }else{
                next('/');
            }
        }
    },
    {
        name: 'clientedit',
        path: '/client/:id/edit',
        component: ClientEdit,
        meta: {
            breadcrumb: {
                label: 'Client edit',
                parent: 'Dashboard ❯',
                path: '/dashboard',
                child: 'Clients ❯',
                child_path: '/client',
              }
          },
        beforeEnter: (to, from, next) =>{
            if(localStorage.getItem('token')){
                return next();
            }else{
                next('/');
            }
        }
    },
    {
        name: 'clientadd',
        path: '/client/add',
        meta: {
            breadcrumb: {
                label: 'Add client',
                parent: 'Dashboard ❯',
                path: '/dashboard',
                child: 'Clients ❯',
                child_path: '/client',
              }
          },
        component: ClientCreate,
        beforeEnter: (to, from, next) =>{
            if(localStorage.getItem('token')){
                return next();
            }else{
                next('/');
            }
        }
    },
    {
        name: 'invoicelist',
        path: '/invoice',
        component: InvoiceList,
        meta: {
            breadcrumb: {
                label: 'Invoice',
                parent: 'Dashboard ❯',
                path: '/dashboard',
              }
          },
        beforeEnter: (to, from, next) =>{
            if(localStorage.getItem('token')){
                return next();
            }else{
                next('/');
            }
        }
    },
    {
        name: 'invoiceedit',
        path: '/invoice/:id/edit',
        component: InvoiceEdit,
        meta: {
            breadcrumb: {
                label: 'Invoice edit',
                parent: 'Dashboard ❯',
                path: '/dashboard',
                child: 'Invoice ❯',
                child_path: '/invoice',
              }
          },
        beforeEnter: (to, from, next) =>{
            if(localStorage.getItem('token')){
                return next();
            }else{
                next('/');
            }
        }
    },
    {
        name: 'invoiceadd',
        path: '/invoice/add',
        component: InvoiceCreate,
        meta: {
            breadcrumb: {
                label: 'Add Invoice',
                parent: 'Dashboard ❯',
                path: '/dashboard',
                child: 'Invoice ❯',
                child_path: '/invoice',
              }
          },
        beforeEnter: (to, from, next) =>{
            if(localStorage.getItem('token')){
                return next();
            }else{
                next('/');
            }
        }
    },
    {
        name: 'generate_invoice',
        path: '/generate_invoice/:id',
        component: Generate_invoice,
        beforeEnter: (to, from, next) =>{
            if(localStorage.getItem('token')){
                return next();
            }else{
                next('/');
            }
        }
    }
    
]
