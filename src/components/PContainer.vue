<template>
<v-container fuild>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src=""></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ items.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat>
      <v-toolbar-title>
        <v-card-title  id="branch-logo" large class="mr-12 pr-12">Vprice</v-card-title>
</v-toolbar-title>
       <v-toolbar-items>
      <v-btn text color="teal accent-4 ">
        Rate Exchange
      </v-btn>
      <v-btn text color="teal accent-4">
        Gold
      </v-btn>
      <v-btn text color="teal accent-4">
        CONTACT
      </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
       <v-btn class="mx-6"  @click.stop="drawer = !drawer" icon large color="teal accent-4">
        <v-icon>fas fa-align-right</v-icon>
      </v-btn>
      <v-btn class="mr-6 mx-6"  
 icon large color="teal accent-4">
        <!-- <Navigation> -->
        <v-icon>far fa-lightbulb</v-icon>
        <!-- </Navigation> -->
      </v-btn>
    </v-toolbar>
</v-container>
</template>
<script>
// import Navigation from '../components/Navigation.vue'
export default {
  name:"PContainer",
  components:{
  // Navigation
  },
  data() {
    return {
    drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'Rate Exchange', icon: 'coins' },
          { title: 'Gold', icon: 'fa dollar-sign' },
          { title: 'Contact', icon: 'address-book' }
        ],
    };
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
#branch-logo{
  font-family: 'Great Vibes', cursive;
  font-size:2em;
}
#shiba{
  width: 100%;
  height:850px;
}
#btn-info{
  width:300px;
  background-color:#59b6dd;
  a{
    outline: none;
    text-decoration:none ;
    color:#ffff;
  }
}
#info{
  display:flex;
  justify-content: center;  
  position: relative;
  top: 55%;
}
</style>