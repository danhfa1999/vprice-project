import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        products: [],
        items: [{
                name: "VCB",
                path: "/exchange/VCB",
            },
            {
                name: "CTG",
                path: "/exchange/CTG",
            },
            {
                name: "TCB",
                path: "/exchange/TCB",
            },
            {
                name: "STB",
                path: "/exchange/STB",
            },
            {
                name: "BIDV",
                path: "/exchange/BIDV",
            },
            {
                name: "SBV",
                path: "/exchange/SBV",
            },
        ],
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        }
    },
    actions: {
        getProducts({
            commit
        }, type) {
            let api = localStorage.getItem("api_rate");
            return axios.get(`https://vapi.vnappmob.com/api/v2/exchange_rate/${type}?api_key=${api}`)
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
        },
        getCountry: (state) => {
            return state.products.products.filter(e => e.currency).map(element => element.currency);
        },
        findValue: (state) => (value) => {
            return state.products.products.find(e => e.currency === value).buy_cash;
        }
    }
})