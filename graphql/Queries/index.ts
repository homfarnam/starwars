import { gql } from "@apollo/client"

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export const USER = gql`
  query User {
    me {
      id
      email
      createdAtAt
    }
  }
`

export const ALLPEOPLE = gql`
  query AllPeople {
    allPeople {
      id
      name
      birthYear
      eyeColor
      gender
      height
      hairColor
      mass
      skinColor
      homeworld {
        id
      }
      films {
        id
      }
      species {
        id
      }
      image
      starships {
        id
      }
      vehicles {
        id
      }
      createdAt
    }
  }
`

export const PERSON = gql`
  query People($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      eyeColor
      gender
      height
      hairColor
      mass
      skinColor
      homeworld {
        id
      }
      films {
        id
      }
      species {
        id
      }
      image
      starships {
        id
      }
      vehicles {
        id
      }
      createdAt
    }
  }
`
