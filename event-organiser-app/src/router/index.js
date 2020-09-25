import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//imported new View
import DashBoard from '../views/Dashboard.vue'
import Login from '../components/Login'
import Settings from '../views/Settings.vue'
import NewEvent from '../components/NewEvent.vue'
import ViewEvent from '@/components/ViewEvent.vue'
import NewAnnoucement from '@/components/NewAnnoucement.vue'
import { auth } from '../utils/firebase'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashBoard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
   {
     path: '/settings',
     name: 'settings',
     component: Settings,
     meta: {
       requiresAuth: true
     }
   },
   {
     path: '/newEvent', 
     name: 'newEvent',
     component: NewEvent,
     meta: {
       requiresAuth: true
     }
   },
   {
     path: '/viewEvent',
     name: 'viewEvent',
     component: ViewEvent,
     meta: {
       requiresAuth: true
     }
   },
   {
    path: '/newAnnoucement',
    name: 'newAnnoucement',
    component: NewAnnoucement,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to , from , next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if(requiresAuth && !auth.currentUser){
    next('/about')
  } else {
    next()
  }
})

export default router
