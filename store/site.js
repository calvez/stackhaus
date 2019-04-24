export const state = () => ({
    // TODO: add this from nuxt config?
    backendURL: 'http://stackhaus-backend.flywheelsites.com/graphql',
    windowLocation: 'http://localhost:3000/',
    menuOpened: false,
    breakpoint: ''
    //referral: ''
})

export const mutations = {
    SET_BREAKPOINT(state, breakpoint) {
        state.breakpoint = breakpoint
    },
    OPEN_MENU(state) {
        state.menuOpened = true
    },
    CLOSE_MENU(state) {
        state.menuOpened = false
    }
    // UPDATE_REFERRAL_ROUTE(state, referral) {
    //     state.referral = referral
    // }
}
