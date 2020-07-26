<template>
    <v-app>
    <v-row>
      <v-col cols="4">
    <v-card class="text-center mt-16 py-6 ml-6"  elevation="10">
     <v-simple-table md="6" lg="6" xl="6">
         <thead class="branch-list">
          <tr>
            <th class="text-center">Sản Phẩm</th>
            <th class="text-center">Mua vào</th>
            <th class="text-center">Bán ra</th>
          </tr>
        </thead>
       <tbody>
        <tr>
          <td>{{SJC[0]}}</td>
          <td>{{ item_SJC.buy_1c }}</td>
          <td>{{ item_SJC.sell_1c }}</td>
        </tr>
        <tr >
          <td>{{SJC[1]}}</td>
          <td>{{ item_SJC.buy_1l }}</td>
          <td>{{ item_SJC.sell_1l }}</td>
        </tr>
        <tr >
          <td>{{SJC[2]}}</td>
          <td>{{ item_SJC.buy_nhan1c }}</td>
          <td>{{ item_SJC.sell_nhan1c }}</td>
        </tr>
        <tr >
          <td>{{SJC[3]}}</td>
          <td>{{ item_SJC.buy_trangsuc49 }}</td>
          <td>{{ item_SJC.sell_trangsuc49 }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    </v-card>
      </v-col> 
       <v-col cols="4">
    <v-card class="text-center mt-16 py-6"  elevation="10">
     <v-simple-table md="6" lg="6" xl="6" >
         <thead>
          <tr class="branch-list">
            <th class="text-center">Sản Phẩm</th>
            <th class="text-center">Mua vào</th>
            <th class="text-center">Bán ra</th>
          </tr>
        </thead>
       <tbody>
        <tr>
          <td>{{DOJI[0]}}</td>
          <td>{{ item_DOJI.buy_hcm }}</td>
          <td>{{ item_DOJI.sell_hcm }}</td>
        </tr>
        <tr >
          <td>{{DOJI[1]}}</td>
          <td>{{ item_DOJI.buy_hn }}</td>
          <td>{{ item_DOJI.sell_hn }}</td>
        </tr>
        <tr >
          <td>{{DOJI[2]}}</td>
          <td>{{ item_DOJI.buy_dn }}</td>
          <td>{{ item_DOJI.sell_dn }}</td>
        </tr>
        <tr >
          <td>{{DOJI[3]}}</td>
          <td>{{ item_DOJI.buy_ct }}</td>
          <td>{{ item_DOJI.sell_ct }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    </v-card>
      </v-col> 
       <v-col cols="4">
    <v-card class="text-center mt-16 mr-6"  elevation="10">
     <v-simple-table md="6" lg="6" xl="6" >
         <thead class="branch-list">
          <tr>
            <th class="text-center">Sản Phẩm</th>
            <th class="text-center">Mua vào</th>
            <th class="text-center">Bán ra</th>
          </tr>
        </thead>
       <tbody>
        <tr>
          <td>{{PNJ[0]}}</td>
          <td>{{ item_PNJ.buy_nhan_24k }}</td>
          <td>{{ item_PNJ.sell_nhan_24k }}</td>
        </tr>
        <tr >
          <td>{{PNJ[1]}}</td>
          <td>{{ item_PNJ.buy_nt_24k }}</td>
          <td>{{ item_PNJ.sell_nt_24k }}</td>
        </tr>
        <tr >
          <td>{{PNJ[2]}}</td>
          <td>{{ item_PNJ.buy_nt_18k }}</td>
          <td>{{ item_PNJ.sell_nt_18k }}</td>
        </tr>
        <tr >
          <td>{{PNJ[3]}}</td>
          <td>{{ item_PNJ.buy_nt_14k }}</td>
          <td>{{ item_PNJ.sell_nt_14k }}</td>
        </tr>
         <tr >
          <td>{{PNJ[4]}}</td>
          <td>{{ item_PNJ.buy_nt_10k }}</td>
          <td>{{ item_PNJ.sell_nt_10k }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    </v-card>
      </v-col> 
      </v-row>
      <v-row>
        <v-col cols="1"></v-col>
      <v-col cols="7" class="">
          <v-hover
        v-slot:default="{ hover }"
        open-delay="200"
      >
           <v-card
    class="text-center"
    color="light"
    max-width="700"
    height="270"
    shaped :elevation="hover ? 20:2"
  >
    <v-card-text>
      <v-sheet>
        <v-sparkline
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :show-labels= true
    :labels="labels"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
      </v-sheet>
    </v-card-text>
    <v-card-text>
      <div class="font-weight-bold"><pwd>SJC 1L,10L</pwd></div>
    </v-card-text>
  </v-card>
          </v-hover>
      </v-col>
      <v-col cols="4">
         <v-hover
        v-slot:default="{ hover }"
        open-delay="200"
      >
        <v-card shaped :elevation="hover ? 20:2" class="mr-12 mb-12">
        <v-date-picker color="teal accent-4" :landscape=true v-model="picker"></v-date-picker>
        </v-card>
         </v-hover>
      </v-col>
      <v-col cols="2" ></v-col>
      </v-row>
</v-app>
</template>

<script>
import axios from "axios";
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
export default {
  name:
    "TableSJC",
  components:{
    
  },
  api_gold:"https://vapi.vnappmob.com/api/request_api_key?scope=gold",
  data() {
    return {
      item_SJC: null,
      item_DOJI:null,
      item_PNJ:null,
      sell_item:null,
      getDay: null,
      url_gold:null,
      tab: null,
        items: [
          'SJC', 'DOJI', 'PNJ'
        ],
        SJC:[
          "SJC 1L,10L",
          "SJC 1c",
          "Nhẫn 1c",
          "Trang sức"
        ],
        DOJI:[
          "TPHCM",
          "Hà Nội",
          "Đà Nẵng",
            "Cần Thơ"
        ],
        PNJ:[
          "Nhẫn PNJ(24K)",
          "Nữ Trang 24k",
          "Nữ Trang 18k",
          "Nữ Trang 14k",
          "Nữ Trang 10k"
        ],
      labels: [
        'Mon',
        'Tues',
        'Wed',
        'Fri',
        'Thu',
        'Sat',
        'Sun',
        'Mon',
      ],
     width: 2,
      radius: 20,
      padding: 5,
      lineCap: 'round',
      gradient: gradients[3],
      value: [0, 20000, 50000, 17, 2, 10, 3, 5],
      gradientDirection: 'bottom',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    };
  },
   created() {
    this.checkData();
    this.getData();
  },
  methods: {
    getData:function() {
      axios
        .get(this.$options.api_gold)
        .then(response => {
              this.getDay = response.data.results;
              localStorage.setItem("api_gold",this.getDay);
        })
        .catch(err => {
        //   this.loading = false;
          console.log(err);
        });
    },
    callData:function(){
      this.url_gold = localStorage.getItem("api_gold");
       var get_sjc =
        `https://vapi.vnappmob.com/api/v2/gold/sjc?api_key=${this.url_gold}`;
        var get_doji =
        `https://vapi.vnappmob.com/api/v2/gold/doji?api_key=${this.url_gold}`;
        var get_pnj =
        `https://vapi.vnappmob.com/api/v2/gold/pnj?api_key=${this.url_gold}`;
        const requestOne = axios.get(get_sjc);
        const requestTwo = axios.get(get_doji);
        const requestThree = axios.get(get_pnj);
     axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
          this.item_SJC = responses[0].data.results[0];
          console.log(this.item_SJC);
          this.item_DOJI = responses[1].data.results[0];
          this.item_PNJ = responses[2].data.results[0];
}))
        },
    checkData:function(){
      console.log("Go to check Data Gold");
      if(localStorage.getItem("api_gold")!==null){
          this.callData();
          setTimeout(this.checkData,600000);
      }
      else{
          this.getData();
           console.log("Go to call Again data Gold");
           setTimeout(this.checkData,600000);
      }
    }
    }
    }
</script>

<style lang="scss">
#calendar{
  position: relative;
  bottom:200px;
}
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