<template>
  <v-col cols="12" sm="12" md="4">
    <v-hover v-slot:default="{ hover }" open-delay="200">
      <v-card class="mx-auto" :elevation="hover ? 2 : 10">
        <v-list-item three-line>
          <v-list-item-avatar size="100">
            <v-sparkline
              :value="value"
              :gradient="gradient"
              :smooth="radius || false"
              :padding="padding"
              :line-width="width"
              :stroke-linecap="lineCap"
              :gradient-direction="gradientDirection"
              :fill="fill"
              :type="type"
              :auto-line-width="autoLineWidth"
              auto-draw
            ></v-sparkline>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title font-weight-dark">
              {{ title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <count-to
                :start-val="start"
                :end-val="end"
                :duration="duration"
                class="title font-weight-bold green--text text--lighten-1"
              />
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-hover>
  </v-col>
</template>
<script>
const gradients = [["#222"], ["#42b3f4"], ["red", "orange", "yellow"]];
import CountTo from "vue-count-to";
export default {
  name: "card",
  components: {
    CountTo,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    chart: {
      type: String,
      required: true,
    },
    start: {
      type: Number,
      required: true,
    },
    end: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      width: 3,
      radius: 10,
      padding: 10,
      lineCap: "round",
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false,
    };
  },
};
</script>
