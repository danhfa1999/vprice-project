<template>
<v-container>
    <v-toolbar flat>
      <v-toolbar-title>
        <v-card-title  large class="mr-12 pr-12">Vprice</v-card-title>
</v-toolbar-title>
       <v-toolbar-items>
      <v-btn text color="deep-purple accent-4">
        Rate Exchange
      </v-btn>
      <v-btn text color="deep-purple accent-4">
        Gold
      </v-btn>
      <v-btn text color="deep-purple accent-4">
        Help
      </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
       <v-btn class="mr-6" icon large >
        <v-icon>fas fa-align-right</v-icon>
      </v-btn>
      <v-btn class="mr-6" icon large>
        <v-icon>far fa-lightbulb</v-icon>
      </v-btn>
    </v-toolbar>
</v-container>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');
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