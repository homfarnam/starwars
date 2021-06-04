import { ApolloProvider } from "@apollo/react-hooks"
import Head from "next/head"
import "tailwindcss/tailwind.css"
import { client } from "utils/apollo"
import "../styles/index.css"
import "react-toastify/dist/ReactToastify.min.css"
import { ToastContainer } from "react-toastify"

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

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
      </ApolloProvider>
    </>
  )
}

// Wraps all components in the tree with the data provider
export default MyApp
