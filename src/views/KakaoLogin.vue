<template>
  
    <v-app style="background-color: #44ad5e">
      <v-layout>
        <v-flex xs6 sm5 md4 lg3 xl2 style="position: relative; margin: auto">
          <div class="d-flex align-center">
            <v-img
              alt="Logo"
              contain
              :src="require(`@/assets/logo.png`)"
              transition="scale-transition"
              width="50"
            />
            <v-img
              alt="adonde"
              contain
              :src="require(`@/assets/adonde.png`)"
              transition="scale-transition"
              width="100"
            />
            
          </div>
          <!-- <div style="color: white">advert</div> -->
          <br />

          <div
            @click="kakaoLogin"
            style="margin-top:30px;">
            <img src="@/assets/kakao_login_medium_narrow.png"></img>
          </div>
  
          <!-- <v-form ref="form" v-model="loginValid" lazy-validation>
            <v-text-field
              v-model="loginId"
              :rules="idRules"
              label="ID"
              clearable
              required
            ></v-text-field>
  
            <v-text-field
              v-model="loginPw"
              :append-icon="loginPwShow ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="pwRules"
              :type="loginPwShow ? 'text' : 'password'"
              name="input-10-2"
              label="PW"
              class="input-group--focused"
              @click:append="loginPwShow = !loginPwShow"
              clearable
              required
            ></v-text-field>
          </v-form>
  
          <v-btn
            :disabled="!loginValid"
            color="warning"
            class="mr-4"
            @click="validateCheck"
            large
          >
            로그인 잇힝
          </v-btn> -->
        </v-flex>
      </v-layout>
    </v-app>
  </template>
  
  <script>

  const axios = require('axios')
  
  export default {
    data: () => ({
      loginValid: true,
      loginId: "",
      loginPw: "",
      loginPwShow: false,
      idRules: [(v) => !!v || "id is required"],
      pwRules: [(v) => !!v || "pw is required"],
    }),
  
    methods: {
      kakaoInit(){
        Kakao.init('2be9d205f0c2483f2914afd17b4a8d98')
        Kakao.isInitialized()
      },
        // kakaoLogin(){
        //   console.log('kakaoLogin Called..\n\n')
        //     window.Kakao.Auth.login({
        //     scope: 'profile_nickname, profile_image, account_email, gender, age_range',
        //     success: function(authObj){
        //         console.log("logging authObj!\n\n")
        //         console.log(authObj)
        //         window.Kakao.API.request({
        //         url:'/v2/user/me',
        //         success: res => {
        //             console.log("logging kakao account!\n\n")
        //             const kakao_account = res.kakao_account
        //             console.log(kakao_account)}
        //         })
        //         }
        //     })
        // },  
       
      async kakaoLogin(){
        
        await Kakao.Auth.authorize({
          redirectUri: `${window.location.origin}/kakao-callback`
        })

        //1 
        // const REST_API_KEY = '2aa177ee936922badc9212dff6d392c9'
        // const REDIRECT_URI = "http://localhost:3000/login"
        // axios.get(`http://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`)
        
        //2
        // const params = {
        //   redirectUri: "http://localhost:3000/login",
        // }
        // window.Kakao.Auth.authorize(params)
      },
      validateCheck() {
        this.$refs.form.validate();
        if (this.loginValid & this.$refs.form.validate()) {
          this.login();
        }
      },
      async login() {
        console.log("login btn click");
        this.$router.push({ path: "/main" });
      },
  
      resetValidation() {
        this.$refs.form.resetValidation();
      },
    },
    mounted(){
      localStorage.setItem('user_id', null)
      localStorage.setItem('username', null)
      localStorage.setItem('user_email', null)
      this.kakaoInit()
    }
  };
  </script>
  