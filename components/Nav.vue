<template>
  <nav
    class="h-20 w-full flex items-center justify-between px-4 bg-slate-900 text-gray-100 shadow border border-b"
  >
    <div>
      <NuxtLink
        to="/"
        class="hover:bg-gray-500 rounded py-2 px-4 transition-all duration-150"
      >
        Memo's Bar
      </NuxtLink>
    </div>
    <div class="flex items-center gap-4 px-4 text-lg">
      <NuxtLink
        to="/"
        class="hover:bg-gray-500 rounded py-2 px-4 transition-all duration-150"
      >
        Start
      </NuxtLink>
      <NuxtLink
        to="/restaurants"
        class="hover:bg-gray-500 rounded py-2 px-4 transition-all duration-150"
      >
        Restaurants
      </NuxtLink>
    </div>
  </nav>
</template>
