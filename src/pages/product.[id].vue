<script setup>
import { useAppStore } from '@/store/app'; // esto tiene que ver con pinia
const appStore = useAppStore()
const route = useRoute('/product/[id]') // esto tiene que ver con vue router
// console.log(appStore.products[0].id);

const selectedProduct = computed(() => {
    // esto tenia que ser convertido a Number
    return appStore.products.find(product => product.id === Number(route.params.id))
})

</script>

<template>
    <div class="background-grey">
        <v-img :src="selectedProduct.pageImg" height="400" cover max-height="320">
            <div class="fill-height d-flex align-center justify-center text-white">
                <h1>{{ selectedProduct.name }}</h1>
            </div>
        </v-img>
        <v-container class="d-flex">
            <v-row class="my-5">
                <v-col v-for="product in selectedProduct.items" :key="product.id" cols="12" lg="6">
                    <v-card class="mx-auto bg-grey" width="90%" min-height="540">
                        <v-img height="400" :src="product.img" cover></v-img>
                        <v-card-title class="custom-title">
                            {{ product.name }}
                        </v-card-title>

                        <v-card-subtitle style=" white-space: pre-line" class="custom-subtitle">
                            {{ product.description }}
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
    background-color: rgb(55, 71, 79)
}

.custom-title {
    font-size: 24px !important;
}

.custom-subtitle {
    font-size: 17px !important;

}
</style>