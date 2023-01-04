<template>
  <v-app>
    <v-main>
      <v-card>
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold text-h2 basil--text">{{ userName }}</h1>
          <h2>{{ reversedMessage }}</h2>

          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                  이름 변경하기
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  선택하시오
                </v-card-title>

                <v-card-text>
                  <v-text-field v-model="name"></v-text-field>
                  <v-btn
                    color="red lighten-2"
                    dark
                    @click="updateUserName(name)"
                  >
                    변경
                  </v-btn>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    닫기
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-card-title>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      userName: "정지선",
      name: "",
      dialog: false,
    };
  },
  computed: {
    //종속된 대상이 변경될때마다 함수를 실행함-> 뭔가 계산해서 넣어야할 때 사용하면 된다
    //호출할 때 () 사용할 필요가 없고 파라미터를 받을 수 없음
    //return 값을 꼭 넣어주어야됨
    ...mapState([]),

    //이런식으로 만들어주면 됨.. 그럼 userName바뀔때마다 함수가 실행되는것
    reversedMessage: function () {
      return this.userName.split("").reverse().join("");
    },
  },
  methods: {
    //함수 넣으면 됨
    ...mapMutations([]),
    updateUserName() {
      this.userName = this.name;
    },
  },
  mounted() {
    //페이지가 다시 불릴때 마다 불러짐
    console.log("example page 마운티드");
  },
  watch: {
    //값이 바뀔 때 마다 action을 취하기 위해서는 여기 넣어두면 됨!
    userName: function () {
      console.log("사용자 이름이 변경되었습니다!");
    },
  },
};
</script>
