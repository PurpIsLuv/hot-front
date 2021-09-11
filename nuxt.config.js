import colors from 'vuetify/es5/util/colors'
import path from 'path'
import fs from 'fs'
const axios = require('axios')

export default {
  target: 'server',

  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sexus.space',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'desciption', name: 'description', content: 'Sexus.space full hd porno' },
      { hid: 'keywords', name: 'keywords', content: 'porno,xxx,sexus,porn,porno video,porno online,hd,full hd,free porno' },
      { name: 'yandex-verification', content: '19505f30c1417e7d' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', crossorigin: true, href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap' }
    ]
  },

  env: {
    TARGET_HOST: process.env.TARGET_HOST,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    GOOGLE_ID: process.env.GOOGLE_ID,
    YANDEX_ID: process.env.YANDEX_ID
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/common.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper.js', ssr: true },
    { src: '@/plugins/global-components.js', ssr: true },
    { src: '@/plugins/http.js', ssr: true },
    { src: '@/plugins/get-image.js', ssr: true },
    { src: '@/plugins/gtag.js', ssr: false },
    { src: '@/plugins/vue-plyr.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@/modules/generator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/yandex-metrika'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.TARGET_HOST
  },

  sitemap: async () => {
    const categoryResponse = await axios.get(process.env.TARGET_HOST + '/api/category/slug/all')
    const starResponse = await axios.get(process.env.TARGET_HOST + '/api/star/all')

    return {
      hostname: process.env.TARGET_HOST,
      gzip: true,
      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date()
      },
      exclude: [
        '/admin/**',
        '/admin'
      ],
      routes: [
        ...starResponse.data.allStarsResult.map(star => '/video/' + star.id),
        ...categoryResponse.data.slugArray.map(slug => '/category/' + slug)
      ]
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: '/admin'
  },

  yandexMetrika: {
    id: process.env.YANDEX_ID,
    webvisor: true,
    // clickmap:true,
    useCDN: true,
    // trackLinks:true,
    // accurateTrackBounce:true,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  styleResources: {
    // your settings here
    scss: [
      '~/assets/common.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: {
    color: '#ff6060',
    height: '3px'
  }
}
