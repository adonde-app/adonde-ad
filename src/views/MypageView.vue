<template>
  <v-app>
    <v-main>
      <h1>mypage</h1>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState([]),
  },
  methods: {
    ...mapMutations([]),
  },
  mounted() {
    console.log("mypage 마운티드");
  },
  watch: {},
};
</script>
