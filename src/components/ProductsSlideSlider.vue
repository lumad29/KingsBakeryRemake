<script setup>
const model = defineModel() // el v-model se recibe con defineModel()

const props = defineProps({
    products: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <v-slide-group v-model="model" class="pa-4" show-arrows mandatory center-active>
        <v-slide-group-item v-for="product in products" :key="product.id" v-slot="{ isSelected, toggle }">

            <v-card :class="['ma-2']" height="400" width="300" @click="toggle">

                <v-img :src="product.src" height="100%" cover
                    :gradient="!isSelected ? 'to bottom, rgba(0,0,0,.6), rgba(0,0,0,.5)' : ''">
                    <div v-if="product.name || isSelected" class="pa-2 bg-grey text-center">
                        {{ product.name }}
                    </div>
                </v-img>
            </v-card>
        </v-slide-group-item>
    </v-slide-group>
</template>