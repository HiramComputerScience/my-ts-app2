import AuthenticationService from "@/services/authentication.service";
import LoginRequest from "@/models/authentication/LoginRequest";
import LoginResponse from "@/models/authentication/LoginRequest";
import UserDetailsResponse from "@/models/user/UserDetailsResponse";
import store from "@/store";
import { ActionContext, ActionTree, GetterTree, StoreOptions } from "vuex";

interface State {
  loginResponse: LoginResponse | null;
}
type Context = ActionContext<State, State>;
const AuthenticationStore:
  | StoreOptions<State>
  | GetterTree<object, LoginResponse>
  | Record<string, boolean | string>
  | ActionTree<Context, Promise<void>> = {
  namespaced: true,
  name: "loginResponse",
  state: {
    loginResponse: null as LoginResponse | null,
  },
  getters: {
    getLoginResponse(state: State): LoginResponse | null {
      return state.loginResponse;
    },
  },
  mutations: {
    LOGIN(state: State, loginResponse: LoginResponse): void {
      state.loginResponse = loginResponse;
    },

    LOGOUT(state: State): void {
      state.loginResponse = null;
    },
  },
  actions: {
    async login(context: Context, loginResponse: string): Promise<void> {
      context.commit("LOGIN", loginResponse);
    },

    async logout(context: Context): Promise<void> {
      try {
        const { data } = await AuthenticationService.logout();
        context.commit("LOGOUT", data);
        //store.commit("showSnackBar", "Successfully logged out!");
      } catch (error) {
        //store.commit("showSnackBar", "Failed to log out!");
      }
    },
  },
};

export default AuthenticationStore;
