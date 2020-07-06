<template>
  <div class="home">
    <PContainer msg="Welcome to Your Vue.js App"/>
    <Table/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import PContainer from '@/components/PContainer.vue'
import Table from '@/components/Table.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    PContainer,
    Table,
    Footer
  }
}
</script>
