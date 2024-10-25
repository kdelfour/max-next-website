// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/icon', '@nuxt/image', '@vueuse/motion/nuxt'],
  routeRules: { '/': { prerender: true } },
  icon: { serverBundle: { collections: ['uil', 'mdi', 'skill-icons', 'hugeicons'] }, },
  nitro: { prerender: { routes: ['/'], crawlLinks: true } },
  vite: {
    build: {
      cssMinify: 'esbuild',
      minify: 'esbuild',
      cssCodeSplit: false,
    },
  },
  colorMode: {
    preference: 'light'
  }
})
