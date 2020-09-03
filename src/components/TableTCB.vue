<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-card elevation="8">
        <v-tabs v-model="tab" background-color="#607D8B" dark grow>
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            v-for="item in items"
            link
            :to="item.path"
            class="text--black"
            :key="item.name"
            >{{ item.name }}</v-tab
          >
        </v-tabs>
      </v-card>
      <v-card class="text-center" elevation="10" dark>
        <v-simple-table>
          <thead>
            <tr class="content-table">
              <th class="text-center">{{ $t("currency") }}</th>
              <th class="text-center">{{ $t("buy") }}</th>
              <th class="text-center">{{ $t("buytrans") }}</th>
              <th class="text-center">{{ $t("selltele") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr id="gold" v-for="item in item_rate" :key="item">
              <td class="product">{{ item.currency }}</td>
              <td>{{ formatPrice(item.buy_cash) }}</td>
              <td>{{ formatPrice(item.buy_transfer) }}</td>
              <td>{{ formatPrice(item.sell) }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
// import TableVCB from '../components/TableVCB.vue'
export default {
  name: "TabRate",
  //  url_gold :  "https://vapi.vnappmob.com/api/request_api_key?scope=exchange_rate",
  components: {
    // TableVCB
  },
  data() {
    return {
      item_rate: null,
      url_rate: null,
      getDay: null,
      items: [
        {
          name: "VCB",
          path: "/VCB",
        },
        {
          name: "CTG",
          path: "/CTG",
        },
        {
          name: "TCB",
          path: "/TCB",
        },
        {
          name: "STB",
          path: "/STB",
        },
        {
          name: "BIDV",
          path: "/BIDV",
        },
        {
          name: "SBV",
          path: "/SBV",
        },
      ],
    };
  },
  created() {
    this.checkData();
  },
  methods: {
    callData: function() {
      this.url_rate = localStorage.getItem("api_rate");
      var get_url = `https://vapi.vnappmob.com/api/v2/exchange_rate/tcb?api_key=${this.url_rate}`;
      axios.get(get_url).then((response) => {
        this.item_rate = response.data.results;
      });
    },
    checkData: function() {
      this.callData();
      setTimeout(this.checkData, 600000);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
<style lang="scss">
#img-app {
  margin-left: 50px;
}
#gold:hover {
  background-color: #00bfa5;
  color: #ffffff;
  th {
    color: #ffffff;
  }
}
#gold {
  th {
    color: #00bfa5;
  }
}
.icon-app {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  .icon-btn {
    width: 100px;
    height: 30px;
    color: #00bfa5;
  }
  .icon-btn:hover {
    color: #000000;
  }
}
#hjhj {
  background-color: #00bfa5;
}
</style>
