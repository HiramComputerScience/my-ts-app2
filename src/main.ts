import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from "axios";
import LoginStore from './store/modules/login';
import UserStore from './store/modules/user';
import { getModule, VuexModule } from "vuex-module-decorators";

getModule(LoginStore);
getModule(UserStore);

Vue.config.productionTip = false;
axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'http://localhost:8085/';

export const vm = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
