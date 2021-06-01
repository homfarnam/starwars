import Layout from "@components/Layout"
import * as React from "react"
import { useQuery } from "@apollo/react-hooks"
import { PEOPLE } from "graphql/Queries"
import Image from "next/image"

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { data, error } = useQuery(PEOPLE)

  console.log(data?.allPeople)

  return (
    <Layout title="Home | All data">
      <div className="w-full flex justify-center h-[200px]">
        <h2 className="text-2xl font-bold">Star Wars characters</h2>
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

export default Home
