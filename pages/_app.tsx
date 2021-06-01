import { ApolloProvider } from "@apollo/react-hooks"
import Head from "next/head"
import "tailwindcss/tailwind.css"
import { client } from "utils/apollo"
import "../styles/index.css"

function MyApp({ Component, pageProps, apollo }: any) {
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

// Wraps all components in the tree with the data provider
export default MyApp
