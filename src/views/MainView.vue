<template>
  <v-app style="background-color: #a0dcb0">
    <Frame />
    <div class="for-button">
      <h2></h2>
      <h2>반갑습니다, {{ username }}님</h2>
      <v-btn v-if='!showCreateAd' v-on:click='newAd' class="mx-2" fab dark color="indigo" style="margin-top:4px;">
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


import { mapGetters, mapState, mapMutations } from "vuex";
import Frame from "@/components/Frame.vue";
import AdTable from "@/components/AdTable.vue";
import createAd from "@/components/createAd.vue";
const axios = require('axios')

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
      username: localStorage.getItem('username'),
      user_id: localStorage.getItem('user_id'),
      user_email: localStorage.getItem('user_email')
    };
  },
  computed: {
    ...mapState(["name"]),
    ...mapGetters(["getUser"]),
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
  async mounted() {
    //페이지가 다시 불릴때 마다 불러짐
    console.log(`user_id: ${localStorage.getItem('user_id')}`)
    console.log(`user_email: ${localStorage.getItem('user_email')}`)
    this.username = localStorage.getItem('username')
    this.user_email = localStorage.getItem('user_email')
    this.user_id = localStorage.getItem('user_id')
    this.showTable = true;
  },
  watch: {
    //값이 바뀔 때 마다 action을 취하기 위해서는 여기 넣어두면 됨!
  },
};
</script>
<style scoped>
.for-button{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
</style>