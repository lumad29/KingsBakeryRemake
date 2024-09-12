<script setup>
import { useAppStore } from '@/store/app'
// esto tiene que ver con pinia
const appStore = useAppStore()
const route = useRoute('/product/[id]') // esto tiene que ver con vue router
// console.log(appStore.products[0].id);
const router = useRouter()

const selectedProductCategory = computed(() => {
  // esto tenia que ser convertido a Number
  return appStore.productCategories.find(
    productCategory => productCategory.id === Number(route.params.id),
  )
})

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="background-grey">
    <v-img
      :src="selectedProductCategory.pageImg"
      height="400"
      cover
      max-height="320"
    >
      <div class="fill-height d-flex align-center justify-center text-white">
        <v-icon class="pa-6" size="large" @click="goBack">
          mdi-arrow-left-drop-circle
        </v-icon>
        <h1>{{ selectedProductCategory.name }}</h1>
      </div>
    </v-img>

    <v-container class="d-flex">
      <v-row class="my-5">
        <v-col
          v-for="productCategory in selectedProductCategory.items"
          :key="productCategory.id"
          cols="12"
          lg="6"
        >
          <v-card class="mx-auto bg-grey" width="95%" min-height="570">
            <v-img height="400" :src="productCategory.img" cover />
            <v-card-title class="custom-title">
              {{ productCategory.name }}
            </v-card-title>

            <v-card-subtitle
              style="white-space: pre-line"
              class="custom-subtitle"
            >
              {{ productCategory.description }}
            </v-card-subtitle>

            <!-- <v-card-subtitle class="text-h1" v-for="ingrediant in product.ingredients">
                            {{ ingrediant }}
                        </v-card-subtitle> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.background-grey {
  background-color: rgb(55, 71, 79);
}

.custom-title {
  font-size: 24px !important;
}

.custom-subtitle {
  font-size: 18px !important;
  font-weight: 450;
  color: white !important;
}
</style>
