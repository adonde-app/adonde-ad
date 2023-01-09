<template>
  <v-app style="background-color: #a0dcb0">
    <Frame />
    <h1>mainpage</h1>
    <h2>{{ name }}</h2>
    <AdTable />
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Frame from "@/components/Frame.vue";
import AdTable from "@/components/AdTable.vue";
export default {
  components: {
    Frame,
    AdTable,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["name"]),
  },
  methods: {
    //함수 넣으면 됨
    ...mapMutations([]),
  },
  mounted() {
    //페이지가 다시 불릴때 마다 불러짐
    console.log("메인페이지 마운티드");
  },
  watch: {
    //값이 바뀔 때 마다 action을 취하기 위해서는 여기 넣어두면 됨!
  },
};
</script>
