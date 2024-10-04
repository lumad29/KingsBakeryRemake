<script setup></script>

<template>
  <v-row class="contact-view d-flex align-start">
    <v-col cols="12" lg="4" sm="12">
      <v-img src="/public/assets/our-cafe-13.jpg" class="ml-3 mt-15" />
    </v-col>
    <v-col cols="12" lg="5" sm="12" class="text-white">
      <v-container class="mt-15">
        <p style="font-size: 22px; font-weight: 400; line-height: 1.8;" class="mt-15">
          London has great cozy spots to share special moments and take a break, whether it's for breakfast, tea, or any time of the day, while enjoying the delicious smell of freshly baked pastries.
        </p>
        <p style="font-size: 22px; font-weight: 500; line-height: 1.8;" class="my-4">
          Check out our cozy Stores
        </p>
        <v-btn>Locations</v-btn>
      </v-container>
    </v-col>
    <v-col cols="12" lg="3" sm="12">
      <v-img src="/public/assets/our-cafe-14.jpg" />
    </v-col>
  </v-row>
</template>

<style>
.contact-view {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #37474f;
  color: white;
}
</style>
