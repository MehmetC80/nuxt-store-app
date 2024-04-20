<script setup lang="ts">
interface RowProps {
  rank?: number;
  name?: string;
  index?: number;
  isHeader?: boolean;
}

const props = defineProps<RowProps>();
</script>

<template>
  <div v-if="isHeader" class="flex gap-8 my-4 px-4">
    <h4 class="text-xl font-semibold text-blue-800">Rang</h4>
    <h4 class="text-xl font-semibold text-blue-800">Location</h4>
  </div>
  <div
    v-else
    class="flex items-center border-t border-teal-950"
    :style="
      props.index! % 2 == 0
        ? { backgroundColor: 'rgba(100,100,100,0.15)' }
        : null
    "
  >
    <h4 class="text-xl text-blue-800 mr-8 m-0 bold py-2 px-4 w-8">
      {{ props.rank }}
    </h4>
    <NuxtLink
      :to="`/restaurants/${name}`"
      class="text-xl mr-8 m-0 bold py-2 px-4 text-amber-600 font-medium"
      >{{ props.name }}</NuxtLink
    >
  </div>
</template>
