export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  server: {
    host: '0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Unknown',
    titleTemplate: 'SamuelSam-dev - %s',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', '@/assets/fonts/fonts.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['cookie-universal-nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
};
