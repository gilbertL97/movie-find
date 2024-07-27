<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>
<script setup>
useHead({
  htmlAttrs: {
    lang: 'es',
  },
  charset: 'utf-8',
  title: 'Gi Movies',
  titleTemplate: title => title !== 'Gi Movies' ? `${title} · Gi Movies` : title,
  meta: [
    { name: 'description', content: 'Un cliente de TMDB para practicar  ' },
    // { property: 'og:image', content: 'https://movies.nuxt.space/social-card.png' },
    // { name: 'twitter:card', content: 'summary_large_image' },
    // { name: 'twitter:site', content: '@nuxt_js' },
    // { name: 'twitter:creator', content: '@nuxt_js' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/webp',
      href: '/movies.webp',
    },
  ],
})
</script>
<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #111;
  color: white;
  color-scheme: dark;
}
</style>