import Layout from "@components/Layout"
import { useQuery } from "@apollo/react-hooks"
import { ALLPEOPLE } from "graphql/Queries"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import Char from "@components/Char"
import CardItems from "@components/CardItems"

const IndexPage = () => {
  const { data, error } = useQuery(ALLPEOPLE)
  const [AllPeople, setAllPeople] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState<string>("")

  useEffect(() => {
    if (data) {
      setAllPeople(data)
    }
    if (error) {
      toast.error('Can"t fetch data')
    }
  }, [data])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="flex w-full justify-center items-start h-[100px] text-3xl">
        <h2> 🚀 Front-end development task (Star Wars Edition)</h2>
      </div>
      <div className="w-full flex flex-col items-center flex-wrap justify-center my-10 ">
        <h3>Favorites Charachters</h3>
        <CardItems />
      </div>
      <div className="flex w-full justify-center items-center space-x-3 my-10">
        <h3 className="text-2xl mr-4 relative">Search</h3>
        <input
          type="text"
          placeholder="Search for star wars charachter ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex w-11/12 flex-wrap justify-center m-auto">
        {AllPeople?.allPeople
          ?.filter((item: any) =>
            item.name.toLocaleLowerCase().startsWith(searchTerm)
          )
          .map((item: { id: number; name: string; image: string }) => (
            <Char item={item} key={item.id} />
          ))}
      </div>
    </Layout>
  )
}

export default IndexPage
