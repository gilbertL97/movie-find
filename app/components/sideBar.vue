<template>
  <nav class="flex flex-row lg:flex-col justify-evenly items-center py-5 lg:px-5 border-t border-r-lg bg-black">
    <NuxtLink v-slot="{ isActive }" to="/" :title="$t('Home')">
      Inicio
      <!-- <div :class="isActive ? 'i-ph-house-fill text-primary' : 'i-ph-house'"
      /> -->
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/movie" :title="$t('Movies')">
      pelis
      <!-- <div :class="isActive ? 'i-ph-film-strip-fill text-primary' : 'i-ph-film-strip'"
      /> -->
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/tv" :title="$t('TV Shows')">
      shows
      <!-- <div :class="isActive ? 'i-ph-television-simple-fill text-primary' : 'i-ph-television-simple'"
      /> -->
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/search" :title="$t('Search')">
      buscar
      <!-- <div :class="isActive ? 'i-ph-magnifying-glass-fill text-primary' : 'i-ph-magnifying-glass'"
      /> -->
    </NuxtLink>
  </nav>
</template>
