<template>
  <v-app>
    <div>
      <router-link :to="{ name: 'welcomePage' }">go there!</router-link> 
    </div>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default class App extends Vue {

}
</script>