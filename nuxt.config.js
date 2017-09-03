// NOTE: we use web/nuxt.config.gh.js to generate static files for gh-pages, this file is only for dev
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Awesome Time Series Database',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'A curated list of awesome time series databases, benchmark tools, blog and papers'
      },
      // TODO: https://dev.twitter.com/web/tweet-button
      // https://nuxtjs.org/examples/seo-html-head
      // Test on: https://cards-dev.twitter.com/validator
      {name: 'twitter:card', content: 'summary'},
      // TODO: the twitter account for xephon ?
      {name: 'twitter:site', content: '@at1510086'},
      {name: 'twitter:title', content: 'Awesome Time Series Database'},
      {
        name: 'twitter:description',
        content: 'A curated list of awesome time series databases, benchmark tools, blog and papers'
      },
      // TODO: use our own image url
      {name: 'twitter:image', content: 'https://awesome-go.com/assets/logo.png'},
      {name: 'twitter:image:alt', content: 'Awesome logo'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.css'
      }
    ]
  },
  srcDir: 'web/',
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#3B8070'},
  /*
   ** Build configuration
   */
  build: {
    // publicPath: '/awesome-time-series-database/',
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  router: {
  },
  generate: {
  }
};
