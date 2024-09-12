<script setup>
// this allows navigation
import { useDisplay } from 'vuetify'

const router = useRouter()
const { smAndDown } = useDisplay()
// :class="{ 'custom-border-right': !smAndDown, 'custom-border-bottom': smAndDown }"
// smAndDown ? '' : 'pa-10'"
// 'pa-10': !smAndDown
function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="background-grey">
    <v-img
      src="/public/assets/our-cafe-3.jpg"
      height="400"
      cover
      max-height="320"
      style="opacity: 0.8"
    >
      <div class="fill-height d-flex align-center justify-center text-white">
        <v-icon class="pa-6" size="large" @click="goBack">
          mdi-arrow-left-drop-circle
        </v-icon>
        <h1>Our Cafe</h1>
      </div>
    </v-img>
  </div>
  <!-- <v-container class="d-flex justify-center text-white">
    <h2>live the experience</h2>
  </v-container> -->

  <v-row class="ma-5x">
    <v-col cols="12" lg="6" sm="12">
      <div :class="{ 'py-3': smAndDown, 'pa-10': !smAndDown }">
        <v-img src="/public/assets/our-cafe-4.jpg" />
      </div>
      <div />
    </v-col>
    <v-col cols="12" lg="5" sm="12">
      <v-container class="d-flex flex-column justify-start text-white mt-5">
        <p class=" custom-font-size bg-redx">
          A perfect place to enjoy<br> our pastries
        </p>
        <div class="py-5 bg-bluex">
          <p style="font-size: 20px; font-weight: 300; line-height: 2;">
            Every sip at our café is a unique experience, thanks to our carefully crafted recipes. Our expert baristas, masters of the coffee craft, bring tradition to life with each cup, skillfully replicating classic flavors. Pair your coffee with our freshly baked goods for a cozy and unforgettable café experience.
          </p>
        </div>
        <v-btn variant="outlined" color="warningx" class="narrow-btn">
          Stores
        </v-btn>
      </v-container>
    </v-col>
  </v-row>
</template>

<style>
  /* .custom-border {
    border-right: 1px solid rgba(245, 245, 245, 0.477);
  } */
  /* .custom-border-bottom {
    border-bottom: 1px solid rgba(245, 245, 245, 0.477);
  } */
  .custom-font-size {
    font-size: 28px;
    font-weight: 400;
  }
  .narrow-btn {
  width: 120px; /* Adjust width as needed */
}
</style>
