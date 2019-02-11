import Vue from "vue";
import Vuex from "vuex";

import * as actions from "./actions";
import * as getters from "./getters";
import state from "./state";
import plugins from "./plugins";
import mutations from "./mutations";
import ui from "./modules/ui";
import todo from "./modules/todo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui,
    todo
  },
  state,
  actions,
  getters,
  mutations,
  plugins,
  strict: process.env.NODE_ENV !== "production"
});
