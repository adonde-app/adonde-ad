<template>
    <v-card class="card">
    <v-card-title>
     <p class="card-name">My Advertisements</p>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>


    <v-data-table
      :headers="headers"
      :items="ads"
      :items-per-page="5"
      class="elevation-1"
      loading-text="loading...Please wait"
      :search="search"
      @click:row="handleClick"
    ></v-data-table>
    <div v-if="indexMyAd">
        <ViewMyAd @removeViewAd=removeShowAd v-bind:adInfo='adInfo'/>
    </div>
    </v-card>
  </template>
  
  <script>
  import axios from 'axios'
  import ViewMyAd from "@/components/ViewMyAd.vue"

  export default {
    components: {
        ViewMyAd,
    },
    data () {
        return {
            indexMyAd: false,
            adInfo: {},
            search: '',
            headers:[
          
          { text: 'id', value: 'id' },
          {
            text: 'Image',
            align: 'start',
            sortable: false,
            value: 'image',
          },
          { text: '회사명', value: 'compName' },
          { text: '제품명', value: 'productName' },
          { text: '등록일', value: 'date' },
          { text: 'url', value: 'url' },
          { text: '조회수', value: 'views' },
        ],
            ads: [],
            user_id: localStorage.getItem('user_id')
        }
    },
    async created (){
        //to be updated upon deployment
        // axios.put('http://localhost:3000/ad/user/findAll', {userID: this.user_id})
        axios.put('https://adonde-kr.herokuapp.com//ad/user/findAll', {userID: this.user_id})
            .then((data) => {
                console.log(data.data)
                data.data.forEach((ad) => {
                    this.ads.push({
                        image: ad.img ? "O" : "X",
                        id: ad.id,
                        compName: ad.comp_name,
                        productName: ad.name,
                        date: ad.createdAt,
                        url: ad.url,
                        views: ad.views,

                        img_url: ad.img ? ad.img : "https://firebasestorage.googleapis.com/v0/b/adonde-app.appspot.com/o/ad%2Fno_image.jpeg?alt=media&token=295b1c9a-0370-4d86-9704-b18d080e6d0a",
                        email: ad.comp_email,
                        subject: ad.subject,
                        description: ad.description,

                    })
                })
            }).catch(err => console.log(err))
    },
    methods:{
        handleClick(row){
            this.adInfo = row
            console.log(row)
            this.indexMyAd = true
        },
        removeShowAd(){
            this.indexMyAd=false
        }
    }
  }
</script>
<style>
.card{
    margin: 20px 30px; 
    border-collapse: collapse;
}
.card-name{
    margin-left: 70px;
    margin-top: 30px;
}
</style>