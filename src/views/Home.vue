<template>
  <div>
    <v-app>
      <TableVCB></TableVCB>
    </v-app>
    <v-content></v-content>
  </div>
</template> 

<script>
import TableVCB from "@/components/TableVCB.vue";
export default {
  name: "Home",
  components: {
    TableVCB,
  },
};
</script>
