import Layout from "@components/Layout"
import { useQuery } from "@apollo/react-hooks"
import { PEOPLE } from "graphql/Queries"
import Image from "next/image"
import { toast } from "react-toastify"
import { useEffect } from "react"

const IndexPage = () => {
  const { data, error } = useQuery(PEOPLE)

  useEffect(() => {
    if (error) {
      toast.error('Can"t fetch data')
    }
  }, [data])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="flex w-full justify-center items-start h-[100px] text-3xl">
        <h2> 🚀 Front-end development task (Star Wars Edition)</h2>
      </div>
      <div className="flex w-full justify-center items-center space-x-3 my-10">
        <h3 className="text-2xl mr-4 relative">Search</h3>
        <input type="text" placeholder="Search for star wars charachter ..." />
      </div>
      <div className="flex w-11/12 flex-wrap justify-center m-auto">
        {data?.allPeople?.map(
          (item: { id: number; name: string; image: string }) => {
            return (
              <div
                key={item?.id}
                className="border-transparent flex flex-col shadow-lg justify-center items-center m-3 p-4 w-[200px] h-[200px]"
              >
                <Image
                  src={item?.image}
                  layout="fixed"
                  width="100"
                  height="100"
                  objectFit="contain"
                  quality="100"
                  loading="lazy"
                />
                <p>{item?.name}</p>
              </div>
            )
          }
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
