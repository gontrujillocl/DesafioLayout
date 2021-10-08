import Vue from "vue";
import Vuex from "vuex";
import { personajeModule } from "./personajes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    personajeList: personajeModule,
  },
});
