<template>
<v-app>
      <v-row >
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
          <tr id="gold" v-for="item in VCB" :key="item.name">
            <td><th>{{ item.name }}</th>{{ item.buytrans }}</td>
            <td>{{ item.buy }}</td>
            <td>{{ item.sell }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-app>
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
         { id: 0, product: "Mua tiền mặt" },
        { id: 1, product: "Mua chuyển khoản" },
        { id: 2, product: "Bán ra" }
      ],
      VCB: [
        {
          name: 'AUD',
          buy: 159000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'CAD',
          buy: 237000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'CHF',
          buy: 262000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'CNY',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        }
        ,
        {
          name: 'DKK',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        }
        ,
        {
          name: 'EUR',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        }
        ,
        {
          name: 'GBP',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        }
        ,
        {
          name: 'HKD',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        }
        ,
        {
          name: 'INR',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        }
        ,
        {
          name: 'JPY',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        }
        ,
        {
          name: 'KRW',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'KRD',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'MYR',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'NOK',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'RUB',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'SAR',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'SEK',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'SGD',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'THB',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        },
        {
          name: 'USD',
          buy: 305000,
          buytrans:159000,
          sell: 160000
        }
      ]
    };
  }
};
</script>
<style lang="scss">
  #img-app{
    margin-left:50px;
  }
  #gold:hover{
    background-color:#59b6dd;
    color:#ffffff;
    th{
       color:#ffffff;
    }
  }
  #gold{
     th{
        color:#59b6dd;
     }
  }
  .icon-app{
    display:flex;
    justify-content: center;
    height:100%;
    align-items: center;
  .icon-btn{
    width:100px;
    height:30px;
    color: #59b6dd;
  }
   .icon-btn:hover{
    color:#000000;
  }
  }
  #hjhj{
     background-color:#59b6dd;
  }
</style>