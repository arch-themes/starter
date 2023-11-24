import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({

  alias: {
    '~arch': resolve('./'),
  },

  app: {
    keepalive: true,
  },

  components: [
    {
      global: true,
      prefix: 'arch',
      path: resolve('./components/arch'),
    },
  ],

  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active',
    },
  },

  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],

  unocss: {
    configFile: resolve('./uno.config.ts'),
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: 'one-dark-pro',
    },
    navigation: {
      fields: ['title', 'icon', '_path'],
    },
  },

  colorMode: {
    classSuffix: '',
    fallback: 'dark',
    preference: 'dark',
    storageKey: 'color-mode',
    hid: 'color__mode__script',
    globalName: '__COLOR_MODE__',
  },

  devtools: {
    enabled: true,
  },
})
