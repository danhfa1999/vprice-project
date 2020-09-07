<template>
  <v-app>
    <PContainer></PContainer>
    <v-main transition="slide-y-transition">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import PContainer from "@/components/PContainer.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
    PContainer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,700&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
// // td {
// //   font-size: 24px;
// // }
// // tr {
// //   font-size: 30px;
// // }
// .slide-enter {
//   transform: translateY(100px);
//   opacity: 0;
// }
// .slide-enter-active,
// .slide-leave-active {
//   transition: all 0.5s ease-out;
// }
// .slide-leave {
//   transform: translateY(-100px);
//   opacity: 0;
// }
</style>
