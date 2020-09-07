import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        }
    },
    actions: {
        async getProducts({
            commit
        }, type) {
            return await axios.get(`https://vapi.vnappmob.com/api/v2/exchange_rate/${type}?api_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDA0NTkwMDUsImlhdCI6MTU5OTE2MzAwNSwic2NvcGUiOiJleGNoYW5nZV9yYXRlIiwicGVybWlzc2lvbiI6MH0.eEGmeep0bEUl4nuHDmU-PsPiOc2TzD8D65NeMD69Fz4`)
                .then(res => {
                    let products = res.data.results;
                    commit('SET_PRODUCTS', {
                        products,
                        type
                    })
                }).catch(err => {
                    console.log(err);
                })
        },
    }
})