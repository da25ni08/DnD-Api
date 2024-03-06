import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state:()=>({
    count: "0",
    next: "",
    previous: "",
    results: [],
  }),
  actions:{

    setApiData(count, next, previous, results) {
      this.count = count
      this.next = next
      this.previous = previous
      this.results = results
    },

    async fetchTo(ext, params = "") {
      let urlApi = "https://api.open5e.com/" + ext + "/?" + params
      let resultado = [];
      await fetch(urlApi).then((response)=> response.json()).then((data) => resultado = data);
      this.count = resultado.count;
      this.next = resultado.next;
      this.previous = resultado.previous;
      this.results = resultado.results;
      return resultado
    }


  }
  
})
