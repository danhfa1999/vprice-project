<template>
  <v-container fluid>
    <v-app-bar app flat hide-on-scroll>
      <v-toolbar flat>
        <v-toolbar-title>
          <v-card-title id="branch-logo" large class="mr-12 pr-12"
            >Vprice</v-card-title
          >
        </v-toolbar-title>
        <v-toolbar-items>
          <v-btn
            v-for="item in items"
            link
            rounded=""
            :to="item.path"
            :key="item"
            text
            color=" "
            >{{ item.title }}</v-btn
          >
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn class="mr-6 mx-6" icon large color="">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon text v-on="on">
              <v-icon>
                mdi-translate
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in languages"
              :key="index"
              @click="changeLocale(item.language)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn class="mx-6" @click.stop="drawer = !drawer" icon large color="">
          <v-icon>fas fa-align-right</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :to="item.path" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
// import Navigation from '../components/Navigation.vue'
import i18n from "@/plugins/i18n";
export default {
  name: "PContainer",
  components: {
    // Navigation
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "fa-home", path: "/" },
        { title: "Giá Vàng", icon: "mdi-diamond", path: "/TableGold" },
        {
          title: "Tỷ Giá",
          icon: "mdi-currency-usd",
          list: "mdi-chevron-down",
          path: "/VCB",
        },
        { title: "Liên Hệ", icon: "mdi-information", path: "/Contact" },
      ],
      languages: [
        { language: "vi", title: "Việt Nam" },
        { language: "en", title: "English" },
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
#branch-logo {
  font-family: "Great Vibes", cursive;
  font-size: 2em;
}
#shiba {
  width: 100%;
  height: 850px;
}
#btn-info {
  width: 300px;
  background-color: #59b6dd;
  a {
    outline: none;
    text-decoration: none;
    color: #ffff;
  }
}
#info {
  display: flex;
  justify-content: center;
  position: relative;
  top: 55%;
}
</style>
