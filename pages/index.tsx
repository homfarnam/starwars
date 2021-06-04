import Layout from "@components/Layout"
import { useQuery } from "@apollo/react-hooks"
import { ALLPEOPLE } from "graphql/Queries"
import Image from "next/image"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import Link from "next/link"
import { AUTH_TOKEN } from "types/types.d"
import Cookies from "js-cookie"

const IndexPage = () => {
  const { data, error } = useQuery(ALLPEOPLE)
  const [AllPeople, setAllPeople] = useState<any>(null)
  const [Search, setSearch] = useState<string>("")
  const [NewData, setNewData] = useState<any>(null)

  const token = Cookies.get(AUTH_TOKEN)

  console.log(token)

  useEffect(() => {
    if (data) {
      setAllPeople(data)
      console.log("data: ", data)
    }
    if (error) {
      toast.error('Can"t fetch data')
    }
  }, [data])

  useEffect(() => {
    console.log(
      "data new: ",
      Search,
      data?.allPeople.filter(
        (item: { name: string; gender: string; id: number }) =>
          item.name == Search
      )
    )
  }, [Search])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="flex w-full justify-center items-start h-[100px] text-3xl">
        <h2> 🚀 Front-end development task (Star Wars Edition)</h2>
      </div>
      <div className="flex w-full justify-center items-center space-x-3 my-10">
        <h3 className="text-2xl mr-4 relative">Search</h3>
        <input
          type="text"
          placeholder="Search for star wars charachter ..."
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex w-11/12 flex-wrap justify-center m-auto">
        {AllPeople?.allPeople?.map(
          (item: { id: number; name: string; image: string }) => {
            return (
              <Link key={item?.id} href={`/charachters/${item.id}`}>
                <div className="cursor-pointer border-transparent flex flex-col shadow-lg justify-center items-center m-3 p-4 w-[200px] h-[200px]">
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
              </Link>
            )
          }
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
