<template>
<div>
      <v-app>
      <PContainer></PContainer>
      <TableSJC></TableSJC>
      </v-app>
      <v-app>
        <TableVCB></TableVCB>
      </v-app>
      <v-content>
      <Footer></Footer>
      </v-content>
</div>
</template>

<script>
// @ is an alias to /src
import PContainer from '@/components/PContainer.vue'
// import TabGold from '@/components/TabGold.vue'
import TableVCB from '@/components/TableVCB.vue'
import Footer from '@/components/Footer.vue'
   import TableSJC from '@/components/TableSJC.vue'
export default {
  name: 'Home',
  components: {
    PContainer,
    TableSJC,
    TableVCB,
    Footer,
  }
}
</script>
