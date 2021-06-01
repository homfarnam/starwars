import Layout from "@components/Layout"
import * as React from "react"

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Layout title="Home">
      <div>Home</div>
    </Layout>
  )
}

export default Home
