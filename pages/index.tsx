import { useQuery } from "@apollo/react-hooks"
import Layout from "@components/Layout"
import { PEOPLE, USER } from "graphql/Queries"

const IndexPage = () => {
  const { data, loading, error } = useQuery(PEOPLE)

  console.log("data: ", { data })

  if (loading) return <p>loading</p>

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div>hi</div>
    </Layout>
  )
}

export default IndexPage
