import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        listBank: [],
        loading: false,
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
        SET_PRODUCTS(state, vcb, tcb, bidv, sbv, stb, ctg) {
            state.listBank = [vcb, tcb, bidv, sbv, stb, ctg];
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        }
    },
    actions: {
        getProducts({
            commit
        }) {
            commit("SET_LOADING", true);
            let api = localStorage.getItem("api_rate");
            const vcb = `https://vapi.vnappmob.com/api/v2/exchange_rate/vcb?api_key=${api}`;
            const tcb = `https://vapi.vnappmob.com/api/v2/exchange_rate/tcb?api_key=${api}`;
            const bidv = `https://vapi.vnappmob.com/api/v2/exchange_rate/bid?api_key=${api}`;
            const sbv = `https://vapi.vnappmob.com/api/v2/exchange_rate/sbv?api_key=${api}`;
            const stb = `https://vapi.vnappmob.com/api/v2/exchange_rate/stb?api_key=${api}`;
            const ctg = `https://vapi.vnappmob.com/api/v2/exchange_rate/ctg?api_key=${api}`;
            const requestOne = axios.get(vcb);
            const requestTwo = axios.get(tcb);
            const requestThree = axios.get(bidv);
            const requestFour = axios.get(sbv);
            const requestFive = axios.get(stb);
            const requestSix = axios.get(ctg);
            return axios
                .all([
                    requestOne,
                    requestTwo,
                    requestThree,
                    requestFour,
                    requestFive,
                    requestSix,
                ])
                .then(
                    axios.spread((...responses) => {
                        let vcb = responses[0].data.results;
                        let tcb = responses[1].data.results;
                        let bidv = responses[2].data.results;
                        let sbv = responses[3].data.results;
                        let stb = responses[4].data.results;
                        let ctg = responses[5].data.results;
                        commit("SET_PRODUCTS", {
                            vcb,
                            tcb,
                            bidv,
                            sbv,
                            stb,
                            ctg,
                        });
                        commit("SET_LOADING", false);
                    })
                );
        },
    },
    getters: {
        filterName: (state) => (name) => {
            console.log(state.listBank[0]);
            return state.listBank[0].bidv.find((e) => e.currency === name).sell;
        },
        getCountry: (state) => {
            return state.listBank[0]
                .filter((e) => e.currency)
                .map((element) => element.currency);
        },
        findValue: (state) => (value) => {
            return state.listBank[0].bidv.find((e) => e.currency === value).buy_cash;
        },
    },
});