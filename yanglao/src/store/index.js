import { createStore } from "vuex";

import login from "./modules/login";
import register from "./modules/register"
import home from "./modules/home"
import demand from "./modules/demand"

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    register,
    home,
    demand
  }
});
