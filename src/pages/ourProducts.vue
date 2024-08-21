<script setup>
import { useAppStore } from '@/store/app';
const appStore = useAppStore();

const model = ref(0);
</script>

<template>
  <ProductsSlide
    :productCategories="appStore.productCategories"
    v-model="model"
  />
</template>
