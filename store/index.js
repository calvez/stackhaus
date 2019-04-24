// GQL
import { GET_MENU } from '~/queries/menus.js'
import { formatMainMenuData } from '~/utils/formatters.js'

// State
export const state = () => ({})

// Getters
export const getters = {}

// Mutations
export const mutations = {}

// Actions
export const actions = {
    async nuxtServerInit(context, { req, app }) {
        const client = app.apolloProvider.defaultClient

        // TODO: set menu locations:
        // let location = ['headerMenu', 'footerMenu']
        let headerMenuData = await client
            .query({
                query: GET_MENU,
                variables: {
                    // TODO: get location from plugin?
                    location: 'HEADER_MENU' //header-menu
                }
            })
            .then(({ data }) => {
                // console.log('data', data)
                return formatMainMenuData(data)
            })
        context.commit('menus/HEADER_MENU', headerMenuData)

        let footerMenuData = await client
            .query({
                query: GET_MENU,
                variables: {
                    location: 'FOOTER_MENU'
                }
            })
            .then(({ data }) => {
                // console.log('data', data)
                return formatMainMenuData(data)
            })
        context.commit('menus/FOOTER_MENU', footerMenuData)

        let socialMenu = await client
            .query({
                query: GET_MENU,
                variables: {
                    location: 'SOCIAL_MENU'
                }
            })
            .then(({ data }) => {
                // console.log('data', data)
                return formatMainMenuData(data)
            })
        context.commit('menus/SOCIAL_MENU', socialMenu)
    }
}

// TODO Write action that will take a page object and set the nessesary data for OG
// TODO Wire up UPDATE_REFERRAL_ROUTE into router. Maybe this helps: https://github.com/funkhaus/vuehaus/blob/9adbf3cdcde3426455848fcce19f8f5d1d2c18c0/src/utils/router.js#L51-L77
