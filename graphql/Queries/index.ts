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

export const PEOPLE = gql`
  query People {
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
