<template>
  <div class="home">
    <PContainer msg="Welcome to Your Vue.js App"/>
    <Navigation/>
    <Table1/>
    <Table2/>
    <Nav/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import PContainer from '@/components/PContainer.vue'
import Table1 from '@/components/Table1.vue'
import Table2 from '@/components/Table2.vue'
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'Home',
  components: {
    PContainer,
    Table1,
    Table2,
    Footer,
    Navigation
  }
}
</script>
