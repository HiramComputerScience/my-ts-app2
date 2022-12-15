<template>
    <v-container fluid>
      <v-card max-width="800px">
        <v-toolbar dark color="primary">
          <v-toolbar-title>
            Welcome New User
          </v-toolbar-title>
        </v-toolbar>
        <v-flex xs12>
            <v-form ref="form">
            <v-text-field
                  v-model="firstName"
                  @keydown.enter.prevent
                  label="Enter First Name"
                  prepend-icon="mdi-account-question"
                />
            </v-form>
            <v-form ref="form">
                <v-text-field
                  v-model="lastName"
                  @keydown.enter.prevent
                  label="Enter Last Name"
                  prepend-icon="mdi-account-question-outline"
                />
              </v-form>
              <v-form ref="form">
                <v-text-field
                  v-model="email"
                  @keydown.enter.prevent
                  label="Enter Email (it will be your Username)"
                  prepend-icon="mdi-email"
                />
              </v-form>
              <v-form ref="form">
                <v-text-field
                  v-model="password"
                  @keydown.enter.prevent
                  label="Enter password"
                  prepend-icon="mdi-archive-lock"
                />
              </v-form>
            
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
                    @click="createNewUser"
                    >Create new User!</v-btn
                  >
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
            </v-list-item-content>
          </v-list-item>
        </v-flex>
    </v-card>
</v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Vuetify, { VSnackbar } from "vuetify/lib";
import router from '@/router';
import { namespace } from "vuex-class";
import {Component, Prop} from 'vue-property-decorator';
import { UserDetailsRequest, UserDetailsResponse } from "@/models";
const user  = namespace("user");
Vue.use(Vuetify, {
  components: { VSnackbar },
});

@Component
export default class NewUser extends Vue {
      // eslint-disable-next-line 
    private email: string = "";
        // eslint-disable-next-line 
    private password:string = "";
        // eslint-disable-next-line 
    private firstName:string = "";
        // eslint-disable-next-line 
    private lastName:string = "";
    private userDetailsResponse: UserDetailsResponse | undefined = undefined;

    @user.Action
    public setNewUser!: (userDetailsRequest: UserDetailsRequest) => Promise<any>;

    public back2Login() {
        this.$router.push({ name: "loginuser" });
    }

  get isValidButton(): boolean {
    return this.email != "" && this.password != "" && this.firstName != "" && this.lastName != "";
  }
  
  public async createNewUser(): Promise<void> {
    const userDetailsRequest = new UserDetailsRequest(this.firstName, this.lastName, this.email, this.password);

    this.userDetailsResponse = await this.setNewUser(userDetailsRequest);
    console.log("userDetailsResponse.userId: " +  this.userDetailsResponse?.userId);
  }

}

</script>
