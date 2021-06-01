import Layout from "@components/Layout"
import { useQuery } from "@apollo/react-hooks"
import { PEOPLE } from "graphql/Queries"
import Image from "next/image"

const IndexPage = () => {
  const { data } = useQuery(PEOPLE)

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="flex w-full justify-center items-start h-[100px] text-3xl">
        <h2> 🚀 Front-end development task (Star Wars Edition)</h2>
      </div>
      <div className="flex w-11/12 flex-wrap justify-center m-auto">
        {data?.allPeople?.map(
          (item: { id: number; name: string; image: string }) => {
            return (
              <div
                key={item?.id}
                className="border m-3 p-5 w-[200px] h-[200px]"
              >
                <div>{item?.name}</div>
                <Image
                  src={item?.image}
                  layout="fixed"
                  width="100"
                  height="100"
                  objectFit="contain"
                  quality="100"
                />
              </div>
            )
          }
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
