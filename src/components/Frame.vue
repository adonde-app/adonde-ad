<template>
  <div>
    <v-app-bar app color="#44AD5E" dark elevate-on-scroll clipped-left>
      <v-app-bar-nav-icon
        v-if="!drawer"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <router-link to="/main">
        <v-toolbar-title>
          <div class="d-flex align-center">
            <v-img
              alt="Logo"
              contain
              :src="require(`@/assets/logo.png`)"
              transition="scale-transition"
              width="50"
            />
            <v-img
              alt="adonde"
              contain
              :src="require(`@/assets/adonde.png`)"
              transition="scale-transition"
              width="100"
            />
          </div>
        </v-toolbar-title>
      </router-link>
      advertise
      <v-spacer></v-spacer>

      <!-- <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon> -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      color="#44AD5E"
      width="170"
    >
      <v-list>
        <v-list-item
          v-for="[icon, text, to] in links"
          :key="icon"
          link
          :to="to"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      ["mdi-apps", "ad", "/main"],
      ["mdi-account", "mypage", "/mypage"],
      ["mdi-logout", "logout", "/login"],
    ],
  }),
};
</script>
