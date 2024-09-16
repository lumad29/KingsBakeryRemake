<script setup>
const router = useRouter()
function goBack() {
  router.go(-1)
}

// :class="{
//       'align-center': smAndDown,
//       'mt-8': !smAndDown,
//       'pa-6': smAndDown,
//     }"
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
  <v-row class="mx-10">
    <v-col class="bg-blue" cols="12" lg="6" sm="12">
      <div>
        <h3 class="my-4 py-2">
          Leroma Gauss - - - - - - - - - - - - - -
        </h3>
        <p>
          Av. Carlos Federico Gauss 5619 | Zona Norte, Córdoba | +54 9 351 6594321
        </p>
      </div>
      <div>
        <h3 class="my-4 py-2">
          Leroma Gauss - - - - - - - - - - - - - -
        </h3>
        <p>Av. Carlos Federico Gauss 5619 | Zona Norte, Córdoba | +54 9 351 6594321</p>
      </div>
    </v-col>
    <v-col class="bg-red">
      map
    </v-col>
  </v-row>
</template>

<!-- <template>
  <v-card
    min-height="100"
    max-height="100%"
    class="fill-heightx rounded-0 pt-5"
    color="#37474F"
    flat
  >
    <v-row class="mt-16" align="start" justify="center">
      <v-col
        v-motion-slide-visible-left
        cols="11"
        md="5"
        :delay="80"
        :duration="1000"
      >

        <component :is="h1">
          Find your favorite store
        </component>

        <div class="mt-4">
          <p class="custom-font">
            Enjoy the comforting aroma of freshly baked bread at our bakeries,
            open 24 hours a day, every day of the week so you can enjoy warm,
            delicious bread whenever you want.
            <br>
            Pick your most convenient store, we are all over London!
          </p>
          <v-row>
            <v-col class="my-10">
              <ul class="list-icons">
                <li>
                  <v-icon>mdi-map-marker</v-icon>
                  <span class="text-margin" />
                  Elizabeth St
                </li>
                <li>
                  <v-icon>mdi-map-marker</v-icon>
                  <span class="text-margin" />
                  20 Brewer Street
                </li>
                <li>
                  <v-icon>mdi-map-marker</v-icon>
                  <span class="text-margin" />
                  10-12 Old Town
                </li>
                <li>
                  <v-icon>mdi-map-marker</v-icon>
                  <span class="text-margin" />
                  12C Lyndhurst Rd
                </li>
                <li>
                  <v-icon>mdi-map-marker</v-icon>
                  <span class="text-margin" />
                  3 Wren Ave
                </li>
              </ul>
            </v-col>
            <v-col class="my-10">
              <ul class="list-icons">
                <li>
                  <v-icon>mdi-map-marker</v-icon>
                  <span class="text-margin" />
                  612 Lordship
                </li>
                <li>
                  <v-icon>mdi-map-marker</v-icon>
                  <span class="text-margin" />
                  89 Nightingale
                </li>
                <li>
                  <v-icon>mdi-map-marker</v-icon>
                  <span class="text-margin" />
                  28-30 Cale Street
                </li>
                <li>
                  <v-icon>mdi-map-marker</v-icon>
                  <span class="text-margin" />
                  Highgate Rd
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col class="fill-height" cols="11" md="5">
        <div>
          <v-img src="/assets/bread-shop-1.png" height="100%" class="mb-4" />
          <v-img src="/public/assets/bg-bread-3.png" />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template> -->

<style>
ul li {
  margin-top: 1rem;
}

.stores-view {
  background-color: #37474f;
  color: white;
}

.list-icons {
  list-style-type: none;
}

.text-margin {
  margin-left: 1rem;
}

.custom-font {
  line-height: 2.2;
  font-size: 17px;
}
</style>
