<template>
    <v-container fluid>
      <v-card max-width="800px">
        <v-toolbar dark color="primary">
          <v-toolbar-title>
            Login User Please!
          </v-toolbar-title>
        </v-toolbar>
        <v-flex xs12>
          <v-list-item>
            <v-list-item-content>
              <v-form ref="form">
                <v-text-field
                  v-model="email"
                  @keydown.enter.prevent
                  label="Enter Email (it will be your Username)"
                  prepend-icon="mdi-email"
                  id="login-email-input"
                />
                <v-text-field
                  v-model="password"
                  @keydown.enter.prevent
                  label="Enter Password"
                  prepend-icon="mdi-archive-lock"
                  id="login-password-input"
                />
              </v-form>
            </v-list-item-content>
          </v-list-item>  
        </v-flex>
        <v-flex xs12>
          <v-list-item>
            <v-list-item-content>
              <v-row>
                <v-col>
                  <v-btn
                    :disabled="!isValidButton"
                    color="primary"
                    right
                    @click="showAll"
                    id="login-button"
                    >Add Contact Info</v-btn
                  >
                </v-col>
                <v-col>
                  <v-btn
                    color="success"
                    rounded
                    left
                    @click="back2newUser"
                    id="back2newUser-button"
                    >Back to New User Registration</v-btn
                  >
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-flex>
    </v-card>
</v-container>
</template>

<script lang="ts">
import Vue from "vue";
import router from "@/router";
import Vuetify, { VSnackbar } from "vuetify/lib";
import LoginRequest  from "@/models"
import LoginResponse from "@/models";
import { namespace } from "vuex-class";
const login  = namespace("login");
Vue.use(Vuetify, {
  components: { VSnackbar },
});

export default class LoginUser extends Vue {

    isPasswordCorrect: boolean = false;
    email: string = "";
    password: string = "";
    loginResponse: LoginResponse | undefined = undefined;

    @login.Action
    public requestLogin!: (loginRequest:LoginRequest) => Promise<any>;

    public back2newUser() {
        router.push({ name: "newuser" });
    }

  get isValidButton(): boolean {
    return true;
    //return this.email != "" && this.password != "";
  }

  public showAll() {
    console.log("login and pword: " + this.login + ", " + this.password);
  }
  
  public async login(): Promise<void> {
    const loginRequest = new LoginRequest(this.password, this.email);

    this.loginResponse = await this.requestLogin(loginRequest);
    console.log("loginResponse.isPasswordCorrect: " +  this.loginResponse?.isPasswordCorrect);
  }

}
</script>