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
  </v-app>
</template>

<style>
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
