export default defineNuxtConfig({
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },

  compatibilityDate: "2025-01-02"
})