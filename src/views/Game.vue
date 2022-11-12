<script>
import { useCounterStore } from "@/stores/counter";

const test = useCounterStore();
export default {
  name: "theGame",
  data() {
    return {
      clicks:0,
    };
  },
  computed: {},
  methods: {
    sube: function () {
      console.log(test.counter);
      test.increment();
      this.clicks = test.counter;
    },
  },
};
</script>

<template>
  <div class="theGame">
    <p>click {{ clicks }}</p>

    
    <button v-on:click="sube()">Pinia</button>
  </div>
</template>

<style >
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
