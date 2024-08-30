<script setup>
import { ref } from 'vue'

// Declare reactive data using ref
const icons = ref([
  'mdi-instagram',
])
</script>

<template>
  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column justify-center img-footer" height="250"
  >
    <v-container class="bg-grey-custom rounded-lg" fluid>
      <v-row no-gutters>
        <v-col>image</v-col>

        <v-col>link to our delights</v-col>
        <v-col>store links</v-col>
        <v-col>
          insta

          <div>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              class="mx-4"
              variant="text"
            />
          </div>
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
    background-image: url("assets/bg-bread-3.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .bg-grey-custom {
    background-color: rgb(44, 58, 66);
  }
</style>
