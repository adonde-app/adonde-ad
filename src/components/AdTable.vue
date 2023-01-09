<template>
    <v-data-table
      :headers="headers"
      :items="ads"
      :items-per-page="5"
      class="elevation-1 ad-table"
    ></v-data-table>
  </template>
  
  <script>
  import axios from 'axios'

  export default {
    data () {
        // const ads = await axios.get('http://localhost:3000/ad/findAll')
        // const temp = []
        // temp.push(3)
        // console.log(temp)
        return {
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
            ads: []
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
                    })
                })
            })
    }

    //   return {
    //     headers: [
    //       {
    //         text: 'Dessert (100g serving)',
    //         align: 'start',
    //         sortable: false,
    //         value: 'name',
    //       },
    //       { text: 'Calories', value: 'calories' },
    //       { text: 'Fat (g)', value: 'fat' },
    //       { text: 'Carbs (g)', value: 'carbs' },
    //       { text: 'Protein (g)', value: 'protein' },
    //       { text: 'Iron (%)', value: 'iron' },
    //     ],
    //     desserts: [
    //       {
    //         name: 'Frozen Yogurt',
    //         calories: 159,
    //         fat: 6.0,
    //         carbs: 24,
    //         protein: 4.0,
    //         iron: '1%',
    //       },
    //       {
    //         name: 'Ice cream sandwich',
    //         calories: 237,
    //         fat: 9.0,
    //         carbs: 37,
    //         protein: 4.3,
    //         iron: '1%',
    //       },
    //       {
    //         name: 'Eclair',
    //         calories: 262,
    //         fat: 16.0,
    //         carbs: 23,
    //         protein: 6.0,
    //         iron: '7%',
    //       },
    //       {
    //         name: 'Cupcake',
    //         calories: 305,
    //         fat: 3.7,
    //         carbs: 67,
    //         protein: 4.3,
    //         iron: '8%',
    //       },
    //       {
    //         name: 'Gingerbread',
    //         calories: 356,
    //         fat: 16.0,
    //         carbs: 49,
    //         protein: 3.9,
    //         iron: '16%',
    //       },
    //       {
    //         name: 'Jelly bean',
    //         calories: 375,
    //         fat: 0.0,
    //         carbs: 94,
    //         protein: 0.0,
    //         iron: '0%',
    //       },
    //       {
    //         name: 'Lollipop',
    //         calories: 392,
    //         fat: 0.2,
    //         carbs: 98,
    //         protein: 0,
    //         iron: '2%',
    //       },
    //       {
    //         name: 'Honeycomb',
    //         calories: 408,
    //         fat: 3.2,
    //         carbs: 87,
    //         protein: 6.5,
    //         iron: '45%',
    //       },
    //       {
    //         name: 'Donut',
    //         calories: 452,
    //         fat: 25.0,
    //         carbs: 51,
    //         protein: 4.9,
    //         iron: '22%',
    //       },
    //       {
    //         name: 'KitKat',
    //         calories: 518,
    //         fat: 26.0,
    //         carbs: 65,
    //         protein: 7,
    //         iron: '6%',
    //       },
    //     ],
    //   }
  }
</script>
<style>
.ad-table{
    margin: 20px 30px; 
}
</style>