<script setup>
import { computed } from 'vue';

const model = defineModel(); // el v-model se recibe con defineModel()

const props = defineProps({
  productCategories: {
    type: Array,
    default: () => [],
  },
});
// trae todo excepto lo que tiene product.slider en falsy
const filteredProductCategories = computed(() => {
  return props.productCategories.filter((productCategory) => {
    // same as product.slider !== falsy 0, null, undefined, NaN
    return productCategory.slider;
  });
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
      v-for="productCategory in filteredProductCategories"
      :key="productCategory.id"
      v-slot="{ isSelected, toggle }"
    >
      <v-card :class="['ma-2']" height="400" width="300" @click="toggle">
        <!--conditional chaining-->
        <v-img
          :src="productCategory.slider?.avatar"
          height="100%"
          cover
          :gradient="
            !isSelected ? 'to bottom, rgba(0,0,0,.6), rgba(0,0,0,.5)' : ''
          "
        >
          <div
            v-if="productCategory.name || isSelected"
            class="pa-3 bg-grey text-center font-size-name"
          >
            <h3>{{ productCategory.name }}</h3>
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
