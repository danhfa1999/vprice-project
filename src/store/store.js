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
            let api = localStorage.getItem("api_rate");
            return await axios.get(`https://vapi.vnappmob.com/api/v2/exchange_rate/${type}?api_key=${api}`)
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
    },
    getters: {
        filterName: (state) => (name) => {
            return state.products.products.find(e => e.currency === name).sell;
        }
    }
})