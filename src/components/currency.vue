<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm12>
        <v-layout>
          <v-flex md6>
            <v-card round outlined>
              <v-layout align-center>
                <v-flex md5>
                  <v-layout>
                    <v-flex md8 class="ml-2">
                      <v-text-field
                        class="questrial no-top-padding"
                        background-color="grey lighten-3"
                        height="50px"
                        rounded
                        type="number"
                        placeholder
                        v-model="convert"
                      ></v-text-field>
                    </v-flex>
                    <v-flex md4 class="mr-4 mt-5">
                      <v-select
                        :items="['USD','JPY','EUR','AUD','CAD']"
                        label="USD"
                        dense
                        dark
                        solo
                      ></v-select>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 md2>
                  <v-row justify="center">
                    <v-dialog v-model="dialog" dark persistent max-width="1400px">
                      <template v-slot:activator="{ on, attrs }">
                        <div class="btn-bg">
                          <button v-bind="attrs" v-on="on" id="btn-convert">
                            <v-icon id="icon-convert">fas fa-sync-alt</v-icon>
                          </button>
                        </div>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">Search</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <TableVCB></TableVCB>
                            </v-row>
                          </v-container>
                          <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </v-flex>
                <v-flex md5>
                  <v-layout align-center>
                    <v-flex md4 class="ml-10 mt-5">
                      <v-select
                        :items="['USD','JPY','EUR','AUD','CAD']"
                        label="VND"
                        dense
                        dark
                        solo
                      ></v-select>
                    </v-flex>
                    <v-flex md8>
                      <count-to
                        ref="example"
                        :start-val="0"
                        :end-val="filterName('USD')"
                        :duration="Number(duration)"
                        :decimals="Number(decimals)"
                        :separator="separator"
                        :prefix="prefix"
                        :suffix="suffix"
                        class="display-1 font-weight-medium blue--text text--lighten-1"
                      />
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex md6 class="mt-6">
            <div class="px-4">
              <v-layout>
                <v-flex md12>
                  <v-row dense class="panel-group">
                    <card
                      title="USD"
                      icon="mdi-account-multiple"
                      color="orange"
                      chart="newVisitis"
                      :start="0"
                      :end="filterName('USD')"
                      :duration="2600"
                    />
                    <card
                      title="EUR"
                      icon="mdi-message-bulleted"
                      color="blue"
                      chart="messages"
                      :start="0"
                      :end="filterName('EUR')"
                      :duration="3000"
                    />
                    <card
                      title="JPY"
                      icon="mdi-currency-usd"
                      chart="purchases"
                      :start="0"
                      :end="filterName('TWD')"
                      :duration="3200"
                    />
                  </v-row>
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import TableVCB from "@/components/TableVCB";
import CountTo from "vue-count-to";
import card from "@/components/card.vue";
export default {
  name: "currency",
  components: {
    card,
    CountTo,
    TableVCB,
  },
  data() {
    return {
      startVal: 0,
      endVal: 1,
      duration: 1000,
      decimals: 0,
      separator: ",",
      suffix: "",
      prefix: "",
      dialog: false,
    };
  },
  mounted: function () {
    console.log("SHiaasdasd");
  },
  watch: {
    value: function (v) {
      this.convert = v / 5;
    },
    convert: function (v) {
      this.value = v / 5;
    },
  },
  computed: {
    filterName() {
      return this.$store.getters.filterName;
    },
    getCountry() {
      return this.$store.getters.getCountry;
    },
  },
};
</script>

<style lang="scss">
.shiba {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: auto;
}
.btn-bg {
  background-color: #dee1f5;
  display: flex;
  justify-content: center;
  height: 100px;
  width: 160px;
  margin: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
}
.input-custom {
  font-size: 24px;
  padding: 0;
  margin: 0;
  outline: none;
  color: #003000;
}
#btn-convert {
  font-size: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: white;
  outline: none;
  width: 100px;
  height: 70px;
}
#btn-convert:hover {
  background-color: #f5f5f5;
}
#icon-convert {
  color: #332b5f;
  transition: 2s;
}
#icon-convert:hover {
  color: #fddb3a;
}
#shiba {
  width: 10px;
}
#icon-convert:hover {
  transform: rotate(720deg);
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
