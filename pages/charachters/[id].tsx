import { PERSON } from "graphql/Queries"
import { FC } from "react"
import { initializeApollo, addApolloState } from "../../utils/apolloClient"
import { Context } from "vm"
import { useRouter } from "next/router"
import Layout from "@components/Layout"

interface PersonProps {
  person: any[]
}

const parseCookie = (str: any) =>
  str
    .split(";")
    .map((v: any) => v.split("="))
    .reduce((acc: any, v: any) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
      return acc
    }, {})

const Person: FC<PersonProps> = ({ person }) => {
  const router = useRouter()
  const { id } = router.query

  console.log("id:", id)

  console.log("person : ", person)
  return (
    <Layout title={`Charchter ${id}`}>
      <div></div>
    </Layout>
  )
}

// export const getStaticPaths = async (context: Context) => {
//   const tkn = cookies(context).auth_token

//   const { data } = await client.query({
//     query: ALLPEOPLE,
//   })

//   const chars = data.map((item: { id: number }) => {
//     return {
//       params: {
//         id: item.id,
//       },
//       context: {
//         headers: {
//           authorization: tkn,
//         },
//       },
//     }
//   })

//   return {
//     paths: chars,
//     fallback: false,
//   }
// }

// export const getStaticProps = async (context: Context) => {
//   const id = context.params.id
//   const tkn = cookies(context).auth_token

//   const { data } = await client.query({
//     query: PERSON,
//     variables: { id },
//     context: {
//       headers: {
//         authorization: tkn,
//       },
//     },
//   })

//   return {
//     props: {
//       person: data,
//     },
//     revalidate: 1,
//   }
// }

export const getServerSideProps = async (context: Context) => {
  const id = context.params.id
  const token = parseCookie(context.req.headers.cookie)

  console.log("token:", token["auth-token"])

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: PERSON,
    variables: { id },
    context: {
      headers: {
        authorization: token["auth-token"],
      },
    },
  })

  return addApolloState(apolloClient, {
    props: data,
  })
}

export default Person
