// NOTE: Test fragment to import in other gql-tag queries
import gql from 'graphql-tag'

export const menuItemsFragment = gql`
    fragment menuItemsFragment on MenuItem {
        title
        url
        menuItemId
        target
        id
        label
        linkRelationship
        description
        cssClasses
    }
`
