<template>
    <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      >
        <v-card-actions>
          <div class="container">
            <v-btn
            v-if="!editMode"
            color="amber"
            v-on:click="edit"
          >
            EDIT
          </v-btn>

          <v-btn
            v-if="!editMode"
            color="orange darken-1"
            v-on:click="dElete"
          >
            DELETE
          </v-btn>

          <v-btn
            v-if="editMode"
            type="button"
            form="form1"
            color="orange darken-1"
            v-on:click="update"
            >
            Confirm
          </v-btn>

        
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
          alt="no image"
        ></v-img>
    
        <!-- <h1>{{ adInfo.image }}</h1> -->
    
        

        <div v-if="!editMode">
            <h3>조회수: {{ adInfo.views }}</h3>
            <h3>등록일: {{ adInfo.date }}</h3>
            <h3>회사이름: {{ adInfo.compName }}</h3>
            <h3>이메일: {{ adInfo.email }}</h3>
            <h3>품목: {{ adInfo.subject }}</h3>
            <h3>제품명: {{ adInfo.productName }}</h3>
            <h3>설명: {{ adInfo.description }}</h3>
            <h3>링크: {{ adInfo.url}}</h3>
        </div>

        <div v-else class="editContainer">
            <h3 style="color:black">조회수: {{ adInfo.views }}</h3>
            <h3 style="color:black">등록일: {{ adInfo.date }}</h3>
            <form ref="form" action="https://localhost:3000/ad/update" id="form1" method="PUT">
              <input type="hidden" name="id" v-model="id" />

                <div class="one-liner">
                    <label>회사이름:</label>
                    <input type="comp_name" name="comp_name" required v-model="comp_name">
                </div>

                <div class="one-liner">
                    <label>이메일:</label>
                    <input type="comp_name" name="comp_email" required v-model="comp_email">
                </div>

                <div class="one-liner">
                    <label>품목:</label>
                    <input type="comp_name" name="subject" required v-model="subject">
                </div>

                <div class="one-liner">
                    <label>제품명:</label>
                    <input type="comp_name" name="name" required v-model="product_name">
                </div>

                <div class="one-liner">
                    <label>설명:</label>
                    <input type="comp_name" name="description" v-bind:placeholder="adInfo.description" required v-model="description">
                </div>
                <div class="one-liner">
                  <label>사진: </label>
                  <input type="file" ref="_img" id="img" name="_img" accept="image/*" />
                </div>

                <input type="hidden" name="img" :value="this.img_url" />

                <div class="one-liner">
                    <label>링크:</label>
                    <input type="comp_name" name="url" v-bind:placeholder="adInfo.url" required v-model="link">
                </div>

                <!-- <input type="hidden" name="id" value={{ adInfo.id }}> -->
                
          
            </form>
        </div>

    
        <v-divider class="mx-4"></v-divider>
    
      </v-card>
    </template>
      
      <script>
      import axios from 'axios'
      import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
      import { storage } from "../firebase/firebase"

      export default {
        props: ['adInfo'],
        data: () => ({
          loading: false,
          editMode: false,
          id: '',
          comp_name: '',
          comp_email: '',
          subject: '',
          product_name: '',
          description: '',
          img_url: '',
          link: '',
          selection: 1,
        }),
    
        methods: {
          edit(){
            console.log('edit clicked')
            console.log('logging adInfo..\n')
            console.log(this.adInfo)
            this.editMode = true;
            this.id = this.adInfo.id,
            this.comp_name = this.adInfo.compName
            this.comp_email = this.adInfo.email
            this.subject = this.adInfo.subject
            this.product_name = this.adInfo.productName
            this.description = this.adInfo.description
            this.link = this.adInfo.url


          },
          dElete(){
            console.log('delete clicked')
            if (confirm('Are you sure you want to delete this ad?')) {
                let imageDNExist = (this.adInfo.img_url === "https://firebasestorage.googleapis.com/v0/b/adonde-app.appspot.com/o/ad%2Fno_image.jpeg?alt=media&token=295b1c9a-0370-4d86-9704-b18d080e6d0a") ? true : false
                if (!imageDNExist){
                  console.log('url..\n')
                  console.log(this.adInfo.img_url)
                  let fileRef = ref(storage, this.adInfo.img_url)
                  deleteObject(fileRef).then(()=> {
                    console.log('File deleted successfully..')
                  }).catch(err => console.log(err))
                  
                }
                axios.put('http://localhost:3000/ad/deleteById', {id: this.adInfo.id})
                alert('Ad deleted. Please refresh the page')
            } else {
                console.log('canceled.')
            }
            
          },
          async update(){
            console.log('update button clicked...')
            let file = this.$refs._img.files[0]
            if (file){
              // if (this.adInfo.img_url === "https://firebasestorage.googleapis.com/v0/b/adonde-app.appspot.com/o/ad%2Fno_image.jpeg?alt=media&token=295b1c9a-0370-4d86-9704-b18d080e6d0a")
                let storageRef = ref(storage)
                let fileRef = ref(storage, 'ad/' + file.name)
                uploadBytes(fileRef, file)
                .then((snapshot) => {
                  console.log(`uploaded ${file.name}...`)
                  return getDownloadURL(fileRef)})
                .then((url) => {
                  console.log('logging url...\n\n')
                  console.log(url)
                  this.img_url = url})
                .then(() => {
                  console.log('submitting form with new image...')
                  axios.put('http://localhost:3000/ad/update', { 
                    id: this.adInfo.id,
                    comp_name: this.comp_name,
                    comp_email: this.comp_email,
                    subject: this.subject,
                    name: this.product_name,
                    description: this.description,
                    img: this.img_url,
                    url: this.link,
                })
                alert('Ad updated. Please refresh the page')
                }).catch(err => console.log(err))
            }else{
              console.log('updating ad without image file...')
              // this.$refs.form.submit()
              axios.put('http://localhost:3000/ad/update', { 
                id: this.adInfo.id,
                comp_name: this.comp_name,
                comp_email: this.comp_email,
                subject: this.subject,
                name: this.product_name,
                description: this.description,
                url: this.link,
             })
             alert('Ad updated. Please refresh the page')
            }
             
           
            
            //  console.log('logging res..\n\n')
            //  this.$router.push({path:'/mypage'})
            // window.location.replace("http://localhost:8080/mypage")
          },
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
      justify-content:space-between;
    }
    .editContainer{
        color: blue;
    }
    .one-liner{
        display:inline-block;
    }
    </style>