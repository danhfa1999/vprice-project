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
          >{{ item.name }}</v-tab>
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
            <tr id="gold" v-for="item in listItem" :key="item.currency">
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
// import axios from "axios";
// import TableVCB from '../components/TableVCB.vue'
export default {
  name: "TabRate",
  url_gold: "https://vapi.vnappmob.com/api/request_api_key?scope=exchange_rate",
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
          path: "/exchange/exchange/BIDV",
        },
        {
          name: "SBV",
          path: "/exchange/SBV",
        },
      ],
    };
  },
  // created() {
  //   this.checkData();
  // },
};
</script>
<style lang="scss"></style>
