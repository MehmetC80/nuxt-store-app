<script setup lang="ts">
import restaurants from "@/data/restaurants.json";

definePageMeta({
  layout: "ad",
});

interface Restaurant {
  id: number;
  rank: number;
  name: string;
  content: string;
  revenue: number;
  numberOfStores: string;
  imageUrl: string;
}

const route = useRoute();

const filteredRestaurant = restaurants.find((c: Restaurant) => {
  return c.name === route.params.name;
});

useSeoMeta({
  title: restaurants.values!
    ? `${route.params.name}`
    : "404 - Restaurants Not Found",
  description: "",
});
</script>
<template>
  <div>
    <div
      v-if="filteredRestaurant"
      class="flex flex-col md:flex-row mt-12 md:gap-8"
    >
      <div class="flex-1 flex flex-col justify-center items-center">
        <NuxtImg :src="filteredRestaurant.imageUrl" class="rounded" />
      </div>
      <div class="flex-1 flex flex-col">
        <h1 class="text-6xl">{{ filteredRestaurant.name }}</h1>
        <div class="flex gap-8 items-center">
          <h5 class="text-lg font-semibold">Umsatz (in Millarden)</h5>
          <p class="text-gray-700">{{ filteredRestaurant.revenue }} mrd</p>
        </div>
        <div class="flex gap-8 items-center">
          <h5 class="text-lg font-semibold">Anzahl Stores</h5>
          <p class="text-gray-700">{{ filteredRestaurant.numberOfStores }}</p>
        </div>
        <p class="text-gray-700 my-4">{{ filteredRestaurant.content }}</p>
      </div>
    </div>
  </div>
</template>
