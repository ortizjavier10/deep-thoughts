import gql from 'graphql-tag';

export const QUERY_THOUGHTS = gql `
    query thoughts($username: String) {
        thoughts(username: $username) {
            _id
            thoughtText
            createdAt
            username
            reactionCounts {
                _id 
                createdAt
                username
                reactionBody
            }

        }
    }
`;