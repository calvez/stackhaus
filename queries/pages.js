import gql from 'graphql-tag'

export const GET_PAGE_ANCESTORS = gql`
    query {
        pages {
            edges {
                node {
                    id
                    title
                    slug
                    date
                    ancestors {
                        __typename
                    }
                }
            }
        }
    }
`

export const GET_PAGE_BY = gql`
    query($uri: String) {
        pageBy(uri: $uri) {
            slug
            title
            id
            pageId
            date
            uri
            content
            featuredImage {
                id
                sourceUrl
                caption
            }
            childPages {
                nodes {
                    id
                    title
                    slug
                }
            }
        }
    }
`

export const GET_PAGE_BY_DEV_ID = gql`
    query($devId: String) {
        pages(
            where: {
                metaQuery: {
                    metaArray: [
                        {
                            key: "developer_id"
                            value: $devId
                            compare: EQUAL_TO
                        }
                    ]
                }
            }
            first: 1
        ) {
            pageInfo {
                hasPreviousPage
                hasNextPage
                endCursor
            }
            edges {
                node {
                    id
                    pageId
                    title
                    content
                    date
                    slug
                    uri
                    featuredImage {
                        ...featuredAttachment
                    }
                    childPages {
                        nodes {
                            id
                            title
                            slug
                            featuredImage {
                                ...featuredAttachment
                            }
                        }
                    }
                    ancestors {
                        __typename
                    }
                }
            }
        }
    }

    fragment featuredAttachment on MediaItem {
        id
        sourceUrl
        caption
        mediaDetails {
            file
            height
            width
            meta {
                caption
                credit
                title
            }
        }
    }
`

export const GET_ALL_PAGES = gql`
    query {
        pages {
            edges {
                node {
                    id
                    title
                    slug
                    date
                    childPages {
                        nodes {
                            id
                            title
                            slug
                        }
                    }
                }
            }
        }
    }
`
