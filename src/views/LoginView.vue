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

        <v-form ref="form" v-model="loginValid" lazy-validation>
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
          로그인
        </v-btn>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
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
};
</script>
