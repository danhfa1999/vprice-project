<template>
  <v-app id="demo">
    <v-app-bar app light>
      <div class="d-flex align-center">
        <v-img
          alt="Vprice Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h1 class="mr-2">Vprice</h1>
      </div>
      <v-spacer></v-spacer>
      <v-btn target="_blank" text>
        <span class="mr-2">Home</span>
        <v-icon>fas fa-home</v-icon>
      </v-btn>
      <v-btn target="_blank" text>
        <span class="mr-2">Languages</span>
        <v-icon>fas fa-language</v-icon>
      </v-btn>
      <v-btn target="_blank" text>
        <span class="mr-2">Notifications</span>
        <v-icon>fas fa-bell</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <PContainer></PContainer>
    </v-content>
    <TableK />
    <Table1 />
    <Table2 />
    <v-content>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import PContainer from "./components/PContainer";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import TableK from "./components/TableK";
import Footer from "@/components/Footer.vue";
// import Navigation from '@/components/Navigation.vue';

export default {
  name: "App",

  components: {
    PContainer,
    Table1,
    // Navigation,
    Table2,
    TableK,
    Footer
  },
  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap");
#demo {
  font-family: "Oswald", sans-serif;
}
</style>