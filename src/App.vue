<script setup>
import { getUserState } from '@/firebase'

onMounted(async () => {
  const isAuthenticated = await getUserState()
  console.log(isAuthenticated)
})
</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <RouterView />
    </v-main>
    <FooterView />
    <v-btn icon="mdi-whatsapp" color="green" class="wsp-btn text-white" href="https://web.whatsapp.com/" target="_blank" size="large" />
  </v-app>
</template>

<style>
.wsp-btn {
  position: fixed; /* Position the button fixed to the bottom-right corner */
  bottom: 8rem; /* Offset from the bottom */
  right: 2rem; /* Offset from the right */
  z-index: 1; /*Ensure the button appears above other elements*/
}

html {
  background-color: rgb(55, 71, 79);

}
.v-application {
  background-color: rgb(55, 71, 79) !important;
}

body {
    overflow-x: hidden;
  }
</style>
