export const state = () => ({
    mainMenu: {},
    footerMenu: {},
    socialMenu: {}
})

export const mutations = {
    MAIN_MENU(state, data) {
        state.mainMenu = data
    },
    FOOTER_MENU(state, data) {
        state.footerMenu = data
    },
    SOCIAL_MENU(state, data) {
        state.socialMenu = data
    }
}
