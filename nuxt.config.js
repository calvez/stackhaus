import pkg from './package'

export default {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    },

    /*
     ** Customize the progress-bar color
     ** See: https://nuxtjs.org/api/configuration-loading#use-a-custom-loading-component
     */
    loading: {},

    /*
     ** Global CSS
     */
    css: ['~/styles/base.scss', '~/assets/transition.scss'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/global-component-loader.js',
        '~/plugins/menu-loader.js'
        //{ src: '~/plugins/web-font-loader.js', ssr: false }
    ],

    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/apollo'],

    // Override router functionality
    router: {
        middleware: ['error-checking'] // Adds middleware to all pages
        // extendRoutes (routes, resolve) {
        // routes.push({
        //   name: '404',
        //   path: '*',
        //   component: resolve(__dirname, 'pages/404.vue')
        // })
    },

    // Give apollo module options
    apollo: {
        // tokenName: 'yourApolloTokenName', // optional, default: apollo-token
        // tokenExpires: 10, // optional, default: 7 (days)
        includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
        // authenticationType: 'Basic', // optional, default: 'Bearer'
        // optional
        errorHandler(error) {
            console.log(
                '%cError',
                'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
                error.message
            )
        },
        // required
        clientConfigs: {
            default: {
                // required
                httpEndpoint:
                    'http://stackhaus-backend.flywheelsites.com/graphql',
                // httpEndpoint: process.env.WP_ENDPOINT,
                // httpEndpoint: 'http://localhost:3001',
                // optional
                // See https://www.apollographql.com/docs/link/links/http.html#options
                // httpLinkOptions: {
                //   credentials: 'same-origin'
                // },
                // LocalStorage token
                // tokenName: 'apollo-token', // optional
                // Enable Automatic Query persisting with Apollo Engine
                persisting: false, // Optional
                // Use websockets for everything (no HTTP)
                // You need to pass a `wsEndpoint` for this to work
                websocketsOnly: false // Optional
            }
        }
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },

    /*
     ** Generate Static Routes
     */
    // TODO: generate static routes maybe, to get SSG working?:
    // See: https://github.com/nuxt-community/apollo-module/issues/69
    generate: {
        routes: function() {
            // TODO: Create the apollo client
            /*
            const apolloClient = new ApolloClient({
                // You should use an absolute URL here
                uri: 'http://stackhaus-backend.flywheelsites.com/graphql'
            })
            let routes = apolloClient
                .query({ GET_ALL_PAGES })
                .then(({ result }) => {
                    // console.log('data', data)
                    const { data } = result
                    console.log('data ', data)
                    // TODO: do work here, example:
                    // const dynamicRoutes = data.allBlogPosts.map(post => `/post/${post.slug}`)
                    // return staticRoutes.concat(dynamicRoutes)

                })
                .catch(error => {
                    console.log('error generating routes:')
                    console.log(error)
                })
            console.log('routes ', routes)
            */
        }
    }
}
