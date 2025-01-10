export default defineNuxtConfig({
  ssr:true,
  css: [
    '~/assets/main.css',
    '~/assets/tailwind.css',
    'primeicons/primeicons.css',
  ],

  build: {
    transpile: ['primevue','@liripeng/vue-audio-player']
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Buddha News',
      meta: [
        { name: 'description', content: 'Welcome To Buddhist News' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'Stay tuned for More Articles' },
        { property: 'og:title', content: 'Buddhist News' },
        { property: 'og:image', content: 'https://prod-bcnews.sgp1.cdn.digitaloceanspaces.com/Default/default_logo.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Buddhist News' },
        { name: 'twitter:image', content: 'https://prod-bcnews.sgp1.cdn.digitaloceanspaces.com/Default/default_logo.jpg' },
        { name: 'twitter:description', content: 'Stay tuned for More Articles' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://prod-bcnews.sgp1.cdn.digitaloceanspaces.com/Default/default_logo.jpg' },
      ],
    }
  },

  plugins: [
    '~/plugins/init.ts',
    '~/plugins/detect-online.js'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-01-06',
})