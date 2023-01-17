<template>
  <v-app style="background-color: #a0dcb0">
    <Frame />
    <h2 style="margin-top:80px;">{{ username }}님의 광고</h2>
    <MyAdTable v-if="showMyTable" />

  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Frame from "@/components/Frame.vue";
import MyAdTable from "@/components/MyAdTable.vue";

export default {
  components: {
    Frame,
    MyAdTable,
  },
  data() {
    return {
      showMyTable: true,
      username: localStorage.getItem('username')
    };
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
