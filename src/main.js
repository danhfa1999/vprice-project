import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from "axios";
Vue.config.productionTip = false
const api_gold = "https://vapi.vnappmob.com/api/request_api_key?scope=gold";
const api_rate = "https://vapi.vnappmob.com/api/request_api_key?scope=exchange_rate";
(async function () {
  if (localStorage.getItem("api_gold") === null) {
    const getGold = await axios
      .get(api_gold)
      .then((response) => {
        return response.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
    const getRate = await axios
      .get(api_rate)
      .then((response) => {
        return response.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.setItem("api_gold", getGold);
    localStorage.setItem("api_rate", getRate);
  } else {
    localStorage.getItem("api_rate");
  }
  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})();