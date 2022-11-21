import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    
  }),
  getters: {
    
  },
  actions: {
    increment() {
      this.counter=+1;
      localStorage.setItem("clicks", this.counter);
    },
  },
});