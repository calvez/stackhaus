import pkg from "./package"

export default {
    mode: "universal",

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
    },

    /*
     ** Customize the progress-bar color
     ** See: https://nuxtjs.org/api/configuration-loading#use-a-custom-loading-component
     */
    loading: {},

    /*
     ** Global CSS
     */
    css: [
        "~/styles/base.scss",
        "~/styles/transitions.scss"
        //'~/styles/fonts.css'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: "~/plugins/global-component-loader.js" },
        { src: "~/plugins/global-svg-loader.js" },
        { src: "~/plugins/google-gtag.client.js", mode: "client" }
        //{ src: "~/plugins/web-font-loader.client.js", mode: "client" }
    ],

    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxtjs/apollo"],

    /*
     ** Apollo options. Used for Graph QL queries
     ** See: https://www.apollographql.com/docs/link/links/http.html#options
     */
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: "http://api.mabe.hu/graphql",
                tokenName: "apollo-token",
                persisting: false,
                websocketsOnly: false
            }
        }
    },

    /*
     ** Customize router
     */
    router: {
        linkExactActiveClass: "exact-active-link",
        linkActiveClass: "active-link"
        // Example to override router functionality
        //     extendRoutes (routes, resolve) {
        //     routes.push({
        //       name: '404',
        //       path: '*',
        //       component: resolve(__dirname, 'pages/404.vue')
        //     })
    },

    /*
     ** Build configuration
     */
    build: {
        extend(config, ctx) {
            // This is used by plugins/global-svg-loader.js
            config.module.noParse = /\/assets\/svgs\/.+(svg$)/
        }
    }
}
