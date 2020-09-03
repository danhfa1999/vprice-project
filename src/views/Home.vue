<template>
  <div>
    <v-card color="#3e94ec">
      <currency></currency>
      <TableGold></TableGold>
    </v-card>

    <TableVCB></TableVCB>
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
