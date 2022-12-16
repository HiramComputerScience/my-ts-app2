<template>
  <v-app>
<v-main>
  <v-container>
    <v-row class="pageHeader">
    </v-row>
    <v-row>
      <v-col class="pageHeaderInset"></v-col>
    </v-row>
    <v-row >
      <v-col>
        <router-view :key="$route.fullPath"/>
      </v-col>
    </v-row>
</v-container>

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
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.pageHeader {
  background-color:gold;
  height: 30px;
  width: 75%;
}
.pageHeaderInset {
  background-color:darkorange;
  height: 30px;
  width:60%;
}
</style>