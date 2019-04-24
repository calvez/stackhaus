// TODO: Define menus somewhere insead of having to hardcode them
// TODO: make plugin to register all menus in store
export const state = () => ({
    pageData: {}
})

export const mutations = {
    PAGE_DATA(state, data) {
        state.pageData = data
    }
}
