import site from './assets/site.json';
export default defineNuxtConfig({
  devServer: {
    port: 1001,
    host: '0.0.0.0',
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['./assets/css/typography.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    'nuxt-twemoji'
  ],
  build: {
    transpile: ['vuetify-sonner']
  },
  app: {
    head: {
      title: site.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: site.keywords },
        { name: 'description', content: site.description },
        { property: 'og:site_name', content: site.title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: site.title },
        { property: 'og:title', content: site.title },
        { property: 'og:description', content: site.description },
        { property: 'og:image', content: site.social_image },
        { name: 'twitter:card', content: site.card[0] },
        { name: 'twitter:site', content: site.twitter_user },
        { name: "theme-color", content: site.theme_color }
      ]
    },
  },
})