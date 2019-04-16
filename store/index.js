// GQL
import mainMenu from '~/queries/menus/GetMenu.gql'
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
        console.log('server init')
        const client = app.apolloProvider.defaultClient

        let menuData = await client
            .query({
                query: mainMenu,
                variables: {
                    location: 'MAIN_MENU'
                }
            })
            .then(({ data }) => {
                return formatMainMenuData(data)
            })

        context.commit('menus/MAIN_MENU', menuData)
    }
}

// TODO Write action that will take a page object and set the nessesary data for OG
// TODO Wire up UPDATE_REFERRAL_ROUTE into router. Maybe this helps: https://github.com/funkhaus/vuehaus/blob/9adbf3cdcde3426455848fcce19f8f5d1d2c18c0/src/utils/router.js#L51-L77
