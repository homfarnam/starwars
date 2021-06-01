import React, { ReactNode } from "react"
import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "This is the default title" }: Props) => {
  return (
    <div className="flex flex-col h-screen justify-between bg-backbody-100">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
