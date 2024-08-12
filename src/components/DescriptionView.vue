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
    img: '/public/assets/oven-logo.jpeg',
  },
  {
    title: 'Top quality Flour',
    subtitle: 'Crafted with premium flour for exceptional tast',
    img: '/public/assets/flour-logo.jpeg',
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
            ? 'border-b'
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
