<template>
<div>
      <v-app>
      <PContainer></PContainer>
      <TableGold></TableGold>
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
import TableVCB from '@/components/TableVCB.vue'
import Footer from '@/components/Footer.vue'
   import TableGold from '@/components/TableGold.vue'
export default {
  name: 'Home',
  components: {
    PContainer,
    TableGold,
    TableVCB,
    Footer,
  }
}
</script>
