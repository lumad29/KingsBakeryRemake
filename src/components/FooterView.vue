<script setup>
import { ref } from 'vue'

// Declare reactive data using ref
// const icons = ref([
//   'mdi-instagram',
// ])
</script>

<template>
  <v-footer
    class="text-center d-flex flex-column justify-center img-footer" height="300"
  >
    <v-container class="bg-grey-custom rounded-lg font-weight-medium" fluid>
      <v-row no-gutters>
        <v-col>
          <div class="my-2">
            <router-link to="ourProducts" class="nav-link">
              Products
            </router-link>
          </div>
        </v-col>
        <v-col>
          <div class="my-2">
            <router-link to="locations" class="nav-link">
              Locations
            </router-link>
          </div>
        </v-col>
        <v-col>
          <v-btn icon="mdi-instagram" href="https://www.instagram.com" target="_blank" color="transparent" elevation="0" />

          <!-- <div>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              class="mx-4"
              variant="text"
            />
          </div> -->
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-divider></v-divider> -->
    <!-- <div>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div> -->
  </v-footer>
</template>

  <style scoped>
  .img-footer {
    background-image: url("/public/assets/footer-bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .bg-grey-custom {
    background-color: rgb(83, 106, 119, 0.7);
    color: white;
  }
/*
  p {
    font-size: 20px;
    font-weight: 400;
  } */
</style>
