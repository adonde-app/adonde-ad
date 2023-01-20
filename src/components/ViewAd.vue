<template>
<v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <v-card-actions>
      <div class="container">
      <v-btn
        color="deep-purple lighten-2"
        v-on:click="close"
      >
        CLOSE
      </v-btn>
    </div>
    </v-card-actions>

    <v-img
      height="250"
      v-bind:src=adInfo.img_url
    ></v-img>

    <!-- <h1>{{ adInfo.image }}</h1> -->

    <h3>조회수: {{ adInfo.views }}</h3>
    <h3>등록일: {{ adInfo.date }}</h3>
    <h3>회사이름: {{ adInfo.compName }}</h3>
    <h3>이메일: {{ adInfo.email }}</h3>
    <h3>품목: {{ adInfo.subject }}</h3>
    <h3>제품명: {{ adInfo.productName }}</h3>
    <h3>설명: {{ adInfo.description }}</h3>
    <h3>링크: {{ adInfo.url}}</h3>

    <v-divider class="mx-4"></v-divider>

  </v-card>
</template>
  
  <script>
  export default {
    props: ['adInfo'],
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      close() {
        console.log('close')
        this.$emit('removeViewAd')
      },
    },
  }
</script>
<style scoped>
.container{
  display: flex;
  justify-content:right;
}
</style>