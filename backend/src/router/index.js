import { createRouter, createWebHistory } from "vue-router"
import AppLayout from '../components/AppLayout.vue'
import Dashboard from "../views/Dashboard.vue"
import Login from "../views/Login.vue"
import RequestPassword from "../views/RequestPassword.vue"
import ResetPassword from "../views/ResetPassword.vue"
import store from "../store";
//import Login from "../views/.vue"

const routes=[

    {
        path: '/',
        redirect: '/app'
      },
      {
        path: '/app',
        name: 'app',
        redirect: '/app/dashboard',
        component: AppLayout,
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: 'dashboard',
            name: 'app.dashboard',
            component: Dashboard
          }]
        },

    


 
    {

        path:'/login',
        name:'login',
        component:Login
    },
    {

        path:'/request-password',
        name:'request-password',
        component:RequestPassword

    },
     {

         path:'/reset-password',
         name:'reset-password',   
         component:ResetPassword      
        },
  
];


const router= createRouter({

    history:createWebHistory(),
    routes    
})


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
      next({name: 'login'})
    } else if (to.meta.requiresGuest && store.state.user.token) {
      next({name: 'app.dashboard'})
    } else {
      next();
    }
  
  })
  
export default router;