<template>
  <Home :title="'Calculator'">
    <template v-slot:titleSlot="props">
      <h1 class="text-pink-600 font-bold font-sans text-4xl text-center">
        {{ props.title }}
      </h1>
    </template>
  </Home>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "./components/Home.vue";

@Options({
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style></style>
