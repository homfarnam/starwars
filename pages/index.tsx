import { useQuery } from "@apollo/client"
import Layout from "@components/Layout"
import { USER } from "graphql/Queries"

const IndexPage = () => {
  const { data } = useQuery(USER)

  console.log("data: ", { data })

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div>hi</div>
    </Layout>
  )
}

export default IndexPage
