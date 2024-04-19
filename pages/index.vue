<script setup></script>

<template>
  <div class="flex flex-col items-center gap-2 w-full h-[calc(100vh-80px)]">
    <h1 class="mt-12 text-4xl">Herzlich Willkomen in Memo's Barstore</h1>
    <NuxtLink
      to="/restaurants"
      class="hover:underline cursor-pointer duration-200 transitionhover:text-blue-600 text-xl"
    >
      Geh zu den Restaurants
    </NuxtLink>
  </div>
</template>
