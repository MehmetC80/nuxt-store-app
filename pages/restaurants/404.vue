<script setup></script>

<template>
  <Nav />
  <div
    class="flex flex-col items-center justify-center gap-2 w-full h-[calc(100vh-80px)]"
  >
    <h1 class="mt-12 text-4xl text-slate-900">
      Seite konnte nicht gefunden werden.
    </h1>
    <NuxtLink
      to="/restaurants"
      class="hover:underline cursor-pointer duration-200 transitionhover:text-blue-600 text-xl"
    >
      zurüch zur Startseite
    </NuxtLink>
  </div>
</template>
