<template>
<v-app>
      <v-row>
        <v-col cols="9" >
    <v-tabs v-model="activeTab" grow>
      <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.product }}
      </v-tab>
      <v-tab-item v-for="tab in tabs" :key="tab.id" :value="tab.route">
      </v-tab-item>
    </v-tabs>
    <v-app id="gold">
    <v-simple-table height="500px">
      <template v-slot:default>
        <tbody >
          <tr v-for="item in Gold" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.buy }}</td>
            <td>{{ item.sell }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-app>
        </v-col>
        <v-col cols="3">
             <v-img
             mt-2
            src="../assets/Mobile.png"
          transition="scale-transition"
           max-width="250"
          ></v-img>
        </v-col>
      </v-row>
</v-app>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      activeTab: `/user/${this.id}`,
      tabs: [
         { id: 0, product: "Product" },
        { id: 1, product: "Buy" },
        { id: 2, product: "Sell" }
      ],
      Gold: [
        {
          name: 'SJC 1L,10L',
          buy: 159000,
          sell: 160000
        },
        {
          name: 'SJC 1c',
          buy: 237000,
          sell: 160000
        },
        {
          name: 'Nhẫn 1c',
          buy: 262000,
          sell: 160000
        },
        {
          name: 'Trang sức 99.99',
          buy: 305000,
          sell: 160000
        }
      ]
    };
  }
};
</script>
