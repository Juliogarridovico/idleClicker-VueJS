<script>
import { useCounterStore } from "@/stores/counter";

const test = useCounterStore();
export default {
  name: "theGame",
  data() {
    return {
      clicks:0,
      ganaciaSecundo:0,
      mejoras:[
        {name:'clickUsuario', level:0},
        {name:'mejora_1', level:0},
        {name:'mejora_2', level:0},
        {name:'mejora_3', level:0},
        {name:'mejora_4', level:0},
        {name:'mejora_5', level:0},
       
      ],
    };
  },
  computed: {},
  methods: {
    sube: function () {
      console.log(test.counter);
      test.increment();
      this.clicks = test.counter;
    },
    mejora: function(mejora){
      console.log(mejora)
      console.log("mejorando " + mejora)
    },
    mejoraJugador:function(nivel){
      console.log("ddd")
      console.log(nivel)
    },
    
  },
  created(){
    
    },
};
</script>

<template>
  <div class="theGame">
    <p>click: {{ clicks }}</p>
    <p>Ganancia por segundo: {{ganaciaSecundo}}</p>
    <p>nivel del click del usuario: {{mejoras[0].level}}</p>

    
    <button v-on:click="sube()">Pinia</button>
  </div>
  <div >
    
    <ul id="bucle" v-for="(mejora, i) in mejoras" :key="i">
      <li v-if="clicks>=i" @click="mejoraJugador(i)">{{mejora.name}}</li>
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