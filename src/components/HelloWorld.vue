<template>
  <v-main>
    <v-container>
      <h1>intropage</h1>

        <input type="file" id="image" @change="uploadImage"/>

    </v-container>
  </v-main>
</template>

<script>

export default {
  name: "HelloWorld",
  methods: {
    uploadImage(e){
      let file = e.target.files[0]
      let storageRef = firebase.storage().ref('ad/' + file.name)
      storageRef.put(file)
      console.log(e.target.files[0])
    }
  }
  // data(){
  //   return {
  //     imageData: null,
  //     picture: null,
  //     uploadvalue: 0
  //   }
  // }
};
// const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData)
// storageRef.on(`state_changed`, snapshot => {
//   this.uploadValue = (snapshot.bytesTransferred/snapshot)
// })
</script>
<style scoped>
</style>
