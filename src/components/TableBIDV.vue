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
            <tr id="gold" v-for="item in listItem" :key="item">
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
export default {
  name: "TableBIDV",
  components: {
    // TableVCB
  },
  data() {
    return {
      item_rate: null,
      url_rate: null,
      getDay: null,
      items: this.$store.state.items,
    };
  },
  computed: {
    listItem() {
      return this.$store.state.listBank[0].bidv;
    },
  },

  methods: {
    // callData: function() {
    //   this.url_rate = localStorage.getItem("api_rate");
    //   var get_url = `https://vapi.vnappmob.com/api/v2/exchange_rate/bid?api_key=${this.url_rate}`;
    //   axios.get(get_url).then((response) => {
    //     this.item_rate = response.data.results;
    //   });
    // },
    // checkData: function() {
    //   this.callData();
    //   setTimeout(this.checkData, 600000);
    // },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
<style lang="scss"></style>
