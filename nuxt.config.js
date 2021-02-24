export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ricky-swim',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // GSAP
    '~/plugins/gsap.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // TailwindCSS v2.0
    '@nuxtjs/tailwindcss',

    // FontAwesome
    '@nuxtjs/fontawesome', 
  ],

  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: ['faUserAlt', 'faUserPlus', 'faBars', 'faAward','faClinicMedical','faHandPointLeft',
      'faChevronRight','faChevronLeft','faCheck','faArrowDown','faSwimmer'],
      brands: ['faTwitter', 'faGoogle', 'faFacebook', 'faInstagram']
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // GSAP
    transpile: ['gsap'],
  }
}
