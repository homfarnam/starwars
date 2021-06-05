import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { AUTH_TOKEN } from "types/types.d"
import { useQuery } from "@apollo/react-hooks"
import { USER } from "graphql/Queries"
import Cookies from "js-cookie"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [AuthToken, setAuthToken] = useState<any>()
  const router = useRouter()
  const { data } = useQuery(USER)

  console.log("user: ", data)

  useEffect(() => {
    setAuthToken(localStorage.getItem(AUTH_TOKEN))
  }, [])

  return (
    <header className="w-full flex bg-[#3fcdad]">
      <nav className="flex w-full justify-center m-auto py-2">
        <div className="w-4/12"></div>
        <div className="flex justify-center space-x-5 text-lg w-4/12">
          <Link href="/">
            <a>Charachters</a>
          </Link>

          {!AuthToken && (
            <div className="flex">
              <Link href="/signup">Sign up</Link>
            </div>
          )}

          {AuthToken ? (
            <div
              className="cursor-pointer"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                Cookies.remove(AUTH_TOKEN)
                router.push(`/`)
                router.reload()
              }}
            >
              logout
            </div>
          ) : (
            <Link href="/login">login</Link>
          )}
        </div>
        <div className="flex  w-4/12">
          <div className="flex">
            <span>User: </span> <p> {data?.me?.email}</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
