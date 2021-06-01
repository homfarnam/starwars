import React, { ReactNode, useEffect, useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { AUTH_TOKEN } from "types/types.d"
import { useRouter, Router } from "next/router"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [AuthToken, setAuthToken] = useState<any>()
  const router = useRouter()

  useEffect(() => {
    setAuthToken(localStorage.getItem(AUTH_TOKEN))
  }, [])

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="w-full flex">
        <nav className="flex w-6/12 justify-around m-auto py-2">
          <Link href="/">
            <a>Home</a>
          </Link>

          {AuthToken && (
            <div className="flex">
              <Link href="/signup">Sign up</Link>
            </div>
          )}

          {AuthToken ? (
            <div
              className="cursor-pointer"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                router.push(`/`)
              }}
            >
              logout
            </div>
          ) : (
            <Link href="/login">login</Link>
          )}
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  )
}

export default Layout
