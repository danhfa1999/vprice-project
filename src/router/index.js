import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TableTCB from '../components/TableTCB.vue'
import TableCTG from '../components/TableCTG.vue'
import TableSTB from '../components/TableSTB.vue'
import TableBIDV from '../components/TableBIDV.vue'
import TableSBV from '../components/TableSBV.vue'
import TableVCB from '../components/TableVCB.vue'
import TableGold from '../components/TableGold.vue'



Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
  }, {
    path: '/VCB',
    component: TableVCB
  }, {
    path: '/TCB',
    component: TableTCB
  }, {
    path: '/CTG',
    component: TableCTG
  }, {
    path: '/STB',
    component: TableSTB
  }, {
    path: '/TableGold',
    component: TableGold
  }

  , {
    path: '/BIDV',
    component: TableBIDV
  }, {
    path: '/SBV',
    component: TableSBV
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router