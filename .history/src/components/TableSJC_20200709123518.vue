<template>
  <div>
      <h3>{{item_single.buy_trangsuc49}}</h3>
    <table>
      <thead>
        <tr>
          <td>buy</td>
          <td>sell</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{item_single.buy_1c}}</td>
          <td>{{item_single.sell_1c}}</td>
        </tr>
        <tr>
          <td>{{item_single.buy_1l}}</td>
          <td>{{item_single.sell_1l}}</td>
        </tr>
        <tr>
          <td>{{item_single.buy_nhan1c}}</td>
          <td>{{item_single.sell_nhan1c}}</td>
        </tr>
      </tbody>
    </table>

    <v-simple-table height="600px">
      <template v-slot:default>
        <tbody>
          <tr>
          <td>{{item_single.buy_1c}}</td>
          <td>{{item_single.sell_1c}}</td>
        </tr>
        <tr>
          <td>{{item_single.buy_1l}}</td>
          <td>{{item_single.sell_1l}}</td>
        </tr>
        <tr>
          <td>{{item_single.buy_nhan1c}}</td>
          <td>{{item_single.sell_nhan1c}}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
    //   loading: false,
    //   items: null,
      item_single: null
    };
  },
  created() {
    this.fetchData();
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
        })
        .catch(err => {
        //   this.loading = false;
          console.log(err);
        });
    }
  }
};
</script>