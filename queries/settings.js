import gql from 'graphql-tag'

export const GET_SETTINGS = gql`
    query {
        generalSettings {
            dateFormat
            description
            email
            language
            startOfWeek
            timeFormat
            timezone
            title
            url
        }
    }
`
