<script setup>
import { useAppStore } from '@/store/app';
const appStore = useAppStore()

const model = ref(0)


</script>

<template>
    <ProductsSlide :products="appStore.products" v-model="model" />
</template>
