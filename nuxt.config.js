export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Emergency Response - Jordan Open Source Association",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Emergency Response - Jordan Open Source Association",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap",
      },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.6.0.min.js",
        body: true,
        type: "text/javascript",
      },
      {
        src:
          process.env.OTS_CHAT_LINK ||
          "https://ots.josa.ngo/assets/chat/chat.min.js",
        body: true,
        type: "text/javascript",
      },
      {
        src: process.env.OTS_FORM_LINK,
        id: "zammad_form_script",
        body: true,
        type: "text/javascript",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["~assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: "~/plugins/copy.js" }],
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
    "@nuxtjs/tailwindcss",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@josango/nuxt-build-banner",
    [
      "@zecar/nuxt-matomo",
      {
        matomoUrl: "//track.josa.ngo/",
        siteId: process.env.MATOMO_SITE_ID | 0,
      },
    ],
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"],
          },
        ],
      },
    ],
    "nuxt-healthcheck",
  ],
  healthcheck: {
    path: "/healthcheck",
    contentType: "application/json",
    healthy: () => {
      return JSON.stringify({ result: "healthy" });
    },
  },
  publicRuntimeConfig: {
    siteId: process.env.MATOMO_SITE_ID | 0,
    buildBranch: process.env.DRONE_BRANCH,
    buildID: process.env.DRONE_BUILD_PARENT,
    buildCommitSHA: process.env.DRONE_COMMIT_SHA,
    OTS_CHAT_ID: process.env.OTS_CHAT_ID,
    DRONE_COMMIT_SHA: process.env.DRONE_COMMIT_SHA,
    DRONE_COMMIT_LINK: process.env.DRONE_COMMIT_LINK,
    DRONE_BUILD_NUMBER: process.env.DRONE_BUILD_NUMBER,
    DRONE_BUILD_LINK: process.env.DRONE_BUILD_LINK,
    DRONE_REPO_LINK: process.env.DRONE_REPO_LINK,
    DRONE_BUILD_FINISHED: process.env.DRONE_BUILD_FINISHED,
    TARGET_ENV: process.env.TARGET_ENV,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {},
  },
};
