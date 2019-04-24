import gql from 'graphql-tag'

export const GET_POST_BY = gql`
    query($slug: String, $postId: Int) {
        postBy(slug: $slug, postId: $postId) {
            slug
            title
            content
            id
            postId
            date
            uri
            featuredImage {
                id
                sourceUrl
            }
            categories {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    }
`

export const GET_POSTS = gql`
    query($first: Int) {
        posts(first: $first) {
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            edges {
                node {
                    id
                    title
                    date
                    slug
                    featuredImage {
                        id
                        sourceUrl
                    }
                    categories {
                        edges {
                            node {
                                id
                            }
                        }
                    }
                }
            }
        }
    }
`
