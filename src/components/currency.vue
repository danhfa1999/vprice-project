<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm12>
        <v-layout>
          <v-flex>
            <v-card round outlined height="200">
              <v-layout>
                <v-flex md4 class="mt-10">
                  <v-flex md8 class="ml-2">
                    <v-text-field
                      class="questrial no-top-padding"
                      background-color="grey lighten-3"
                      height="50px"
                      rounded
                      type="number"
                      placeholder=""
                      v-model="convert"
                    >
                    </v-text-field>
                    <v-flex md2>
                      <div></div>
                    </v-flex>
                  </v-flex>
                </v-flex>
                <v-flex xs12 md4 align-self-center class="mt-10">
                  <div class="btn-bg">
                    <button id="btn-convert">
                      <v-icon id="icon-convert">fas fa-sync-alt</v-icon>
                    </button>
                  </div>
                </v-flex>
                <v-flex md4>
                  <v-col cols="12" class="text-center mt-10">
                    <count-to
                      ref="example"
                      :start-val="0"
                      :end-val="value"
                      :duration="Number(duration)"
                      :decimals="Number(decimals)"
                      :separator="separator"
                      :prefix="prefix"
                      :suffix="suffix"
                      class="display-2 font-weight-medium blue--text text--lighten-1"
                    />
                  </v-col>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex class="mt-6">
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
                      :end="102400"
                      :duration="2600"
                    />
                    <card
                      title="EUR"
                      icon="mdi-message-bulleted"
                      color="blue"
                      chart="messages"
                      :start="0"
                      :end="81212"
                      :duration="3000"
                    />
                    <card
                      title="JPY"
                      icon="mdi-currency-usd"
                      chart="purchases"
                      :start="0"
                      :end="9280"
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
import CountTo from "vue-count-to";
import card from "@/components/card.vue";
export default {
  name: "currency",
  components: {
    card,
    CountTo,
  },
  data() {
    return {
      startVal: 0,
      endVal: 1,
      duration: 1000,
      decimals: 0,
      separator: ",",
      suffix: " usd",
      prefix: "$ ",
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      currency: {},
      convert: 0,
      value: 23,
    };
  },
  mounted() {
    this.getCurrency;
  },
  watch: {
    value: function(v) {
      this.convert = v / 5;
    },
    convert: function(v) {
      this.value = v / 5;
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
