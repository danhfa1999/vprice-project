<template>
<v-app>
      <v-row >
         <v-col  cols="3">
             <v-img id="img-app"
            src="../assets/Mobile.png"
          transition="scale-transition"
           max-width="250"
          ><div class="icon-app">
                <a 
          href="https://apps.apple.com/app/id1477505685"
          target="_blank"
        >
              <v-btn
              class="icon-btn"
      >
        <v-icon>fab fa-android</v-icon>
      </v-btn>
               </a>
                <a 
          href="https://play.google.com/store/apps/details?id=com.vnappmob.vprice&hl=vi"
          target="_blank"
        >
        <v-btn
        class="icon-btn"
      >
        <v-icon>fab fa-apple</v-icon>
      </v-btn>
                </a>
            </div></v-img>
        </v-col>
        <v-col cols="9" >
    <v-tabs v-model="activeTab" grow>
      <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.product }}
      </v-tab>
      <v-tab-item v-for="tab in tabs" :key="tab.id" :value="tab.route">
      </v-tab-item>
    </v-tabs>
    <v-app >
    <v-simple-table height="600px">
      <TableVCB></TableVCB>  
    </v-simple-table>
  </v-app>
        </v-col>
      </v-row>
</v-app>
</template>
<script>
import TableVCB from "./TableVCB.vue";
export default {
  props: ["id"],
  components:{
    TableVCB
  },
  data() {
    return {
        activeTab: `/user/${this.id}`,
      tabs: [
        { id: 1, name: "TableSJC", route: `/user/${this.id}` },
        { id: 2, name: "TableDOJI", route: `/user/${this.id}/doji` },
        { id: 3, name: "TablePNJ", route: `/user/${this.id}/pnj` }
      ],
  }
  }
};
</script>
<style lang="scss">
  #img-app{
    margin-left:50px;
  }
  #gold:hover{
    background-color:#59b6dd;
    color:#ffffff;
    th{
       color:#ffffff;
    }
  }
  #gold{
     th{
        color:#59b6dd;
     }
  }
  .icon-app{
    display:flex;
    justify-content: center;
    height:100%;
    align-items: center;
  .icon-btn{
    width:100px;
    height:30px;
    color: #59b6dd;
  }
   .icon-btn:hover{
    color:#000000;
  }
  }
  #hjhj{
     background-color:#59b6dd;
  }
</style>