import { ApolloProvider } from "@apollo/react-hooks"
import Head from "next/head"
import "tailwindcss/tailwind.css"
import "../styles/index.css"
import "react-toastify/dist/ReactToastify.min.css"
import { ToastContainer } from "react-toastify"
import { useApollo } from "../utils/apolloClient"
import { CartProvider } from "context/context"

function MyApp({ Component, pageProps }: any) {
  const apolloClient = useApollo(pageProps)

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <CartProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            draggable={false}
            closeOnClick
            pauseOnHover
          />
          <Component {...pageProps} />
        </CartProvider>
      </ApolloProvider>
    </>
  )
}

// Wraps all components in the tree with the data provider
export default MyApp
