<template>
  <v-app style="background-color: #a0dcb0">
    <Frame />
    <h1>mainpage</h1>
    <h2>{{ name }}</h2>
    <div class="for-button">

      <v-btn v-if='!showCreateAd' v-on:click='newAd' class="mx-2" fab dark color="indigo">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>

      <v-btn v-else v-on:click='closeNewAd' class="mx-2" fab dark color="indigo">
        <v-icon dark>
          mdi-format-list-bulleted-square
        </v-icon>
      </v-btn>
      
  </div>
    <createAd v-if='showCreateAd' />
    <AdTable v-if='showTable' />
  </v-app>
</template>

<script>


import { mapState, mapMutations } from "vuex";
import Frame from "@/components/Frame.vue";
import AdTable from "@/components/AdTable.vue";
import createAd from "@/components/createAd.vue";

export default {
  components: {
    Frame,
    AdTable,
    createAd,
  },
  data() {
    return {
      showCreateAd: false,
      showTable: true,
    };
  },
  computed: {
    ...mapState(["name"]),
  },
  methods: {
    //함수 넣으면 됨
    ...mapMutations([]),
    newAd(){
      this.showTable = false
      this.showCreateAd = true
    },
    closeNewAd(){
      this.showTable = true
      this.showCreateAd = false
    }
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
<style scoped>
.for-button{
  display:flex;
  justify-content: right;
}
</style>