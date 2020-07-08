<template>
  <div>Hello there</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      var get_url =
        "https://vapi.vnappmob.com/api/v2/gold/sjc?api_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU1MDMzMzksImlhdCI6MTU5NDIwNzMzOSwic2NvcGUiOiJnb2xkIiwicGVybWlzc2lvbiI6MH0.1ybwaA9IKA6rCOzYE5kGPsrCH51lqKMNwYdrEkCnffs";

      axios
        .get(get_url)
        .then(response => {
          this.loading = false;
          this.items = response.data.results;
          this.items.forEach(item => {
            print(item);
          });
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss">
</style>