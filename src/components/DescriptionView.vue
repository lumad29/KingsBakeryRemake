<script setup>
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay();
// useAlgo => composables. todos los composables son funciones!

const descriptionItems = [
  {
    title: 'Award-Winner',
    subtitle: 'Twice honored as Bakery of the Year',
    img: '/assets/award-logo.jpeg',
  },
  {
    title: 'Baked with Love',
    subtitle: 'Feel the warmth of our oven-baked creations',
    img: '/assets/oven-logo.jpeg',
  },
  {
    title: 'Top quality Flour',
    subtitle: 'Crafted with premium flour',
    img: '/assets/flour-logo.jpeg',
  },
];
</script>
<template>
  <v-card color="#37474F" class="rounded-0 py-16" flat>
    <v-row align="center" justify="center">
      <!-- First Column -->
      <v-col
        cols="12"
        md="4"
        class="text-center mb-4 border-surface-light border-opacity-100"
        :class="
          index !== descriptionItems.length - 1 && smAndDown
            ? 'border-wrapper'
            : 'border-e'
        "
        v-for="(item, index) in descriptionItems"
        :key="item.title"
      >
        <div class="bg-yellowx pa-2 d-flex justify-center">
          <div class="bg-bluex pa-2">
            <v-img :src="item.img" height="100" class="mb-4 mx-auto" />
            <h2>{{ item.title }}</h2>
            <p>{{ item.subtitle }}</p>
            <!-- <p>{{ index === descriptionItems.length - 1 }}</p> -->
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<style scoped>
.border-wrapper {
  position: relative; /* This makes the wrapper a reference point for the line */
  display: flex; /* Flexbox is a tool to center things */
  justify-content: center; /* Centers the line inside the wrapper */
}

.border-wrapper::after {
  content: ''; /* Creates an empty line */
  position: absolute; /* Positions the line relative to the wrapper */
  bottom: 0; /* Puts the line at the bottom of the wrapper */
  width: 50%; /* Makes the line shorter or longer, adjust as needed */
  border-bottom: 4px solid #b0bec5; /* Makes the line visible with color and thickness */
}
</style>
