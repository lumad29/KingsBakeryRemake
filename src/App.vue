<script setup></script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <RouterView />
      <FooterView />
    </v-main>
  </v-app>
</template>

<style>
html {
  background-color: rgb(55, 71, 79);

}
.v-application {
  background-color: rgb(55, 71, 79) !important;
}
</style>
