<template>
   <div id="app1">
  <v-app id="inspire">
    <v-container>
      <v-card
        height="700"
           id="draw"
      >
        <v-navigation-drawer
          v-model="drawer"
          :expand-on-hover="true"
          :mini-variant="true"
          :src="bg"
          absolute
        >
          <v-list
            dense
            nav
            class="py-0"
          >
            <v-list-item two-line :class="miniVariant && 'px-0'">
              <v-list-item-avatar>
                <img src="https://image.flaticon.com/icons/svg/2922/2922510.svg">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Application</v-list-item-title>
                <v-list-item-subtitle>Subtext</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-container>
  </v-app>
  </div>
</template>
<script>
export default {
   name:'Navigation',
   data () {
    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      color: 'primary',
      colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal',
      ]
    }
  },
//   computed: {
//     bg () {
//       return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
//     },
//   },
}
</script>


<style lang="scss">
   #draw{
      color:aqua;
      width:1200px ;
      }


</style>