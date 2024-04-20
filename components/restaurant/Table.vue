<script setup lang="ts">
import restaurants from "@/data/restaurants.json";
const restaurantsOrganized = {
  first: [...restaurants].splice(0, 25),
  second: [...restaurants].splice(25, 25),
};
</script>

<template>
  <div class="my-10 max-w-[1200px] mx-auto">
    <h1 class="font-semibold text-4xl border-b-[4px] border-slate-900 pb-8">
      TOP 50: Rangliste
    </h1>
    <div class="flex flex-col md:flex-row md:justify-between gap-4">
      <div class="w-full md:w-1/2">
        <RestaurantRow :isHeader="true" />
        <RestaurantRow
          v-for="(rest, index) in restaurantsOrganized.first"
          :key="rest.id"
          :name="rest.name"
          :rank="rest.rank"
          :index="index"
        />
      </div>
      <div class="w-full md:w-1/2">
        <RestaurantRow :isHeader="true" />
        <RestaurantRow
          v-for="(rest, index) in restaurantsOrganized.second"
          :key="rest.id"
          :name="rest.name"
          :rank="rest.rank"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.table h1 {
  margin-bottom: 2rem;
}
</style>
