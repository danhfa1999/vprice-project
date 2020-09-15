<template>
  <div>
    <v-card color="#3e94ec">
      <v-card>
        <currency></currency>
      </v-card>
      <TableGold></TableGold>
    </v-card>
    <v-card color="#3e94ec">
      <TableVCB></TableVCB>
    </v-card>
  </div>
</template>

<script>
import TableVCB from "@/components/TableVCB.vue";
import currency from "@/components/currency.vue";
import TableGold from "@/components/TableGold.vue";
// import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    TableVCB,
    TableGold,
    currency,
  },
};
</script>
