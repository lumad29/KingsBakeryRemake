<script setup>
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay();

const delightsAndGifts = [
  {
    id: 1,
    image: '/public/assets/croissant.jpg',
    title: 'Explore our specialties',
    subtitle: 'Warm, delicious treats straight from the oven',
    btnText: 'Explore our Delights',
  },
  {
    id: 1,
    image: '/public/assets/cookies-box.jpg',
    title: 'Our Joy Boxes',
    subtitle: 'Gift our treats, or share with friends and family',
    btnText: 'See our Options',
  },
];
</script>

<template>
  <div>
    <v-img src="/assets/our-delights.png" />
  </div>
  <div class="px-2">
    <v-row>
      <v-col
        class="text-center"
        cols="12"
        md="6"
        v-for="product in delightsAndGifts"
        :key="product.id"
      >
        <v-img :src="product.image" class="text-white" height="100%" cover>
          <div class="fill-height d-flex flex-column justify-center">
            <h1 :class="smAndDown ? 'titleSmall' : 'titleBig'">
              {{ product.title }}
            </h1>
            <h2 :class="smAndDown ? 'subTitleSmall' : 'subTitleBig'">
              {{ product.subtitle }}
            </h2>
            <div>
              <v-btn class="mt-4">{{ product.btnText }}</v-btn>
            </div>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.background-grey {
  background-color: rgb(55, 71, 79);
}
/* .img-text-container {
  height: 100%;
  display: block;
  justify-content: center;
  padding-top: 30%;
} */
.cookie-box-img {
  height: 300px;
}

.titleSmall {
  font-size: 1.8rem;
}
.titleBig {
  font-size: 3rem;
}
.subTitleSmall {
  font-weight: 400;
}
.subTitleBig {
  font-weight: 500;
}
</style>
