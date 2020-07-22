<template>
   <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Mua tiền mặt</th>
            <th class="text-left">Mua chuyển khoản</th>
             <th class="text-left">Bán ra</th>
          </tr>
        </thead>
        <tbody>
          <tr id ="gold" v-for="item in item_rate" :key="item">
            <td><th>{{ item.currency }}</th>{{ item.buy_cash }}</td>
            <td>{{ item.buy_transfer }}</td>
            <td>{{ item.sell }}</td>
          </tr>
        </tbody>
   </v-simple-table>
</template>
<script>
import axios from "axios";
export default {
  name:"TableSBV",
  data() {
    return {
      item_rate: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var url_gold = "https://vapi.vnappmob.com/api/request_api_key?scope=exchange_rate";
      axios
        .get(url_gold)
        .then(response => {
          this.getDay = response.data.results;
        }).then(()=>{
          var get_url =
        `https://vapi.vnappmob.com/api/v2/exchange_rate/vcb?api_key=${this.getDay}`;
      axios
        .get(get_url)
        .then(response => {
          this.item_rate = response.data.results; 
        })
        .catch(err => {
        //   this.loading = false;
          console.log(err);
        });
        })
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