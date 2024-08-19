<script setup>
import ProductsSlideSlider from './ProductsSlideSlider.vue';

const activeProductModel = defineModel(); // el v-model se recibe con defineModel(

const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});

// computed properties
const selectedProduct = computed(() => {
  return activeProductModel.value !== null
    ? props.products[activeProductModel.value].name
    : '';
});

const selectedProductText = computed(() => {
  return props.products[activeProductModel.value].text;
});

const selectedProductId = computed(() => {
  return props.products[activeProductModel.value].id;
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

      <ProductsSlideSlider v-model="activeProductModel" :products />

      <v-expand-transition>
        <v-sheet v-if="activeProductModel != null" height="250" color="#37474F">
          <div class="d-flex fill-height align-center justify-center">
            <v-card color="#37474F" elevation="0" max-width="87%">
              <v-card-title>
                <h3>{{ selectedProduct }}</h3>
              </v-card-title>

              <v-card-text class="custom-text">
                {{ selectedProductText }}
              </v-card-text>
              <div class="mx-4 py-3">
                <v-btn
                  variant="outlined"
                  size="small"
                  :to="`/product/${selectedProductId}`"
                >
                  see all {{ selectedProduct }}
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
