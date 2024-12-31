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
      src="/public/assets/london-home.jpg"
      cover
      max-height="320"
    >
      <div class="fill-height d-flex align-center justify-center text-white">
        <v-icon class="pa-6" size="large" @click="goBack">
          mdi-arrow-left-drop-circle
        </v-icon>
        <h1>About Us</h1>
      </div>
    </v-img>
  </div>

  <v-row>
    <v-col
      v-motion-slide-left :delay="80"
      :duration="1000" cols="12" lg="6" sm="12"
    >
      <div :class="{ 'mx-3': smAndDown, 'pa-10': !smAndDown }" class="my-3">
        <v-img src="/public/assets/bakery-owners-2.jpeg" />
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
        <div class=" custom-font-size">
          <p>
            Who We Are
          </p>
        </div>
        <div class="py-5">
          <p style="font-size: 19px; font-weight: 300; line-height: 1.8;">
            Established in 2012 in the heart of London, King's Bakery began in the Kitchen of Emma and her
            father, Arthur. They share a passion for baking, so they have dedicated themselves to crafting fresh,
            handmade treats using only the finest ingredients. From sweet delights to savory bites,
            every creation at King's Bakery is made with care and love, delivering a little piece of joy in every bite.
          </p>
        </div>
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
        <div class="custom-font-size ">
          <p class="d-flex" :class="{ 'justify-center': smAndDown, 'justify-start': !smAndDown }">
            Meet our Amazing
          </p>
          <p class="d-flex" :class="{ 'justify-center': smAndDown, 'justify-start': !smAndDown }">
            Team
          </p>
          <div class="py-5">
            <p style="font-size: 19px; font-weight: 300; line-height: 1.8;">
              In 2015, their dream blossomed into a vibrant team of dedicated bakers who pour their hearts into every creation.
              Together, they’ve crafted more than just baked goods—they’ve built a community. With the opening of their first
              café and bakery, their journey came full circle, welcoming everyone to experience the warmth, love,
              and tradition baked into every bite. Now with over five locations across London, you’re never far from one of
              their cozy cafés. Find your nearest store and treat yourself—and others—to a delightful coffee and more!
            </p>
          </div>
        </div>
      </v-container>
    </v-col>
    <v-col cols="12" lg="6" sm="12">
      <div :class="{ 'mx-3': smAndDown, 'pa-10': !smAndDown }">
        <v-img src="/public/assets/bakers-team.jpg" />
      </div>
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
