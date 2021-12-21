import { createStore } from "vuex";

export default createStore({
  state: {
    selectedView: {
      home: true,
      destination: false,
      crew: false,
      technology: false,
    },
    planetaryObjects: {
      moon: true,
      mars: false,
      europa: false,
      titan: false,
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
