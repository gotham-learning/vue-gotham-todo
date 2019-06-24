export default {
  env: {},
  head: {
    title: "gotham-todo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js TypeScript project"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config: any, ctx: any) {
      // Run ESLint on save
      if (ctx.isClient) {
        config.devtool = ctx.isDev ? 'eval-source-map' : 'source-map'
      }

      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts,js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }

  },
  modules: ["@nuxtjs/axios", "@nuxtjs/bulma"],
  axios: {}
};
