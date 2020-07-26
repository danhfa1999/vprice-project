<template>
    <v-content transition="slide-x-transition" ><router-view></router-view></v-content>
</template>

<script>

// import Navigation from '@/components/Navigation.vue';

export default {
  name: "App",

  components: {
    
  },
  data: () => ({
    //
  })
};
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap');
 *{
 font-family: 'Oswald', sans-serif;
}
</style>