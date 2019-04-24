import gql from 'graphql-tag'

export const GET_MENUS = gql`
    query {
        nodes {
            id
            menuId
            menuItems {
                edges {
                    node {
                        id
                        menuItemId
                        title
                        url
                        connectedObject {
                            __typename
                        }
                        cssClasses
                        description
                        label
                        linkRelationship
                        target
                    }
                }
                nodes {
                    id
                    menuItemId
                    title
                    url
                    connectedObject {
                        __typename
                    }
                    cssClasses
                    description
                    label
                    linkRelationship
                    target
                }
            }
        }
    }
`

export const GET_MENU = gql`
    query($location: MenuLocationEnum) {
        menuItems(where: { location: $location }) {
            edges {
                node {
                    ...menuFields
                    childItems {
                        edges {
                            node {
                                ...menuFields
                            }
                        }
                    }
                }
            }
        }
    }

    fragment menuFields on MenuItem {
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

export const GET_MENU_ITEMS = gql`
    query($location: MenuLocationEnum) {
        menuItems(where: { location: $location }) {
            all: nodes {
                title
                url
                label
                cssClasses
                target
                linkRelationship
                description
            }
        }
    }
`
