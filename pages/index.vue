<script setup></script>

<template>
  <div>
    <Html :lang="dynamic > 50 ? 'eng-GB' : 'eng-US'">
      <Title> Memostore </Title>
      <Meta name="description" content="My Homepage" />
      <Link rel="preload" href="/porsche.jpg" as="script" />
    </Html>
    <div
      class="flex flex-col justify-center items-center gap-2 w-full h-[calc(100vh-80px)]"
    >
      <h1 class="text-4xl">Herzlich Willkomen in Memo's Barstore</h1>
      <NuxtLink
        to="/restaurants"
        class="hover:underline cursor-pointer duration-200 transition hover:text-blue-600 text-xl"
      >
        Geh zu den Restaurants
      </NuxtLink>
    </div>
  </div>
</template>
