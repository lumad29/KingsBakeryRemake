<script setup></script>

<template>
  <v-row no-gutters>
    <div class="background-grey">
      <v-col cols="1"></v-col>
    </div>

    <v-col>
      <v-img src="/assets/our-delights.png" />
    </v-col>
  </v-row>

  <v-row no-gutters align="center" justify="center">
    <v-col class="text-center">
      <div class="px-1 background-grey text-white">
        <v-img src="/public/assets/croissant.jpg">
          <h1>Explore our specialties</h1>
        </v-img>
      </div>
    </v-col>
    <v-col class="text-center">
      <div class="px-1 background-grey">
        <v-img src="/public/assets/croissant.jpg" />
      </div>
    </v-col>
  </v-row>
</template>
<style>
.background-grey {
  background-color: rgb(55, 71, 79) !important;
}
</style>
