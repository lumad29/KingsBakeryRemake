<script setup>
// this allows navigation
import { useDisplay } from 'vuetify'

const router = useRouter()
const { smAndDown } = useDisplay()
function goBack() {
  router.go(-1)
}
</script>

<template>
  <div>
    <v-img
      src="/public/assets/our-cafe-3.jpg"
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

  <v-row>
    <v-col
      v-motion-slide-left :delay="80"
      :duration="1000" cols="12" lg="6" sm="12"
    >
      <div :class="{ 'mx-3': smAndDown, 'pa-10': !smAndDown }" class="my-3">
        <v-img src="/public/assets/our-cafe-4.jpg" />
      </div>
      <div />
    </v-col>
    <v-col v-motion-slide-right cols="12" lg="5" sm="12" :delay="80" :duration="1000">
      <v-container
        class="d-flex flex-column text-white"
        :class="{
          'align-center': smAndDown,
          'mt-8': !smAndDown,
          'pa-6': smAndDown,
        }"
      >
        <p class="my-3" style="font-size: 19px;">
          Visit our Cafe
        </p>
        <div class=" custom-font-size">
          <p>
            A perfect place to enjoy
          </p>
          <p class="d-flex" :class="{ 'justify-center': smAndDown, 'justify-start': !smAndDown }">
            our pastries
          </p>
        </div>
        <div class="py-5">
          <p style="font-size: 19px; font-weight: 300; line-height: 1.8;">
            Welcome to our cozy café, where the smell of freshly baked pastries invites you to relax and enjoy the moment. Grab a warm pastry, and pair it with a perfectly brewed coffee. Whether you're meeting up with friends or taking a quiet break, every visit brings a little comfort and a taste of something special.
          </p>
        </div>
        <v-btn variant="outlined" class="narrow-btn hover-white">
          Locations
        </v-btn>
      </v-container>
    </v-col>
  </v-row>

  <v-row>
    <v-col v-motion-slide-left cols="12" lg="6" sm="12" :delay="80" :duration="1000">
      <v-container
        class="d-flex flex-column text-white"
        :class="{
          'align-center': smAndDown,
          'mx-15': !smAndDown,
          'pa-6': smAndDown,
          'my-9': !smAndDown,
        }"
      >
        <p class="my-3" style="font-size: 19px;">
          Coworking
        </p>
        <div class="custom-font-size ">
          <p class="d-flex" :class="{ 'justify-center': smAndDown, 'justify-start': !smAndDown }">
            Grab a seat in our
          </p>
          <p class="d-flex" :class="{ 'justify-center': smAndDown, 'justify-start': !smAndDown }">
            Cokorwking
          </p>
          <div class="py-5">
            <p style="font-size: 19px; font-weight: 300; line-height: 1.8;">
              Enjoy our our cozy spot to get things done. Stay energized with fresh coffee and bakery treats. Whether you're working solo, meeting clients, or need a change of pace, we've got the perfect blend of comfort and productivity.
            </p>
          </div>
        </div>
      </v-container>
    </v-col>
    <v-col cols="12" lg="6" sm="12">
      <div :class="{ 'mx-3': smAndDown, 'pa-10': !smAndDown }">
        <v-img src="/public/assets/our-cafe-12.jpg" />
      </div>
    </v-col>
  </v-row>

  <v-row class="d-flex justify-center align-center ma-6">
    <v-col cols="12" lg="3" sm="12">
      <v-img src="/public/assets/our-cafe-6.jpg" height="300" cover />
    </v-col>
    <v-col cols="12" lg="3" sm="12">
      <v-img src="/public/assets/our-cafe-7.jpg" height="300" cover />
    </v-col>
    <v-col cols="12" lg="3" sm="12">
      <v-img src="/public/assets/our-cafe-11.jpg" height="300" cover />
    </v-col>
    <v-col cols="12" lg="3" sm="12">
      <v-img src="/public/assets/our-cafe-9.jpg" height="300" cover />
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

.hover-white:hover {
  background-color: white;
  color: black;
}
</style>
