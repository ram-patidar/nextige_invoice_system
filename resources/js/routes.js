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
        component: Register
    },
    {
        name: 'dashboard',
        path: '/dashboard',
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
        path: '/Invoice/:id/edit',
        component: InvoiceEdit,
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
