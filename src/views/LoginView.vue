<template>
  <v-app>
    <v-layout>
      <v-flex xs6 sm5 md4 lg3 xl2 style="position: relative; margin: auto">
        <h1>login page</h1>
        <v-form ref="form" v-model="loginValid" lazy-validation>
          <v-text-field
            v-model="loginId"
            :rules="idRules"
            label="Id"
            outlined
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
            outlined
            required
          ></v-text-field>
        </v-form>

        <v-btn
          :disabled="!loginValid"
          color="primary"
          class="mr-4"
          @click="validateCheck"
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
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
