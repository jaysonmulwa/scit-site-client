// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,

    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        [
          '@nuxtjs/google-fonts',
          {
            families: {
              Nunito: {
                wght: [400],
              }, 
            },
            subsets: ['latin'],
            display: 'swap',
            prefetch: false,
            preconnect: false,
            preload: false,
            download: true,
            base64: false,
          },
        ],
      ],

    modules: ['@nuxtjs/tailwindcss','@nuxtjs/apollo'],

    apollo: {
        clients: {
          default: {
            httpEndpoint: 'https://api.spacex.land/graphql'
          }
        },
    }
})
