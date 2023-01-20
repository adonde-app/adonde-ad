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
            type="submit"
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
            <form action="https://localhost:3000/ad/update" id="form1" method="PUT">
                <div class="one-liner">
                    <label>회사이름:</label>
                    <input type="comp_name" name="comp_name" v-bind:placeholder="adInfo.compName" required v-model="comp_name">
                </div>

                <div class="one-liner">
                    <label>이메일:</label>
                    <input type="comp_name" name="comp_email" v-bind:placeholder="adInfo.email" required v-model="comp_email">
                </div>

                <div class="one-liner">
                    <label>품목:</label>
                    <input type="comp_name" name="subject" v-bind:placeholder="adInfo.subject" required v-model="subject">
                </div>

                <div class="one-liner">
                    <label>제품명:</label>
                    <input type="comp_name" name="name" v-bind:placeholder="adInfo.productName" required v-model="product_name">
                </div>

                <div class="one-liner">
                    <label>설명:</label>
                    <input type="comp_name" name="description" v-bind:placeholder="adInfo.description" required v-model="description">
                </div>

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

      export default {
        props: ['adInfo'],
        data: () => ({
          loading: false,
          editMode: false,
          comp_name: '',
          comp_email: '',
          subject: '',
          product_name: '',
          description: '',
          link: '',
          selection: 1,
        }),
        mounted(){
          console.log('logging viewmyAd')
          console.log(this.adInfo.img_url)
        },
    
        methods: {
          edit(){
            console.log('edit clicked')
            this.editMode = true;

          },
          dElete(){
            console.log('delete clicked')
            if (confirm('Are you sure you want to delete this ad?')) {
                axios.put('http://localhost:3000/ad/deleteById', {id: this.adInfo.id})
                alert('Ad deleted. Please refresh the page')
            } else {
                console.log('canceled.')
            }
            
          },
          async update(){
            console.log('update!')

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