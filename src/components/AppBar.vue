<script setup>
import { useGoTo } from 'vuetify'

// :items="items"
const drawer = ref(false)

// const router = useRouter()

const links = [
  { to: '', text: 'Home' },
  { to: 'locations', text: 'Locations' },
  { to: 'ourProducts', text: 'Products' },
  { to: 'OurCafe', text: 'Our Cafe' },
  { to: 'about', text: 'About' },
  { to: '#target-contact', text: 'Contact' },
]

// function toggleDrawer(linkTo) {
//   router.push(linkTo)
//   drawer.value = false
// }

// esto lo usamos para la navegacion hacia abajo. lo sacamos de programatic scrolling example. es un composable
// const goTo = useGoTo() // composable que se importa de vuetify, esta automatically available

// const linkToPage = (targetId) => {
//   drawer.value = false
//   goTo(targetId) // va hacia. es mi evento con un paraemtro de target
// }
//   @click="toggleDrawer(link.to)"
</script>

<template>
  <v-app-bar :elevation="0" color="blue-grey-darken-3" height="80">
    <v-app-bar-title class="hidden-sm-and-downx my-font font-weight-bold">
      <router-link to="/" class="nav-link">
        <h2>King's Bakery</h2>
      </router-link>
    </v-app-bar-title>

    <v-app-bar-nav-icon
      class="hidden-md-and-up ma-12"
      @click="drawer = !drawer"
    />

    <!-- <v-btn @click="linkToPage('#target-about')">GoTo Stores</v-btn> -->

    <nav class="nav-links nav-links hidden-sm-and-down">
      <!-- llamo al evento onclick y le paso el paramtro de link que es mi array de objetos y to que es el el key -->
      <div
        v-for="link in links"
        :key="link.to"
        class="nav-link"
        style="font-size: 18px;"
        @click="$router.push(`/${link.to}`)"
      >
        {{ link.text }}
      </div>
      <v-btn icon="mdi-instagram" href="https://www.instagram.com" target="_blank" />
    </nav>
  </v-app-bar>

  <!-- navigation drawer -->
  <v-navigation-drawer
    v-model="drawer"
    color="blue-grey-darken-3"
    location="top"
    :mobile-breakpoint="0"
    permanentx
  >
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.to"
        class="nav-link"
        @click="$router.push(`/${link.to}`)"
      >
        {{ link.text }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
.nav-link {
  text-decoration: none;
  color: white;
  margin: 0 1rem 0 1rem;
  cursor: pointer;

}

.nav-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 65vw;
}

.my-font {
  font-family: 'Abril Fatface', cursive;
}
</style>
