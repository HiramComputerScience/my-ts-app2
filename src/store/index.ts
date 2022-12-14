/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import Vuex, { GetterTree, StoreOptions } from "vuex";
import AuthenticationStore from "@/store/modules/authentication";
import ClientStore from "@/store/modules/client";
import { RoleStore } from "@/store/modules/role";
import { SnackBarData } from "@/models";
import UserStore from "@/store/modules/user";
import { ActionContext } from "vuex";

Vue.use(Vuex);

export interface BaseState {
  appTitle: string;
  snackbar: SnackBarData;
}

type Context = ActionContext<BaseState, BaseState>;

export const store = ():
  | StoreOptions<BaseState>
  | GetterTree<string, string | SnackBarData>
  | Record<string, any> => ({
  state: {
    appTitle: process.env.VUE_APP_TITLE as string,
    snackbar: {
      show: false,
      text: ``,
    } as SnackBarData,
  },
  getters: {
    getAppTitle: (state: BaseState): string => {
      return state.appTitle;
    },

    getSnackBar: (state: BaseState): SnackBarData => {
      return state.snackbar;
    },
  },
  actions: {
    setSnackbar(context: Context, snackbar: SnackBarData) {
      this.state.snackbar = snackbar;
    },
  },
  mutations: {
    showSnackBar(state: BaseState, text: string) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },

    hideSnackBar(state: BaseState) {
      state.snackbar.show = false;
    },
  },
  modules: {
    authentication: AuthenticationStore,
    client: ClientStore,
    role: RoleStore,
    user: UserStore,
  },
});

export default new Vuex.Store(store());
