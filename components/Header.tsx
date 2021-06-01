import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { AUTH_TOKEN } from "types/types.d"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [AuthToken, setAuthToken] = useState<any>()
  const router = useRouter()

  useEffect(() => {
    setAuthToken(localStorage.getItem(AUTH_TOKEN))
  }, [])
  return (
    <header className="w-full flex bg-[#3fcdad]">
      <nav className="flex w-6/12 justify-around m-auto py-2">
        <Link href="/">
          <a>Home</a>
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
              router.push(`/home`)
            }}
          >
            logout
          </div>
        ) : (
          <Link href="/login">login</Link>
        )}
      </nav>
    </header>
  )
}

export default Header
