<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
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
    <h1 class="text-9xl text-gray-600">{{ error.statusCode }}</h1>
    <p class="mt-7 text-4xl text-gray-600">{{ error.message }}</p>
    <button
      @click="handleError()"
      class="hover:underline bg-blue-500 border rounded-lg py-4 px-4 text-white mt-4"
    >
      zurück
    </button>
  </div>
</template>
