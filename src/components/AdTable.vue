<template>
    <v-card class="card">
    <v-card-title>
        <div class="user">
            <!-- {{ user.name }} -->
        </div>
     <p class="card-name">Advertisements</p>
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
    <div v-if="indexAd">
        <ViewAd @removeViewAd=removeShowAd v-bind:adInfo='adInfo'/>
    </div>
    </v-card>
  </template>
  
  <script>
  import axios from 'axios'
  import ViewAd from "@/components/ViewAd.vue"
//   import { mapGetters, mapState, mapMutations } from "vuex"
  import store from '../store'

  export default {
    components: {
        ViewAd,
    },
    data () {
        return {
            indexAd: false,
            adInfo: {},
            search: '',
            headers:[
          {
            text: 'Image',
            align: 'start',
            sortable: false,
            value: 'image',
          },
          { text: 'id', value: 'id' },
          { text: '회사명', value: 'compName' },
          { text: '제품명', value: 'productName' },
          { text: '등록일', value: 'date' },
          { text: 'url', value: 'url' },
          { text: '조회수', value: 'views' },
        ],
            ads: [],
        }
    },
    async created (){
        axios.get('http://localhost:3000/ad/findAll')
            .then((data) => {
                console.log(data.data)
                data.data.forEach((ad) => {
                    this.ads.push({
                        image: 'Frozen Yogurt',
                        id: ad.id,
                        compName: ad.comp_name,
                        productName: ad.name,
                        date: ad.createdAt,
                        url: ad.url,
                        views: ad.views,

                        email: ad.comp_email,
                        subject: ad.subject,
                        description: ad.description,

                    })
                })
            })
    },
    methods:{
        handleClick(row){
            this.adInfo = row
            this.indexAd = true
        },
        removeShowAd(){
            this.indexAd=false
        }
    },
    computed: {
        // ...mapGetters(['getUser'])
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