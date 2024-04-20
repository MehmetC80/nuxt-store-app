<script setup>
definePageMeta({
  layout: "ad",
});
</script>

<template>
  <Html :lang="dynamic > 50 ? 'eng-GB' : 'eng-US'">
    <Title> Top-50 Restaurants</Title>
    <Meta name="description" content="My Homepage" />
    <Link rel="preload" href="@/assets/images/porsche.jpg" as="script" />
  </Html>
  <div>
    <RestaurantTable />
  </div>
</template>
