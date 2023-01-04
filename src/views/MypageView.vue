<template>
  <v-app style="background-color: #a0dcb0">
    <Frame />
    <h1>mypage</h1>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Frame from "@/components/Frame.vue";
export default {
  components: {
    Frame,
  },
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
