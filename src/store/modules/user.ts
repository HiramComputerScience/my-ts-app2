import User from "@/models/user/User";
import store from "@/store";
import {
    Action,
    getModule,
    Module,
    Mutation,
    VuexModule,
  } from "vuex-module-decorators";
import { LoginRequest, LoginResponse, UserDetailsRequest, UserDetailsResponse } from "@/models";
import userService from "@/services/user.service";

@Module({ store, dynamic: true, namespaced: true, name: "user" })
class UserStore extends VuexModule {
  // eslint-disable-next-line
    private user: User | undefined = undefined;
    // eslint-disable-next-line
    private loaded: boolean = false;

    get getUser() {
        return this.user;
    }

    get getLoaded() {
        return this.loaded;
    }

    @Action({commit: "SET_USER"})
    public setUserFromLogin(loginRequest: LoginRequest, loginResponse: LoginResponse): User {
        this.user = new User(loginResponse.userDetails.firstName, loginResponse.userDetails.lastName, loginResponse.userDetails.email, loginRequest.password, loginResponse.userDetails.userId);
    return this.user;
    }

    @Action
    public async setNewUser(userDetailsRequest: UserDetailsRequest): Promise<User> {
        const response = await userService.postUser(userDetailsRequest)
        .then(r => r.data).catch(
            (error) => {
              const err = error.response.request.status +
              " - " +
              error.response.request.statusText;
              this.context.commit(
                "SET_USER_FAILED",
                err
              );
              return Promise.reject(err);
            }
          );
          this.user = new User(userDetailsRequest.firstName, userDetailsRequest.lastName, userDetailsRequest.email, userDetailsRequest.password, response.userId);
        return this.user;
    }

    @Mutation
    public SET_USER(user:User) {
        this.user = user;
        this.loaded = true;
    }

    @Mutation
    public SET_NEW_USER(user:User){
        this.user = user;
        this.loaded = true;
    }
}

export default UserStore;
