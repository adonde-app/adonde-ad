<template>
  <v-app>
    <div class="intro">
      <HelloWorld />
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
};
</script>
