import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import moduleA from "./modules/moduleA";

export default new Vuex.Store({
  modules: {
    moduleA
  },
  state: {
    count: 5,
    mapCount: 10
  },
  getters: {},
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    mapincrement: state => state.mapCount++,
    mapdecrement: state => state.mapCount--
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    },
    mapincrement(context) {
      context.commit("mapincrement");
    }
  }
});
