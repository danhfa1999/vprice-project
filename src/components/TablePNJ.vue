<template>
     <v-simple-table>
      <template>
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
            <td><span>{{ item.name }}</span></td>
            </tr>
          </div>
          <div> 
          <tr v-for="item in buy_item" :key="item">
            <td>{{ item }}</td>
          </tr>
          </div>
          <div>
            <tr v-for="item of sell_item" :key="item">
              <td>{{item}}</td>
            </tr>
          </div>
        </tbody>
      </template>
    </v-simple-table>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
    //   loading: false,
    //   items: null,
      item_single: null,
      item_api:null,
      value_item:null,
      buy_item:null,
      sell_item:null,
    Gold: [
    {
      name: 'Nhẫn PNJ(24k)',
    },
    {
     name: 'Nữ Trang 24K',
    },
    {
     name: 'Nữ Trang 18K',
    }
    ,
    {
      name: 'Nữ Trang 14K',
    },
    {
      name: 'Nữ Trang 10K',
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
      var get_url =
        "https://vapi.vnappmob.com/api/v2/gold/sjc?api_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU1MDMzMzksImlhdCI6MTU5NDIwNzMzOSwic2NvcGUiOiJnb2xkIiwicGVybWlzc2lvbiI6MH0.1ybwaA9IKA6rCOzYE5kGPsrCH51lqKMNwYdrEkCnffs";
      
      axios
        .get(get_url)
        .then(response => {
            // console.log(response);
        //   this.loading = false;
        //   this.items = response.data.results;
        //   this.items.forEach(item => {
        //     console.log(item);
        //   });
          this.item_single = response.data.results[0];
          this.loadData(this.item_single);
        })
        .catch(err => {
        //   this.loading = false;
          console.log(err);
        });
    },
    loadData(item){
          item = this.item_single;
          delete item.datetime;
          this.value_item = Object.values(item);
          this.buy_item = this.value_item.slice(0,5);
          this.sell_item = this.value_item.slice(5);
    }
    // ,
    // callData(){
    //   return new Promise(function(resolve,reject){
    //     setTimeout(()=>{
    //       const URL_api = "https://vapi.vnappmob.com/api/request_api_key?scope=gold";
         
    //      return axios
    //     .get(URL_api)
    //     .then(response => {
    //         // console.log(response);
    //     //   this.loading = false;
    //     //   this.items = response.data.results;
    //     //   this.items.forEach(item => {
    //     //     console.log(item);
    //     //   });
    //       this.item_api = response.data.results[0];
    //       console.log(this.item_api);
    //       resolve();
    //     },2000)
    //     })
    //   })
    // }
  }
};
</script>

<style lang="scss">
#shibaa{
  display:flex;
  justify-content: space-around;
}
</style>