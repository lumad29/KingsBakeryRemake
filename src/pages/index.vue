<script setup>
import { useGoTo } from 'vuetify'
import OurProducts from './ourProducts.vue'

// const route = useRoute() // composable de router

// watch(route, (newValue, oldValue) =>
//   setTimeout(() => {
//     linkToPage(newValue.hash);
//   }, 500)
// );
// linkToPage(link.to)

// const goTo = useGoTo()

// const linkToPage = (targetId) => {
//   goTo(targetId);
// };
// color #37474F
</script>

<template>
  <v-card
    min-height="100"
    max-height="100vh"
    class="fill-height rounded-0 home-view text-white "
    color="transparent"
    flat
  >
    <v-row class="mt-16" align="start" justify="center">
      <v-col class="pa-8 ma-8" cols="12" md="8">
        <div class="ml-6">
          <h1 class="my-4 main-title">
            We are bread experts
          </h1>

          <p class="custom-font-size-2">
            Enjoy freshly baked bread at our bakery! From hearty whole grain
            loaves to fluffy baguettes, we offer a wide variety to satisfy your
            cravings. Whether it' s a daily loaf or a special treat, we've got
            you covered!
          </p>
        </div>
      </v-col>
    </v-row>
  </v-card>
  <DescriptionView />
  <OurDelightsView />
  <OurCafeExperience />
  <ContactView id="target-contact" />
</template>

<style scoped>
.home-view {
  /* height: 100vh; */
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #37474f;
  color: white;
  /* background-image: url('/src/assets/bg-bread-2.jpeg'); linear-gradient(rgba(81, 81, 81, 0.034), rgba(66, 65, 65, 0.624)),*/
  background-image: url('/assets/bg-bread-2.jpeg');
  background-size: cover;
  background-position: right;
  position: relative;
}

.custom-font-size {
  font-size: 3rem;
  font-family: 'Roboto', sans-serif;

}

.custom-font-size-2 {
  /* font-family: "Roboto", sans-serif; */
  font-weight: 450;
  line-height: 2.2;
  font-size: 1.5rem;
  /* color: #d4d8da; */
font-weight: 500;
}
.main-title {
  font-size: 3rem;

}
</style>
