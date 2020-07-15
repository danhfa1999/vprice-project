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
        <thead>
          <tr>
            <th class="text-left">Mua tiền mặt</th>
            <th class="text-left">Mua chuyển khoản</th>
             <th class="text-left">Bán ra</th>
          </tr>
        </thead>
        <tbody>
          <tr id="gold" v-for="item in item_rate" :key="item">
            <td><th>{{ item.currency }}</th>{{ item.buy_cash }}</td>
            <td>{{ item.buy_transfer }}</td>
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
import axios from "axios";
export default {
  props: ["id"],
  
  data() {
    return {
        activeTab: `/user/${this.id}`,
      tabs: [
        { id: 1, name: "TableSJC", route: `/user/${this.id}` },
        { id: 2, name: "TableDOJI", route: `/user/${this.id}/doji` },
        { id: 3, name: "TablePNJ", route: `/user/${this.id}/pnj` }
      ],
    //   loading: false,
    //   items: null,
      item_rate: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var get_url =
        "https://vapi.vnappmob.com/api/v2/exchange_rate/vcb?api_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTYwNDA3MTgsImlhdCI6MTU5NDc0NDcxOCwic2NvcGUiOiJleGNoYW5nZV9yYXRlIiwicGVybWlzc2lvbiI6MH0.TivfTflqaPuRgB10ntWVuwTcMzlVheZ5IMAigHObv-8";
      
      axios
        .get(get_url)
        .then(response => {
          this.item_rate = response.data.results;
          console.log(this.item_rate);
        })
        .catch(err => {
        //   this.loading = false;
          console.log(err);
        });
    },
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