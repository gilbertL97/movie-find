// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir:'app',
  devtools: { enabled: true },
  modules: ["@hebilicious/vue-query-nuxt", "@unocss/nuxt"]
})