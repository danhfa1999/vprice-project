<template>
  <div>
    <PContainer></PContainer>
    <v-app>
      <TableGold></TableGold>
    </v-app>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>

    <Footer></Footer>
  </div>
</template>

<script>
import PContainer from "@/components/PContainer.vue";
import TableGold from "@/components/TableGold.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",

  components: {
    PContainer,
    TableGold,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap");
* {
  font-family: "Oswald", sans-serif;
}
</style>