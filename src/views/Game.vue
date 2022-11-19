<script>
import { useCounterStore } from "@/stores/counter";

const test = useCounterStore();
export default {
  name: "theGame",
  data() {
    return {
      clicks: 0,
      clicksTotales: 0,
      ganaciaSecundo: 0,
      mejoras: [
        { name: "clickUsuario", level: 1, costeInicial: 1 },
        { name: "mejora_1", level: 0, precompra: 0, costeInicial: 1 },
        { name: "mejora_2", level: 0, precompra: 0, costeInicial: 2 },
        { name: "mejora_3", level: 0, precompra: 0, costeInicial: 3 },
        { name: "mejora_4", level: 0, precompra: 0, costeInicial: 4 },
        { name: "mejora_5", level: 0, precompra: 0, costeInicial: 5 },
        { name: "mejora_6", level: 0, precompra: 0, costeInicial: 6 },
        { name: "mejora_7", level: 0, precompra: 0, costeInicial: 7 },
        { name: "mejora_8", level: 0, precompra: 0, costeInicial: 8 },
        { name: "mejora_9", level: 0, precompra: 0, costeInicial: 9 },
        { name: "mejora_10", level: 0, precompra: 0, costeInicial: 10 },
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
      localStorage.setItem("clicks", test.clicksTotales);
      this.clicksTotales = test.clicksTotales;
      this.clicks = test.counter;
    },
    mejoraJugador: function (mejora) {
          
      if (this.calcularPrecio(mejora) <= this.clicks) {
        let proximaMejora = mejora + 1;
        this.mejoras[proximaMejora].precompra = 1;
        this.mejoras[mejora].level++;
        this.mejoras[mejora].precompra = 0;
        this.clicks = this.clicks - this.calcularPrecio(mejora)
      }
     console.log(this.calcularPrecio(mejora))
    },
    incrementoAutomatico: function () {
      this.clicks = this.clicks * 1.01;
      let incrementoTotal =0
      this.mejoras.forEach((mejora) => {
        if (mejora.level > 0) {
          //
        }
      });
    },
    calcularPrecio:function(mejora){
      //((Precio base/siguiente nivel)*1.07)+precio base+(siguiente nivel*1.07)
      //name: "clickUsuario", level: 1, costeInicial: 1 
      // console.log("Test " + this.mejoras[mejora].level); 
      let coste 
      coste =((this.mejoras[mejora].costeInicial/(this.mejoras[mejora].level+1))*1.07)+this.mejoras[mejora].costeInicial+((this.mejoras[mejora].level+1)*1.07);
      return coste;
    },
  },
  created() {},
  mounted() {
    console.log("pienso luego existo");
    this.clicks = localStorage.getItem("clicks");
    this.clicksTotales = localStorage.setItem("clicks", test.clicksTotales);
    setInterval(this.incrementoAutomatico, 1000);
  },
};
</script>

<template>
  <div class="theGame">
    <p>Clicks totales: {{ clicksTotales }}</p>
    <p>click: {{ clicks }}</p>
    <p v-on:click="resetClicks()">reset clicks</p>
    <p>Ganancia por segundo: {{ ganaciaSecundo }}</p>
    <p>nivel del click del usuario: {{ mejoras[0].level }}</p>

    <button v-on:click="sube()">Pinia</button>
  </div>
  <div>
    <ul id="bucle" v-for="(mejora, i) in mejoras" :key="i">
      <!-- <li v-if="mejora.level  >= (mejoras[i].level)+0" @click="mejoraJugador(i)">
        {{ mejora.name }} ({{ mejora.level }})
        test {{(mejoras[i].level)+1}}
      </li> -->
      <li v-if="mejora.level > 0" @click="mejoraJugador(i)">
        {{ mejora.name }} ({{ mejora.level }})
      </li>
      <li v-if="mejora.precompra == 1" @click="mejoraJugador(i)">
        test: {{ mejora.name }} ({{ mejora.level }})
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