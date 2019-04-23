import gql from 'graphql-tag'

export const LoginUser = gql`
    mutation($password: String, $clientMutationId: String) {
        login(
            input: {
                clientMutationId: clientMutationId
                username: "funkhaus"
                password: password
            }
        ) {
            authToken
            user {
                id
                name
            }
        }
    }
`
