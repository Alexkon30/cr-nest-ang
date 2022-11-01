import { gql } from 'apollo-angular';

const GET_ALL_USERS = gql`
  query {
    users {
      firstName
      lastName
      email
      password
      _id
    }
  }
`;

export { GET_ALL_USERS }
