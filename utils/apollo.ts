import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import fetch from "isomorphic-unfetch"
import { setContext } from "@apollo/client/link/context"
import { AUTH_TOKEN } from "types/types.d"

import store from "store"

// Update the GraphQL endpoint to any instance of GraphQL that you like
// const GRAPHQL_URL = "https://fe-case-study.vercel.app/api"

const GRAPHQL_URL =
  process.env.API_URL || "https://fe-case-study.vercel.app/api"

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  const token = store.get(AUTH_TOKEN)

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  }
})

const httpLink = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL + "/graphql",
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
