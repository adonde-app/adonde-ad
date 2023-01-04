<template>
  <v-app id="inspire">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
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

<style lang="scss">
#app {
  text-align: center;
}
</style>
