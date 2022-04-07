import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Mensaje desde Vuex',
    myName: 'Benjamin',
    myLastName: 'Correa',
    responseApiBackend: [
      {
        id: 2001,
        name: "tarea 2001",
        isCompleted: true
      },
      {
        id: 2007,
        name: "tarea 2007",
        isCompleted: false
      },
      {
        id: 2030,
        name: "tarea 2030",
        isCompleted: true
      },
    ]
  },
  getters: {
    getFullName() {

      // return `${state.myName} ${state.myLastName} `
      return "Benjamin Correa";
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
