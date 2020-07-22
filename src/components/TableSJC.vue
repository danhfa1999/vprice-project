<template>
    <v-app>
    <v-row>
      <v-col cols="4">
    <v-card class="text-center mt-16 py-6"  elevation="10">
     <v-simple-table md="6" lg="6" xl="6" >
         <thead>
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
          <tr>
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
    <v-card class="text-center mt-16" elevation="10">
     <v-simple-table md="6" lg="6" xl="6" >
         <thead>
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
          <td>{{PNJ[3]}}</td>
          <td>{{ item_PNJ.buy_nt_10k }}</td>
          <td>{{ item_PNJ.sell_nt_10k }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    </v-card>
      </v-col> 
      </v-row>
      <v-row>
      <v-col cols="8" class="">
           <v-card
    class="text-center"
    color="white"
    max-width="600"
    height="300"
    shaped elevation="10"
  >
    <v-card-text>
      <v-sheet>
        <v-sparkline
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
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
      <div class="font-weight-bold">SJC 1L,10L</div>
    </v-card-text>
  </v-card>
      </v-col>
      <v-col cols="4">
        
      </v-col>
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
  data() {
    return {
      item_SJC: null,
      item_DOJI:null,
      item_PNJ:null,
      sell_item:null,
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
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
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
          var get_sjc =
        `https://vapi.vnappmob.com/api/v2/gold/sjc?api_key=${this.getDay}`;
        var get_doji =
        `https://vapi.vnappmob.com/api/v2/gold/doji?api_key=${this.getDay}`;
        var get_pnj =
        `https://vapi.vnappmob.com/api/v2/gold/pnj?api_key=${this.getDay}`;
        const requestOne = axios.get(get_sjc);
        const requestTwo = axios.get(get_doji);
        const requestThree = axios.get(get_pnj);
     axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
          this.item_SJC = responses[0].data.results[0];
          console.log(this.item_SJC);
          this.item_DOJI = responses[1].data.results[0];
          console.log(this.item_DOJI);
          this.item_PNJ = responses[2].data.results[0];
}))
        })
    },
  },
   callData(){
    this.fetchData();
    setTimeout(this.callData,5000);
  }
};
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