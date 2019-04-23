import gql from 'graphql-tag'

export const GET_CATEGORIES_AND_RELATED = gql`
    query {
        categories {
            edges {
                node {
                    id
                    categoryId
                    name
                    posts {
                        nodes {
                            id
                            title
                            date
                            featuredImage {
                                id
                                sourceUrl
                                #winHeight
                            }
                        }
                    }
                }
            }
        }
    }
`

export const GET_CATEGORIES = gql`
    query {
        categories {
            edges {
                node {
                    id
                    categoryId
                    name
                }
            }
        }
    }
`
