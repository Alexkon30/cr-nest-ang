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

const GET_ALL_LESSONS = gql`
  query lessons($dateStart: String!, $dateEnd: String!) {
    lessons(dateStart: $dateStart, dateEnd: $dateEnd) {
      _id
      theme
      groups
      teachers {
        firstName
      }
      discipline
      room
      dateStart
      dateEnd
      type
    }
  }
`;

export { GET_ALL_USERS, GET_ALL_LESSONS };
