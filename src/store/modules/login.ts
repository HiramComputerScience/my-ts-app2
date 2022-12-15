import LoginResponse from "@/models/authentication/LoginResponse";
import LoginRequest from "@/models/authentication/LoginRequest";
import store from "@/store";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import loginService from "@/services/login.service";

@Module({ store, dynamic: true, namespaced: true, name: "login" })
class LoginStore extends VuexModule {
  private loginResponse: LoginResponse | undefined = undefined;
  private loginRequest: LoginRequest | undefined = undefined;
  // eslint-disable-next-line
  private loaded: boolean = false;
  // eslint-disable-next-line
  private isPasswordCorrect: boolean = false;

  get getLoginRequest() {
    return this.loginRequest;
  }

  get getLoginResponse() {
    return this.loginResponse;
  }

  get getLoaded() {
    return this.loaded;
  }

  get getIsPasswordCorrect() {
    return this.isPasswordCorrect;
  }

  @Action({ commit: "SET_LOGIN"})
  public async requestLogin(loginRequest:LoginRequest): Promise<LoginResponse> {
    const response = await loginService.postLogin(loginRequest)
    .then(r=> r.data)
    .catch((error) => {
      const err = error.response.request.status + "-" +
      error.response.request.statusText;
      this.context.commit("SET_LOGIN_FAILED", err);
      return Promise.reject(err);
    });
    this.loginResponse = response;
    this.isPasswordCorrect = response.isPasswordCorrect;
    return response as LoginResponse;
  }
  
  @Mutation
  public SET_LOGIN(loginRequest:LoginRequest) {
    this.loginRequest = loginRequest;
    this.loaded = true;
  }
}
export default LoginStore;
