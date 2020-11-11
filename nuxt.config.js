const webpack = require('webpack')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Emergency Response - Jordan Open Source Association',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Emergency Response - Jordan Open Source Association' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"},
    ],
    script:[
        {
          src:"https://code.jquery.com/jquery-2.1.4.min.js",
          body: true,
          type: "text/javascript"
        },
        {
          src: 'https://ots.jordanopensource.org/assets/chat/chat.min.js',
          body: true,
          type: "text/javascript"
        },
        // {
        //   src: 'https://ots.jordanopensource.org/assets/form/form.js',
        //   id: 'zammad_form_script',
        //   body: true,
        //   type: "text/javascript"
        // },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    "~assets/css/main.css"
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-fontawesome', {
    imports: [
      //import whole set
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
         set:'@fortawesome/free-brands-svg-icons',
         icons: ['fab']
       }
    ]
  }]
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend (config, ctx) {
    }
  }
}
