<template>
  <v-card height="600" color="#3e94ec">
    <v-row>
      <v-col cols="4" sm="12" md="4">
        <v-card class="text-center mt-2 ml-6" dense rounded elevation="10">
          <v-simple-table md="6" lg="6" xl="6" sm="12" class="table-fill">
            <thead class="content-table">
              <tr>
                <th class="text-center">{{ $t("product") }}</th>
                <th class="text-center">{{ $t("buy") }}</th>
                <th class="text-center">{{ $t("sell") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="branch-list">
                <td>{{ SJC[0] }}</td>
                <td>{{ formatPrice(item_SJC.buy_1c) }}</td>
                <td>{{ formatPrice(item_SJC.sell_1l) }}</td>
              </tr>
              <tr class="branch-list">
                <td>{{ SJC[1] }}</td>
                <td>{{ formatPrice(item_SJC.buy_1l) }}</td>
                <td>{{ formatPrice(item_SJC.sell_1c) }}</td>
              </tr>
              <tr class="branch-list">
                <td>{{ SJC[2] }}</td>
                <td>{{ formatPrice(item_SJC.buy_nhan1c) }}</td>
                <td>{{ formatPrice(item_SJC.sell_nhan1c) }}</td>
              </tr>
              <tr class="branch-list">
                <td>{{ SJC[3] }}</td>
                <td>{{ formatPrice(item_SJC.buy_trangsuc49) }}</td>
                <td>{{ formatPrice(item_SJC.sell_trangsuc49) }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="4" sm="12" md="4">
        <v-card class="text-center mt-2" rounded elevation="10">
          <v-simple-table md="6" lg="6" xl="6" class="table-fill">
            <thead class="content-table">
              <tr>
                <th class="text-center">{{ $t("product") }}</th>
                <th class="text-center">{{ $t("buy") }}</th>
                <th class="text-center">{{ $t("sell") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="branch-list">
                <td>{{ DOJI[0] }}</td>
                <td>{{ formatPrice(item_DOJI.buy_hcm) }}</td>
                <td>{{ formatPrice(item_DOJI.sell_hcm) }}</td>
              </tr>
              <tr class="branch-list">
                <td>{{ DOJI[1] }}</td>
                <td>{{ formatPrice(item_DOJI.buy_hn) }}</td>
                <td>{{ formatPrice(item_DOJI.sell_hn) }}</td>
              </tr>
              <tr class="branch-list">
                <td>{{ DOJI[2] }}</td>
                <td>{{ formatPrice(item_DOJI.buy_dn) }}</td>
                <td>{{ formatPrice(item_DOJI.sell_dn) }}</td>
              </tr>
              <tr class="branch-list">
                <td>{{ DOJI[3] }}</td>
                <td>{{ formatPrice(item_DOJI.buy_ct) }}</td>
                <td>{{ formatPrice(item_DOJI.sell_ct) }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="4" sm="12" md="4">
        <v-card class="text-center mt-2 mr-6" rounded elevation="10">
          <v-simple-table md="6" lg="6" xl="6" class="table-fill">
            <thead class="content-table">
              <tr>
                <th class="text-center">{{ $t("product") }}</th>
                <th class="text-center">{{ $t("buy") }}</th>
                <th class="text-center">{{ $t("sell") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="branch-list">
                <td>{{ PNJ[0] }}</td>
                <td>{{ formatPrice(item_PNJ.buy_nhan_24k) }}</td>
                <td>{{ formatPrice(item_PNJ.sell_nhan_24k) }}</td>
              </tr>
              <tr class="branch-list">
                <td>{{ PNJ[1] }}</td>
                <td>{{ formatPrice(item_PNJ.buy_nt_24k) }}</td>
                <td>{{ formatPrice(item_PNJ.sell_nt_24k) }}</td>
              </tr>
              <tr class="branch-list">
                <td>{{ PNJ[2] }}</td>
                <td>{{ formatPrice(item_PNJ.buy_nt_18k) }}</td>
                <td>{{ formatPrice(item_PNJ.sell_nt_18k) }}</td>
              </tr>
              <tr class="branch-list">
                <td>{{ PNJ[3] }}</td>
                <td>{{ formatPrice(item_PNJ.buy_nt_14k) }}</td>
                <td>{{ formatPrice(item_PNJ.sell_nt_14k) }}</td>
              </tr>
              <tr class="branch-list">
                <td>{{ PNJ[4] }}</td>
                <td>{{ formatPrice(item_PNJ.buy_nt_10k) }}</td>
                <td>{{ formatPrice(item_PNJ.sell_nt_10k) }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  name: "TableSJC",
  components: {},
  data() {
    return {
      item_SJC: null,
      item_DOJI: null,
      item_PNJ: null,
      sell_item: null,
      getDay: null,
      url_gold: null,
      tab: null,
      items: ["SJC", "DOJI", "PNJ"],
      SJC: ["SJC 1L,10L", "SJC 1c", "Nhẫn 1c", "Trang sức"],
      DOJI: ["TPHCM", "Hà Nội", "Đà Nẵng", "Cần Thơ"],
      PNJ: [
        "Nhẫn PNJ(24K)",
        "Nữ Trang 24k",
        "Nữ Trang 18k",
        "Nữ Trang 14k",
        "Nữ Trang 10k",
      ],
      labels: ["Mon", "Tues", "Wed", "Fri", "Thu", "Sat", "Sun", "Mon"],
      width: 2,
      radius: 20,
      padding: 5,
      lineCap: "round",
      gradient: gradients[3],
      value: [0, 20000, 50000, 17, 2, 10, 3, 5],
      gradientDirection: "bottom",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false,
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  mounted: function () {
    this.url_gold = localStorage.getItem("api_gold");
    var get_sjc = `https://vapi.vnappmob.com/api/v2/gold/sjc?api_key=${this.url_gold}`;
    var get_doji = `https://vapi.vnappmob.com/api/v2/gold/doji?api_key=${this.url_gold}`;
    var get_pnj = `https://vapi.vnappmob.com/api/v2/gold/pnj?api_key=${this.url_gold}`;
    const requestOne = axios.get(get_sjc);
    const requestTwo = axios.get(get_doji);
    const requestThree = axios.get(get_pnj);
    axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          this.item_SJC = responses[0].data.results[0];
          this.item_DOJI = responses[1].data.results[0];
          this.item_PNJ = responses[2].data.results[0];
        })
      )
      .catch((err) => {
        console.log(err);
        localStorage.clear();
      });
  },
};
</script>

<style lang="scss" scoped>
#calendar {
  position: relative;
  bottom: 200px;
}
.text-center {
  color: #f5f5f5 !important;
  height: 5rem !important;
  font-weight: 700;
}
#shibaa {
  display: flex;
  justify-content: space-around;
}
.item-gold {
  :hover {
    background-color: #59b6dd;
    color: white;
  }
  padding: 10px;
}

.content-table {
  font-size: 24px;
  height: 6rem !important;
}
.table-fill {
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  height: 330px;
  max-width: 600px;
  padding: -10px;
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
