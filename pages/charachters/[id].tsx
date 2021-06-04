import { ALLPEOPLE, PERSON } from "graphql/Queries"
import { client } from "../../utils/apollo"
import { FC, useEffect } from "react"
import { Context } from "vm"
import cookies from "next-cookies"
import { useRouter } from "next/router"
import Layout from "@components/Layout"

interface PersonProps {
  person: any[]
}

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
  const tkn = cookies(context).auth_token
  const token = context.req.headers.cookie

  const { data } = await client.query({
    query: PERSON,
    variables: { id },
    context: {
      headers: {
        authorization: token,
      },
    },
  })

  return {
    props: {
      person: data,
    },
  }
}

export default Person
