<template>
    <div>
      <!--<h1>{{ msg }}</h1> -->
      <h1>Welcome to the App!</h1>
    <template>
      <div>
        To use the app, you'll need to
        <router-link to="loginForm">
          Login
        </router-link>
        or
        <router-link to="newUser">
          Register
        </router-link>
      </div>
    </template>
    </div>
</template>