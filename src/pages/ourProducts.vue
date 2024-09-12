<script setup>
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const activeSlide = ref(0)
</script>

<template>
  <ProductsSlide
    v-model="activeSlide"
    :product-categories="appStore.productCategories"
  />
</template>
