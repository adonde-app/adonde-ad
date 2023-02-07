<template>
    <div id="container">
        <Loading />
    </div>
   
</template>
<script>
import Loading from '@/components/Loading.vue'
const axios = require('axios')
export default{
    components: {
        Loading,
    },
    async mounted(){
        try{
            if (!this.$route.query.code){
                return this.$router.push('/')
            }
            console.log(`code: ${this.$route.query.code}`)
            const body = {
                code: this.$route.query.code,
                domain: window.location.origin
            }
            //user info from backend
            //CHANGED FOR DEPLOYMENT
            //const response = await axios.post('http://localhost:3000/login', body, {})
            const response = await axios.post('https://adonde-ad.netlify.app/login', body, {})
            console.log('loggign email..\n\n')
            console.log(JSON.stringify(response.data.kakao_account.email))

    
            localStorage.setItem('username', response.data.properties.nickname)

            localStorage.setItem("user_email", response.data.kakao_account.email)
            console.log('getting user_id...\n\n')
            const response2 = await axios.post('https://adonde-kr.herokuapp.com/user/login', {
                email: response.data.kakao_account.email,
                nickname: '',
                profile_image: '', 
                dateofbirth: '',
            })
            console.log('logging user_id..\n\n')
            console.log(response2.data.id)
            localStorage.setItem('user_id', response2.data.id)

            this.$router.push("/main")
        }catch(error){ 
            console.log(error)
        }
    }
}
</script>
<style scoped>
#container{
    height: 100%;
    width: 100%;
    display:flex;
    justify-content:space-around;
    align-items: center;
}
</style>