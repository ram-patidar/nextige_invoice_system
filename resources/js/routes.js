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
        name: 'Setting',
        path: '/Setting',
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
        name: 'Clientview',
        path: '/Clientview/:id/:name/view',
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
        name: 'ClientList',
        path: '/Client',
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
        name: 'ClientEdit',
        path: '/Client/:id/edit',
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
        name: 'ClientAdd',
        path: '/Client/add',
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
        name: 'InvoiceList',
        path: '/Invoice',
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
        name: 'InvoiceEdit',
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
        name: 'InvoiceAdd',
        path: '/Invoice/add',
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
        name: 'Generate_invoice',
        path: '/Generate_invoice/:id',
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
