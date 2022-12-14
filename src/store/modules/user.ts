import User from "@/models/user/User";

import {
  ActionContext,
  ActionTree,
  GetterTree,
  ModuleTree,
  StoreOptions,
} from "vuex";

import { LoginRequest, LoginResponse } from "@/models";

export interface UserState {
  user: User | null;
}

type Context = ActionContext<UserState, UserState>;

const UserStore:
  | StoreOptions<UserState>
  | GetterTree<string, User | User[]>
  | Record<string, boolean | string>
  | ActionTree<Context, Promise<void>>
  | ModuleTree<UserState> = {
  namespaced: true,
  name: "user",
  state: {
    user: null as User | null,
  },
  getters: {
    getUser(state: UserState): User | null {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state: UserState, user: User): void {
      state.user = user;
    },
    setUserFromLogin(loginRequest: LoginRequest, loginResponse: LoginResponse): void {
        User user = new User(loginResponse.userDetails.firstName, loginResponse.userDetails.lastName, loginResponse.userDetails.email, loginRequest.password, loginResponse.userDetails.userId);
        
    }

    CLEAR_USER(state: UserState): void {
      state.user = null;
    },
  },
  actions: {
    clearUser(context: Context): void {
      context.commit("CLEAR_USER");
    },
  }
}

export default UserStore;
