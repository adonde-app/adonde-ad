<template>
  <div id="app">
    <v-app-bar app color="blue" flat v-if="showAppBar">
      adonde-ad
      <nav>
        <router-link to="/">Intro</router-link> |
        <router-link to="/login">Login</router-link>|
        <router-link to="/main">main</router-link>|
        <router-link to="/mypage">mypage</router-link>|
        <router-link to="/example">example</router-link>
      </nav>
    </v-app-bar>

    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      showAppBar: true,
    };
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {},
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
