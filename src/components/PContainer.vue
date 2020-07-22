<template>
<v-container>
    <v-toolbar flat>
      <v-toolbar-title>
        <v-card-title  id="branch-logo" large class="mr-12 pr-12">Vprice</v-card-title>
</v-toolbar-title>
       <v-toolbar-items>
      <v-btn text color="cyan accent-4">
        Rate Exchange
      </v-btn>
      <v-btn text color="cyan accent-4">
        Gold
      </v-btn>
      <v-btn text color="cyan accent-4">
        CONTACT
      </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
       <v-btn class="mr-6" icon large >
        <v-icon>fas fa-align-right</v-icon>
      </v-btn>
      <v-btn class="mr-6" icon large>
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
          { title: 'About', icon: 'question_answer' },
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