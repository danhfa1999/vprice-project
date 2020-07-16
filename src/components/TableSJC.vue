<template>
     <v-simple-table>
         <thead>
          <tr>
            <th class="text-left">Sản Phẩm</th>
            <th class="text-left">Mua vào</th>
             <th class="text-left">Bán ra</th>
          </tr>
        </thead>
        <tbody id="shibaa">
          <div> 
          <tr id="product" v-for="item in Gold" :key="item.name">
            <td class ="item-gold" ><span>{{ item.name }}</span></td>
            </tr>
          </div>
          <div> 
          <tr class ="item-gold" v-for="item in buy_item" :key="item">
            <td>{{ item }}</td>
          </tr>
          </div>
          <div> 
          <tr class ="item-gold" v-for="item in sell_item" :key="item">
            <td>{{ item }}</td>
          </tr>
          </div>
        </tbody>
    </v-simple-table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      item_single: null,
      value_item:null,
      buy_item:{},
      sell_item:null,
    Gold: [
    {
      name: 'SJC 1L,10L',
    },
    {
     name: 'SJC 1c',
    },
    {
     name: 'Nhẫn 1c',
    }
    ,
    {
      name: 'Trang sức 99.99',
    }
    ]
    };
  },
  created() {
    this.fetchData();
    this.loadData();
    this.callData();
  },
  methods: {
    fetchData() {
    //   this.loading = true;

      var url_gold = "https://vapi.vnappmob.com/api/request_api_key?scope=gold";
      axios
        .get(url_gold)
        .then(response => {
          this.getDay = response.data.results;
        }).then(()=>{
          var get_url =
        `https://vapi.vnappmob.com/api/v2/gold/sjc?api_key=${this.getDay}`;
      axios
        .get(get_url)
        .then(response => {
          this.item_single = response.data.results[0];
          this.loadData(this.item_single);
        })
        })
    },
    loadData(item){
         item = this.item_single;
          delete item.datetime;
          this.value_item = Object.values(item);
          this.buy_item = this.value_item.slice(0,4);
          this.sell_item = this.value_item.slice(4);
    },
    callData(){
      setTimeout(this.fetchData(),5000);
    }
  }
};
</script>

<style lang="scss">
#shibaa{
  display:flex;
  justify-content: space-around;
}
.item-gold{
  :hover{
    background-color:#59b6dd;
    color:white;
  }
  padding:10px;
}
</style>