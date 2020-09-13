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
  path: '/exchange/VCB',
  component: TableVCB
}, {
  path: '/exchange/TCB',
  component: TableTCB
}, {
  path: '/exchange/CTG',
  component: TableCTG
}, {
  path: '/exchange/STB',
  component: TableSTB
}, {
  path: '/gold/TableGold',
  component: TableGold
}, {
  path: '/exchange/BIDV',
  component: TableBIDV
}, {
  path: '/exchange/SBV',
  component: TableSBV
}]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router