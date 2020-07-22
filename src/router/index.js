import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TableVCB from '../components/TableVCB.vue'



Vue.use(VueRouter)

  const routes = [{
    path: '/',
    component: Home
  }
    ,{    path: '/VCB',
    component: TableVCB
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
