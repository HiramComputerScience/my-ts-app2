import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import LoginStore from './store/modules/login';
import UserStore from './store/modules/user';
import { getModule, VuexModule } from "vuex-module-decorators";

getModule(LoginStore);
getModule(UserStore);
Vue.config.productionTip = false;

export const vm = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
