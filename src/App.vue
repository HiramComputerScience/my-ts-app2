<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      :mobile-breakpoint="768"
      color="secondary"
    >
      <v-btn
        v-if="user"
        to="/profile"
        class="ma-2 text-h4 font-weight-bold"
        fab
        dark
        large
        color="primary"
        data-test="profile"
      >
        {{ user.user ? user.user.charAt(0).toUpperCase() : "" }}
      </v-btn>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          @click="userLogout(item.title)"
          :data-test="item.id"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark height="100">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="pa-0 ma-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-4 text-h4">{{ title }}</v-app-bar-title>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main
      ><router-view></router-view>
      <snack-bar />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "@/models";
import SnackBar from "@/components/shared/Snackbar.vue";

export default Vue.extend({
  components: { SnackBar },
  data: () => ({
    drawer: true,
    items: [{ title: "", icon: "", to: "", id: "" }],
    right: true,
  }),
  methods: {
    async userLogout(title: string) {
      if (title == "Logout") {
        this.$store.dispatch("authentication/logout");
        this.$store.dispatch("user/clearUser");
        this.items = [];
      }
    },
  },
  computed: {
    title(): string {
      return this.$store.getters.getAppTitle;
    },
    user: {
      get(): User | null {
        return this.$store.getters["user/getUser"];
      },
      set(): void {
        // this set method is not needed but cannot be empty and has to exist
      },
    },
  },
  watch: {
    user(val: User) {
      if (val) {
        this.items = [
          { title: "Home", icon: "mdi-home", to: "/", id: "home" },
          {
            title: "Client Management",
            icon: "mdi-account-tie",
            to: "/client-management",
            id: "client-management",
          },
          {
            title: "Role Management",
            icon: "mdi-account-convert",
            to: "/role-management",
            id: "role-management",
          },
          {
            title: "Logout",
            icon: "mdi-logout-variant",
            to: "/auth",
            id: "auth",
          },
        ];
      }
    },
  },
  created() {
    this.user = this.$store.getters["user/getUser"];
  },
});
</script>

<!--
<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
*/
</script>
-->