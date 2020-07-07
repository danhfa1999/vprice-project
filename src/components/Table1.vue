<template>
<v-app>
      <v-row >
        <v-col cols="9" >
    <v-tabs v-model="activeTab" grow>
      <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.product }}
      </v-tab>
      <v-tab-item v-for="tab in tabs" :key="tab.id" :value="tab.route">
      </v-tab-item>
    </v-tabs>
    <v-app >
    <v-simple-table height="600px">
      <template v-slot:default>
        <tbody>
          <tr id="gold" v-for="item in Gold" :key="item.name">
            <td><h3>{{ item.name }}</h3></td>
            <td>{{ item.buy }}</td>
            <td>{{ item.sell }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-app>
        </v-col>
        <v-col  cols="3">
             <v-img id="img-app"
            src="../assets/Mobile.png"
          transition="scale-transition"
           max-width="250"
          ><div class="icon-app">
               <a 
          href="https://apps.apple.com/app/id1477505685"
          target="_blank"
        >
              <v-btn
              class="icon-btn"
      >
        <v-icon>fab fa-android</v-icon>
      </v-btn>
               </a>
                <a 
          href="https://play.google.com/store/apps/details?id=com.vnappmob.vprice&hl=vi"
          target="_blank"
        >
        <v-btn
        class="icon-btn"
      >
        <v-icon>fab fa-apple</v-icon>
      </v-btn>
                </a>
            </div></v-img>
        </v-col>
      </v-row>
</v-app>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
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
<style lang="scss">
  $color:#59b6dd;
  #img-app{
    margin-left:50px;
  }
  #gold:hover{
    background-color:$color;
    color:#ffffff;
  }
  .icon-app{
    display:flex;
    justify-content: center;
    height:100%;
    align-items: center;
    a{
      text-decoration: none;
    }
  .icon-btn{
    width:100px;
      color: #59b6dd;
      height:30px;
  }
   .icon-btn:hover{
    color:#000000;
  }
  }
</style>