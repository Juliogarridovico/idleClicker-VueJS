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
        { name: "clickUsuario", level: 1, costeInicial: 0 },
        { name: "upgrade_1", level: 0, precompra: 0, costeInicial: 1 },
        { name: "upgrade_2", level: 0, precompra: 0, costeInicial: 2 },
        { name: "upgrade_3", level: 0, precompra: 0, costeInicial: 3 },
        { name: "upgrade_4", level: 0, precompra: 0, costeInicial: 4 },
        { name: "upgrade_5", level: 0, precompra: 0, costeInicial: 5 },
        { name: "upgrade_6", level: 0, precompra: 0, costeInicial: 6 },
        { name: "upgrade_7", level: 0, precompra: 0, costeInicial: 7 },
        { name: "upgrade_8", level: 0, precompra: 0, costeInicial: 8 },
        { name: "upgrade_9", level: 0, precompra: 0, costeInicial: 9 },
        { name: "upgrade_10", level: 0, precompra: 0, costeInicial: 10 },
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
      //test.increment();
      let suma;
      suma = localStorage.getItem("clicks");
      ++suma;
      localStorage.setItem("clicks", suma);
      this.clicks = localStorage.getItem("clicks");
      console.log(suma);
    },
    mejoraJugador: function (mejora) {
      if (this.calcularPrecio(mejora) <= this.clicks) {
        let proximaMejora = mejora + 1;
        // this.mejoras[proximaMejora].precompra = 1;
        this.mejoras[mejora].level++;
        // this.mejoras[mejora].precompra = 0;
        this.clicks = this.clicks - this.calcularPrecio(mejora);
        localStorage.setItem("clicks", this.clicks);
      }
      // console.log(this.calcularPrecio(mejora));
    },
    incrementoAutomatico: function () {
      let clicks;
      let autoincremento;
      let incrementoTotal = 0;
      this.mejoras.forEach((mejora) => {
        if (mejora.level >= 1) {
          incrementoTotal =
            (incrementoTotal + this.calcularPrecio(mejora.level)) * 0.01;
        }
      });
       clicks = localStorage.getItem("clicks");
      autoincremento = parseFloat(clicks)+incrementoTotal
      clicks = localStorage.setItem("clicks", autoincremento);
      // clicks = localStorage.getItem("clicks");
      this.clicks = localStorage.getItem("clicks");
       console.log(autoincremento);
    },
    calcularPrecio: function (mejora) {
      //((Precio base/siguiente nivel)*1.07)+precio base+(siguiente nivel*1.07)
      //name: "clickUsuario", level: 1, costeInicial: 1
      // console.log("Test " + this.mejoras[mejora].level);
      let coste;
      coste =
        (this.mejoras[mejora].costeInicial / (this.mejoras[mejora].level + 1)) *
          1.07 +
        this.mejoras[mejora].costeInicial + 
        (this.mejoras[mejora].level + 1) * 1.07;
      return coste;
    },
  },
  created() {},
  mounted() {
    this.clicks = localStorage.getItem("clicks");
    setInterval(this.incrementoAutomatico, 1000);
  },
};
</script>

<template>
  <div class="theGame">
    <p></p>

    <p>You have {{ clicks }} Clicks</p>
    <p v-on:click="resetClicks()">reset clicks</p>

    <button v-on:click="sube()">Press this button to get clicks</button>
  </div>
  <div>
    <h1>You can use your clicks to improve your button</h1>
    <p>
      by improving the button you can get clicks automatically while you are
      playing
    </p>
    <ul id="bucle" v-for="(mejora, i) in mejoras" :key="i">
      <li @click="mejoraJugador(i)">
        level now: {{ mejora.level }} name: {{ mejora.name }} Cost of upgrade:
        {{ mejora.costeInicial }}
      </li>
    </ul>
  </div>
</template>

<style>
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
