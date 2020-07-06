<template>
  <v-app >
    <v-app-bar
      app
      light
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vprice Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
       <h1 class= "mr-2">Vprice</h1>
      </div>
      <v-spacer></v-spacer>
       <v-btn
        target="_blank"
        text
      >
        <span class="mr-2">Languages</span>
        <v-icon>fas fa-language</v-icon>
      </v-btn>
      <v-btn
        target="_blank"
        text
      >
        <span class="mr-2">Notifications</span>
        <v-icon>fas fa-bell</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content >
      <PContainer/>
    </v-content>
     <v-content>
      <Table/>
    </v-content>
     <v-content>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import PContainer from './components/PContainer';
import Table from './components/Table';
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',

  components: {
    PContainer,
    Table,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
