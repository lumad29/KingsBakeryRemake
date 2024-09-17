<script setup>
import { useDisplay } from 'vuetify'

const router = useRouter()

const { smAndDown } = useDisplay()

function goBack() {
  router.go(-1)
}

const mapUrl
= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39730.750301540305!2d-0.15085723140336946!3d51.51006233253554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1726537329362!5m2!1sen!2sus'
// :class="{
//       'align-center': smAndDown,
//       'mt-8': !smAndDown,
//       'pa-6': smAndDown,
//     }"

const mapData = [
  {
    id: 1,
    neighborhood: 'London Bridge',
    address: '20 Queen Elizabeth St, London SE1 2RJ, UK',
  },
  {
    id: 2,
    neighborhood: 'Soho',
    address: '20 Brewer St, London W1F 0SL, UK',
  },
  {
    id: 3,
    neighborhood: 'Clapham',
    address: '10-12 Old Town, London SW4 0JY, UK',
  },
  {
    id: 4,
    neighborhood: 'Hampstead',
    address: 'Olave Centre, 12C Lyndhurst Rd, London NW3 5PQ, UK',
  },
  {
    id: 5,
    neighborhood: 'Cricklewood',
    address: '3 Wren Ave, London NW2 6UG, UK',
  },
]
</script>

<template>
  <div>
    <v-img
      src="/assets/bread-shop-1.png"
      cover
      max-height="320"
      style="opacity: 0.8"
    >
      <div class="fill-height d-flex align-center justify-center text-white">
        <v-icon class="pa-6" size="large" @click="goBack">
          mdi-arrow-left-drop-circle
        </v-icon>
        <h1>Locations</h1>
      </div>
    </v-img>
  </div>

  <v-container
    class="d-flex flex-column text-white justify-center align-center text-center px-15 my-5"
  >
    <p style="font-size: 19px; font-weight: 300; line-height: 1.8;">
      We’re a bakery focused on crafting fresh, handmade treats with the best ingredients.
      Every bite is made with care to bring you something special, whether sweet or savory.
    </p>
  </v-container>

  <v-row :class="{ 'ma-15': !smAndDown, 'ma-8': smAndDown }">
    <v-col cols="12" lg="6" sm="12">
      <div v-for="location in mapData" :key="location.id" class="text-white">
        <h3 class="my-4 py-2 dotted-container">
          <span class="text-content">{{ location.neighborhood }}</span>
          <span class="dotted-line text" />
        </h3>
        <p>
          {{ location.address }}
        </p>
      </div>
    </v-col>
    <v-col class="bg-redx">
      <v-container class="d-flex align-center justify-center">
        <iframe
          width="600"
          height="500"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          :src="mapUrl"
        />
      </v-container>
    </v-col>
  </v-row>
</template>

<style>
.dotted-container {
  display: flex;            /* Use flexbox for layout */
  align-items: center;      /* Center items vertically */
  width: 100%;              /* Ensure it takes the full width of the parent */
}

.text-content {
  flex-shrink: 0;           /* Prevent text from shrinking */
}

.dotted-line {
  flex-grow: 1;             /* Allows the dotted line to take the remaining space */
  border-bottom: 2px dotted #fff; /* Dotted line style */
  margin-left: 10px;        /* Space between text and dotted line */
}
</style>
