import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Vue3Marquee from 'vue3-marquee'
import VueAudioPlayer from '@liripeng/vue-audio-player'
import Tooltip from 'primevue/tooltip'
import ToastService from 'primevue/toastservice'
import Vue3SocialSharingPlugin from 'vue3-social-sharing'
import Toast from 'primevue/toast'

export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.vueApp.use(PrimeVue, {
    unstyle: true,
    pt: {
      button: {
        icon: 'text-white text-xl px-2',
      },
      card: {
        root: 'border border-gray-500 rounded-lg',
      },
    },
  })
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.directive('tooltip', Tooltip)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.use(Vue3Marquee, { name: 'MarqueeComponent' })
  nuxtApp.vueApp.component('VueAudioPlayer', VueAudioPlayer)
  nuxtApp.vueApp.use(Vue3SocialSharingPlugin)
})