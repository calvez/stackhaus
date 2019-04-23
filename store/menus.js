// TODO: Define menus somewhere insead of having to hardcode them
// TODO: make plugin to register all menus in store

export const state = () => ({
    headerMenu: {},
    socialMenu: {}
})

export const mutations = {
    HEADER_MENU(state, data) {
        state.headerMenu = data
    },
    SOCIAL_MENU(state, data) {
        state.socialMenu = data
    }
}
