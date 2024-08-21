<script setup>
import ProductsSlideSlider from './ProductsSlideSlider.vue';

const activeSlide = defineModel(); // el v-model se recibe con defineModel(

const props = defineProps({
  productCategories: {
    type: Array,
    default: () => [],
  },
});

// computed properties
const selectedProductCategory = computed(() => {
  return (
    activeSlide.value !== null &&
    props.productCategories[activeSlide.value].name
  );

  // return activeSlide.value !== null
  //   ? props.productCategories[activeSlide.value].name
  //   : '';
});

const selectedProductCategoryText = computed(() => {
  return props.productCategories[activeSlide.value].text;
});

const selectedProductCategoryId = computed(() => {
  return props.productCategories[activeSlide.value].id;
});
</script>

<template>
  <v-card color="#37474F" rounded="0" flat class="pb-2">
    <v-sheet
      class="mx-auto mt-18"
      elevation="0"
      max-width="1000"
      color="#37474F"
    >
      <div class="pt-16">
        <v-img src="/assets/our-products.jpeg" />
      </div>

      <ProductsSlideSlider v-model="activeSlide" :productCategories />

      <v-expand-transition>
        <v-sheet v-if="activeSlide != null" height="250" color="#37474F">
          <div class="d-flex fill-height align-center justify-center">
            <v-card color="#37474F" elevation="0" max-width="87%">
              <v-card-title>
                <h3>{{ selectedProductCategory }}</h3>
              </v-card-title>

              <v-card-text class="custom-text">
                {{ selectedProductCategoryText }}
              </v-card-text>
              <div class="mx-4 py-3">
                <v-btn
                  variant="outlined"
                  size="small"
                  :to="`/product/${selectedProductCategoryId}`"
                >
                  see all {{ selectedProductCategory }}
                </v-btn>
              </div>
            </v-card>
          </div>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </v-card>
</template>

<style scoped>
.router-link-custom {
  text-decoration: none;
  color: inherit;
}

.custom-text {
  font-size: 17px;
}
</style>
