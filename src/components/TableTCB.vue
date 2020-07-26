<template>
<v-app>
      <v-row >
         <v-col  cols="3">
             <v-img id="img-app"
            src="../assets/tcb.png"
          transition="scale-transition"
           max-width="250"
          ></v-img>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="6">
           <v-tabs
          v-model="tab"
          grow
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in items" link
          :to="item.path" :key="item.name">
              {{ item.name }}
          </v-tab>
        </v-tabs>
          <v-card class="text-center"  elevation="10">
            <!-- <TableVCB></TableVCB> -->
            <router-link to="/TableVCB"></router-link>
   <v-simple-table>
        <thead>
          <tr>
            <th class="text-center">Mua tiền mặt</th>
            <th class="text-center">Mua chuyển khoản</th>
             <th class="text-center">Bán ra</th>
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
        </v-card>
        </v-col>
      </v-row>
</v-app>
</template>
<script>
import axios from "axios";
// import TableVCB from '../components/TableVCB.vue'
export default {
  name:"TabRate",
//  url_gold :  "https://vapi.vnappmob.com/api/request_api_key?scope=exchange_rate",
  components:{
    // TableVCB
  },
 data() {
    return {
      item_rate: null,
      url_rate:null,
      getDay:null,
      items:[
        {
          name:'VCB',
        path:'/VCB'
         },
        {
          name:'CTG',
        path:'/CTG'
        },
        {
          name:'TCB',
          path:'/TCB'
        },
        {
          name:'STB',
          path:'/STB'
        },
        {
          name:'BIDV',
          path:'/BIDV'
        },
                {
                  name:'SBV',
          path:'/SBV'
        }
      ]
    };
  },
 created() {
    this.checkData();
    this.getData();
  },
  methods: {
    getData:function() {
      axios
        .get(this.$options.url_gold)
        .then(response => {
              this.getDay = response.data.results;
              localStorage.setItem("api",this.getDay);
        })
        .catch(err => {
        //   this.loading = false;
          console.log(err);
        });
    },
    callData:function(){
      this.url_rate = localStorage.getItem("api");
      var get_url =
        `https://vapi.vnappmob.com/api/v2/exchange_rate/tcb?api_key=${this.url_rate}`;
      axios
        .get(get_url)
        .then(response => {
          this.item_rate = response.data.results;
          console.log("Shiba");
        })
    },
    checkData:function(){
      console.log("Go to check Data");
      if(localStorage.getItem("api")!==null){
          this.callData();
          setTimeout(this.checkData,600000);
      }
      else{
          this.getData();
           console.log("Go to call Again data");
           setTimeout(this.checkData,600000);
      }
    }
    }
  }

</script>
<style lang="scss">
  #img-app{
    margin-left:50px;
  }
  #gold:hover{
    background-color:#00BFA5;
    color:#ffffff;
    th{
       color:#ffffff;
    }
  }
  #gold{
     th{
        color:#00BFA5;
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
    color: #00BFA5;
  }
   .icon-btn:hover{
    color:#000000;
  }
  }
  #hjhj{
     background-color:#00BFA5;
  }
</style>