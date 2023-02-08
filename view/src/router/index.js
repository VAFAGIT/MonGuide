import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'

// // import AddRes from '@/components/Reservation/AddRes.vue'
// // import UpdateRes from '@/components/Reservation/UpdateRes.vue'

// import AddActiv from '@/components/Voyage/AddActiv.vue'
// import UpdateActiv from '@/components/Voyage/UpdateActiv.vue'

// import AddVoy from '@/components/Voyage/AddVoy.vue'
// import UpdateVoy from '@/components/Voyage/UpdateVoy.vue'

import store from '@/store'


// import Offers from '@/views/OffersPAge.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('@/views/HomeView.vue'),
  },

  {
    path: '/Login',
    name: 'Login',
    component:() => import('@/views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import ('@/views/Register.vue')

  },
  {
    path : '/dashboardadmin',
    name:'dashboardadmin',
    meta:{auth:true,admin:true},
    component:() => import ('@/views/Admin/Dashboardadmin.vue')
  },
  {
    path : '/dashboard',
    name:'dashboard',
    meta:{auth:true,admin:false},
    component:() => import ('@/views/user/Dashboarduser.vue')
  },
  {
    path : '/activitesad/:id',
    name:'activitesad',
    meta:{auth:true,admin:true},
    component:() => import ('@/views/Admin/Activitesad.vue')
  },
  {
    path : '/activites/:id',
    name:'activites',
    meta:{auth:true,admin:false},
    component:() => import ('@/views/user/Activitesuser.vue')
  },
  {
    path : '/add-trip',
    name:'AddVoy',
    meta:{auth:true,admin:true},
    component:() => import ('@/components/Voyage/AddVoy.vue')
  },
  {
    path : '/Review',
    name:'Review',
    meta:{auth:true,admin:false},
    component:() => import ('@/components/Review.vue')
  },
  {
    path : '/Allreview',
    name:'Allreview',
    meta:{auth:true,admin:false},
    component:() => import ('@/views/voyage/Allreview.vue')
  },
  {
    path : '/my-reservation',
    name:'my-reservation',
    meta:{auth:true,admin:false},
    component:() => import ('@/components/Reservation/MyRes.vue')
  },
  {
    path : '/all-reservation',
    name:'all-reservation',
    meta:{auth:true,admin:true},
    component:() => import ('@/components/Reservation/AllRes.vue')
  },
  {
    path : '/all-review',
    name:'all-review',
    meta:{auth:true,admin:true},
    component:() => import ('@/views/voyage/Allreview.vue')
  },
  {
    path : '/update-trip/:id',
    name:'updateVoy',
    meta:{auth:true,admin:true},
    component:() => import ('@/components/Voyage/UpdateVoy.vue')
  },
  {
    path : '/add-activites/:id',
    name:'addactiv',
    meta:{auth:true,admin:true},
    component:() => import ('@/components/Voyage/AddActiv.vue')
  },
  {
    path : '/update-Activite/:id',
    name:'updateActv',
    meta:{auth:true,admin:true},
    component:() => import ('@/components/Voyage/UpdateActiv.vue')
  },
  {
    path : '/delete-Activite/:id',
    name:'deleteActiv',
    meta:{auth:true,admin:true},
    component:() => import ('@/components/Voyage/UpdateActiv.vue')
  },
  {
    path : '/:pathMatch(.*)*',
    name:'404',
    component:() => import ('@/components/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  
  if(!to.meta?.auth){
    console.log(to.meta?.requiresAuth);
    next();return;
  }

  if (!localStorage.getItem('authIsReady') && to.name != 'Login') {
    store.commit('authIsReady',false);
    next({name:'Login'});return;
  }

  

  if(store.state.authIsReady){
    if(to.meta.admin && !store.getters.isAdmin){
      router.push('/dashboard');
    }else next();
  }

  

  next();
})


export default router
