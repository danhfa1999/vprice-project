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
    <TabGold></TabGold>
    <TabRate/>
    <v-content>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import PContainer from '@/components/PContainer.vue'
import TabGold from '@/components/TabGold.vue'
import TabRate from '@/components/TabRate.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    PContainer,
    TabGold,
    TabRate,
    Footer,
  }
}
</script>
