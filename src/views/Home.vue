<template>
  <div>
    <v-app>
      <TableVCB></TableVCB>
    </v-app>
    <v-content></v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import TableVCB from "@/components/TableVCB.vue";
export default {
  name: "Home",
  components: {
    TableVCB,
  },
};
</script>
