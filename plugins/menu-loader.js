// Register all components globally
import Vue from 'vue'
import _kebabCase from 'lodash/kebabCase'

// TODO: Set menu store from plugin
export default ({ app, store }) => {
    // This way we can use it in middleware and pages asyncData/fetch
    let locations = ['headerMenu', 'socialMenu']
}
