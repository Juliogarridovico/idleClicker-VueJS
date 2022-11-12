<script>
// import { useCounterStore } from "../stores/counter.js";

// export default {
//   data() {
//     return {
//       clicks: 0,
//     };
//   },
//   setup() {
//     const counter = useCounterStore();

//     counter.count++;
//     // with autocompletion ✨
//     counter.$patch({ count: counter.count + 1 });
//     // or using an action instead
//     counter.increment();
//   },
// };

import { useCounterStore } from "@/stores/counter.js";
import { mapState } from "pinia";
export default {
  name: "theGame",
  data() {
    return {
      clicks: 0,
    };
  },
  computed: {
    ...mapState(useCounterStore, ["counter"]),
  },
};
</script>

<template>
  <div class="theGame">
    <p>click {{ clicks }}</p>
    <p>Pinia {{ counter }}</p>
    <button v-on:click="clicks += 1">vueJS</button>
    <button v-on:click="useCounterStore.increment()">Pinia</button>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Gloria+Hallelujah");

button {
  border-radius: 100%;
  width: 150px;
  height: 150px;
  background-color: #f4e5b5;
  border: solid #635425;
  box-shadow: 0px 6px #77725e;
  font-family: "Gloria Hallelujah", cursive;
  font-size: 18px;
  color: #593210;
}

button:hover {
  background-color: #c1b48b;
}

button:active {
  background-color: #c1b48b;
  box-shadow: 0px 2px #494537;
  transform: translateY(4px);
}

button:focus {
  outline: 0;
}
</style>
