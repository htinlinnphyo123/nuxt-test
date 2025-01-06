export default defineNuxtConfig({
  css: [
    '~/assets/main.css',
    '~/assets/tailwind.css',
    'primeicons/primeicons.css',
  ],
  build: {
    transpile: ['primevue']
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
})