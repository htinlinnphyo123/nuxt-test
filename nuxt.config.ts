export default defineNuxtConfig({
  css: [
    '~/assets/main.css',
    '~/assets/tailwind.css',
    'primeicons/primeicons.css',
  ],

  build: {
    transpile: ['primevue','@liripeng/vue-audio-player']
  },

  plugins: [
    '~/plugins/init.ts',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-01-06',
})