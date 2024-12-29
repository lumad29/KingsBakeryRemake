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
      src="/public/assets/contact.jpg"
      cover
      max-height="320"
    >
      <div class="fill-height d-flex align-center justify-center text-white">
        <v-icon class="pa-6" size="large" @click="goBack">
          mdi-arrow-left-drop-circle
        </v-icon>
        <h1>Contact Us</h1>
      </div>
    </v-img>
  </div>

  <!-- card -->
  <v-card class="px-10 my-10 text-white" color="transparent" elevation="0" dark>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="First name"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model="message"
              :rules="emailRules"
              label="Message"
              required
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<style>
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
