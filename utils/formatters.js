import _get from 'lodash/get'
import _filter from 'lodash/filter'

// Settings
export const formatSettingsData = queryData => {
    return queryData // return _get(queryData, 'menuItems.all', false)
}
// Menu
export const formatMenuData = queryData => {
    return _get(queryData, 'menuItems.all', false)
}
export const formatMainMenuData = queryData => {
    // TODO: Get children
    let filtered = []
    let response = _get(queryData, 'menuItems.edges', false)
    for (let i of response) {
        filtered.push(i.node)
    }
    return filtered
}

// Page
export const formatPageData = queryData => {
    return queryData // return _get(queryData, 'pages.edges[0].node', false)
}
export const formatPageByData = queryData => {
    return queryData // return _get(queryData, 'pages.edges[0].node', false)
}
// Post
export const formatPostsData = queryData => {
    return queryData // return _get(queryData, 'posts.edges', [])
}
export const formatPostByData = queryData => {
    return _get(queryData, 'postBy', false)
}
export const formatPostCategoriesData = queryData => {
    // return _get(queryData, 'postBy', false)
    return queryData
}
export const formatPostCategoriesRelatedData = queryData => {
    return _get(queryData, 'categories.edges', false)
}
