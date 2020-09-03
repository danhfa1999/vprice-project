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

export default {
  name: "TableSBV",
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
      var get_url = `https://vapi.vnappmob.com/api/v2/exchange_rate/vcb?api_key=${this.url_rate}`;
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
.content-table {
  font-size: 24px !important;
  height: 5rem !important;
}
.table-fill {
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}

th {
  color: #d5dde5;
  background: #1b1e24;
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size: 23px;
  font-weight: 100;
  padding: 24px;
  text-align: left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
}

th:first-child {
  border-top-left-radius: 3px;
}

th:last-child {
  border-top-right-radius: 3px;
  border-right: none;
}

tr {
  border-top: 1px solid #c1c3d1;
  border-bottom: 1px solid #c1c3d1;
  color: #666b85;
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}

tr:hover td {
  background: #4e5066;
  color: #ffffff;
  border-top: 1px solid #22262e;
}

tr:first-child {
  border-top: none;
}

tr:last-child {
  border-bottom: none;
}

tr:nth-child(odd) td {
  background: #ebebeb;
}

tr:nth-child(odd):hover td {
  background: #4e5066;
}

tr:last-child td:first-child {
  border-bottom-left-radius: 3px;
}

tr:last-child td:last-child {
  border-bottom-right-radius: 3px;
}

td {
  background: #ffffff;
  padding: 20px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #c1c3d1;
}

td:last-child {
  border-right: 0px;
}

th.text-left {
  text-align: left;
}

th.text-center {
  text-align: center;
}

th.text-right {
  text-align: right;
}

td.text-left {
  text-align: left;
}

td.text-center {
  text-align: center;
}

td.text-right {
  text-align: right;
}
</style>
