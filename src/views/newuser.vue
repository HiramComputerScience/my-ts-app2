<template>
    <v-container >
        <v-toolbar dark color="primary">
          <v-toolbar-title>
            Welcome New User
          </v-toolbar-title>
        </v-toolbar>
      <v-form>
        <v-row>
          <v-col>
              <v-text-field
                  v-model="firstName"
                  label="Enter First Name"
                  prepend-icon="mdi-account-question"
                  id="firstname-new"
                />
              </v-col>
          </v-row>
          <v-row>
            <v-col>
                <v-text-field
                  v-model="lastName"
                  label="Enter Last Name"
                  prepend-icon="mdi-account-question-outline"
                  id="lastname-new"
                ></v-text-field>
              </v-col>
          </v-row>
          <v-row>
            <v-col>
                <v-text-field
                  v-model="email"
                  label="Enter Email (it will be your Username)"
                  prepend-icon="mdi-email"
                  id="email-new"
                ></v-text-field>
              </v-col>
          </v-row>
          <v-row>
            <v-col>
                <v-text-field
                  v-model="password"
                  label="Enter password"
                  prepend-icon="mdi-archive-lock"
                  id="password-new"
                ></v-text-field>
              </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn
                    color="primary"
                    right
                    @click="showAll"
                    >Create new User!</v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    color="success"
                    rounded
                    left
                    @click="back2Login"
                    >Back to User Login</v-btn
                  >
                </v-col>
              </v-row>
      </v-form>
</v-container>
</template>

<script lang="ts">
import Vue from "vue"
import Vuetify, { VSnackbar } from "vuetify/lib";
import router from '@/router';
import { namespace } from "vuex-class";
import {Component} from 'vue-property-decorator';
import UserDetailsRequest from "@/models";
import UserDetailsResponse from "@/models";
const user  = namespace("user");
Vue.use(Vuetify, {
  components: { VSnackbar },
});

export default class NewUser extends Vue {
    private email: string = "a";
    private password:string = "b";
    private firstName:string = "c";
    private lastName:string = "d";
    private userDetailsResponse: UserDetailsResponse | undefined = undefined;


    @user.Action
    public setNewUser!: (userDetailsRequest: UserDetailsRequest) => Promise<any>;

    public back2Login() {
        router.push({ name: "loginuser" });
    }

  get isValidButton(): boolean {
    let notBLank = (this.email != "" && this.password != "" && this.firstName != "" && this.lastName != "");
    console.log("notBLank is " + notBLank);
    return notBLank;
  }
  
  public showAll() {
    console.log("firstname, lastname: " + this.firstName + ", " + this.lastName);
  }

  public async createNewUser(): Promise<void> {
    const userDetailsRequest = new UserDetailsRequest(this.firstName, this.lastName, this.email, this.password);

    this.userDetailsResponse = await this.setNewUser(userDetailsRequest);
    console.log("userDetailsResponse.userId: " +  this.userDetailsResponse?.userId);
  }

}

</script>
