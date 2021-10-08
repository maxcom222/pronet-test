<template>
  <div class="container w-80 mx-auto my-20 px-6 py-6 shadow">
    <slot name="titleSlot" :title="title">
      <h1 class="text-pink-600 font-bold font-sans text-4xl text-center">
        {{ title }}
      </h1>
    </slot>

    <div class="h-0.5 bg-gray-200 w-36 mx-auto mt-2.5"></div>
    <div class="flex items-center my-5">
      <label class="w-20 text-right" for="input_a">A</label>
      <input
        type="text"
        id="input_a"
        v-model.number="input_a"
        class="
          ml-3
          shadow-md
          border-none
          focus:ring-pink-400
          rounded-sm
          bg-gray-100
          text-black
        "
      />
    </div>
    <div class="flex items-center my-5">
      <label class="w-20 text-right" for="input_b">B</label>
      <input
        type="text"
        id="input_b"
        v-model.number="input_b"
        class="
          ml-3
          shadow-md
          border-none
          focus:ring-pink-400
          rounded-sm
          bg-gray-100
          text-black
        "
      />
    </div>
    <div class="flex items-center my-5">
      <label class="w-20 text-right" for="sum">SUM</label>
      <input
        type="text"
        id="sum"
        v-model="sum"
        readonly
        class="
          ml-3
          shadow-md
          border-none
          focus:ring-pink-400
          rounded-sm
          bg-gray-100
          text-black
        "
      />
    </div>
    <div class="text-center mt-3">
      <button
        @click="calc()"
        class="
          px-7
          py-2
          font-semibold
          text-white
          rounded
          bg-pink-600
          hover:bg-pink-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-pink-500
        "
      >
        Calculate
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSum, useMapper } from "@/store/modules/sum";

interface State {
  input_a: number;
  input_b: number;
  sumStore: any;
}

export default defineComponent({
  props: {
    title: String,
  },
  data: (): State => {
    const sum = useSum();
    return { input_a: 0, input_b: 0, sumStore: sum };
  },
  computed: useMapper.mapGetters(["sum"]),
  methods: {
    calc(): void {
      this.sumStore.dispatch("calc", {
        input_a: this.input_a,
        input_b: this.input_b,
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
