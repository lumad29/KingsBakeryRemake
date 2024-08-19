<script setup>
const model = defineModel(); // el v-model se recibe con defineModel()

const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <v-slide-group
    v-model="model"
    class="pt-0"
    show-arrows
    mandatory
    center-active
  >
    <v-slide-group-item
      v-for="product in products"
      :key="product.id"
      v-slot="{ isSelected, toggle }"
    >
      <v-card :class="['ma-2']" height="400" width="300" @click="toggle">
        <v-img
          :src="product.src"
          height="100%"
          cover
          :gradient="
            !isSelected ? 'to bottom, rgba(0,0,0,.6), rgba(0,0,0,.5)' : ''
          "
        >
          <div
            v-if="product.name || isSelected"
            class="pa-3 bg-grey text-center font-size-name"
          >
            <h3>{{ product.name }}</h3>
          </div>
        </v-img>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<style scoped>
.font-size-name {
  font-size: 18px;
}
</style>
