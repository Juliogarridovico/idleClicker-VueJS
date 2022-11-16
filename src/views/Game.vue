<script>
import { useCounterStore } from "@/stores/counter";

const test = useCounterStore();
export default {
  name: "theGame",
  data() {
    return {
      clicks: 0,
      ganaciaSecundo: 0,
      mejoras: [
        { name: "clickUsuario", level: 1 },
        { name: "mejora_1", level: 0 },
        { name: "mejora_2", level: 0 },
        { name: "mejora_3", level: 0 },
        { name: "mejora_4", level: 0 },
        { name: "mejora_5", level: 0 },
      ],
    };
  },
  computed: {},
  methods: {
    resetClicks() {
      localStorage.setItem("clicks", 0);
      this.clicks = 0;
    },
    sube: function () {
      test.increment(this.mejoras[0].level);
      localStorage.setItem("clicks", test.counter);
      this.clicks = test.counter;
    },
    mejoraJugador: function (mejora) {
      let coste = null;
      console.log(this.mejoras[mejora].level);
      coste = (this.mejoras[mejora].level + 1 + mejora) * 1.05;
      console.log("coste" + coste);
      if (coste <= this.clicks) {
        this.mejoras[mejora].level++;
        this.clicks = this.clicks - coste;
        console.log("mejorando");
      }
    },
  },
  created() {},
  mounted() {
    console.log("pienso luego existo");
    this.clicks = localStorage.getItem("clicks");
  },
};
</script>

<template>
  <div class="theGame">
    <p>click: {{ clicks }}</p>
    <p v-on:click="resetClicks()">reset clicks</p>
    <p>Ganancia por segundo: {{ ganaciaSecundo }}</p>
    <p>nivel del click del usuario: {{ mejoras[0].level }}</p>

    <button v-on:click="sube()">Pinia</button>
  </div>
  <div>
    <ul id="bucle" v-for="(mejora, i) in mejoras" :key="i">
      <li v-if="clicks >= i" @click="mejoraJugador(i)">
        {{ mejora.name }} ({{ mejora.level }})
      </li>
    </ul>
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
// 🥳 