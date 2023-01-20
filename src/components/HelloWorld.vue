<template>
  <v-main>
    <v-container>
      <h1>intropage</h1>

        <input type="file" id="image" @change="uploadImage"/>

        <img id="img"></img>


    </v-container>
  </v-main>
</template>

<script>

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "../firebase/firebase"
export default {
  data: () => ({
    _img: "",
  }), 
  methods: {
    async uploadImage(e){
      let file = e.target.files[0]
      let storageRef = ref(storage)
      let adStorageRef = ref(storage, 'ad/')
      let fileRef = ref(storage, 'ad/' + file.name)
      const path = fileRef.fullPath
      const name = fileRef.name
      console.log(`filepath: ${path}`)
      console.log( `filename: ${name}`)
      uploadBytes(fileRef, file).then((snapshot) => {
        console.log('uploaded smth')
        return getDownloadURL(fileRef)
      })
      .then((url) => {
        console.log('logging url...\n\n')
        console.log(url)
        document.querySelector('#img').src = url
      })
      .catch(err => console.log(err))

      // console.log(e.target.files[0])
    },
  }, 

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
