// NOTE: Successfully imports fragments from js files
import gql from 'graphql-tag'
import { menuItemsFragment } from './fragments/menuItemsFragment.js'

export const getMenuTest = gql`
    query GET_MENU($location: MenuLocationEnum) {
        menuItems(where: { location: $location }) {
            edges {
                node {
                    ...menuItemsFragment
                    childItems {
                        edges {
                            node {
                                ...menuItemsFragment
                            }
                        }
                    }
                }
            }
        }
    }
    ${menuItemsFragment}
`
