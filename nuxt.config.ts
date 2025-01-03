export default defineNuxtConfig({
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },
  compatibilityDate: "2025-01-02",
  css: [
    '@/assets/main.css',
    '@/assets/tailwind.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue']
  },
  plugins: [
    '@/plugins/init.ts',
  ],
})