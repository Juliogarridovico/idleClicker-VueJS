import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    isEvenOrOdd: (state) => (state.counter % 2 ? "Odd" : "Even"),
  },
  actions: {
    increment(click) {
      console.log("estoy");
      this.counter += click;
    },
  },
});
