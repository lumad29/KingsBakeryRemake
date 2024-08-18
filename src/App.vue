<template>
  <v-app>
    <AppBar />
    <v-main>
      <RouterView />
      <!--esto renderiza lo del router-->
    </v-main>
  </v-app>
</template>

<script setup></script>

<style>
html {
  background-color: rgb(55, 71, 79);
}
.v-application {
  background-color: rgb(55, 71, 79) !important;
}
</style>
