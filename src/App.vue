<template>
  <v-app id="inspire">
    <v-app-bar app color="#44AD5E" dark elevate-on-scroll clipped-left>
      <v-app-bar-nav-icon
        v-if="!drawer"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <router-link to="/">
        <v-toolbar-title>
          <div class="d-flex align-center">
            <v-img
              alt="Logo"
              contain
              :src="require(`./assets/logo.png`)"
              transition="scale-transition"
              width="50"
            />
            <v-img
              alt="adonde"
              contain
              :src="require(`./assets/adonde.png`)"
              transition="scale-transition"
              width="100"
            />
          </div>
        </v-toolbar-title>
      </router-link>
      advertise
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      color="#44AD5E"
      width="170"
    >
      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      ["mdi-apps", "ad"],
      ["mdi-account", "mypage"],
      ["mdi-logout", "logout"],
    ],
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
