import { useQuery } from "@apollo/react-hooks"
import Layout from "@components/Layout"
import { PEOPLE, USER } from "graphql/Queries"

const IndexPage = () => {
  const { data, loading, error } = useQuery(PEOPLE)

  console.log("data: ", { data })

  if (error) console.log({ error })

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="flex w-full justify-center items-start h-[100px] text-3xl">
        <h2> 🚀 Front-end development task (Star Wars Edition)</h2>
      </div>
    </Layout>
  )
}

export default IndexPage
