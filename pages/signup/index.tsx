import Layout from "@components/Layout"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { PEOPLE, SIGNUP_MUTATION } from "graphql/Queries"
import { AUTH_TOKEN } from "types/types.d"
import { useHistory } from "react-router-dom"
import { FC, useState } from "react"
import { useRouter } from "next/router"

interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => {
  const { data, loading, error } = useQuery(PEOPLE)
  const router = useRouter()

  console.log("data: ", { data })

  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
  })

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token)
      router.push("/")
    },
  })

  const handleFormSubmit = (e: any) => {
    e.preventDefault()

    let email = e.target.elements.email?.value
    let password = e.target.elements.password?.value

    signup({
      variables: { email: email, password: password },
    })
  }
  return (
    <Layout title="Sign up">
      <div className="h-screen flex bg-gray-bg1">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
            {formState.login ? "Login 🔐" : "Sign Up 🔐"}
          </h1>

          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                placeholder="Your Email"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value,
                  })
                }
                value={formState.email}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                placeholder="Your Password"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    password: e.target.value,
                  })
                }
                value={formState.password}
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                className={`bg-green px-3 py-2 w text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                {formState.login ? "sign up" : "create account"}
              </button>
              <button
                className="pointer button mx-5"
                onClick={(e: any) =>
                  setFormState({
                    ...formState,
                    login: !formState.login,
                  })
                }
              >
                {formState.login
                  ? "need to create an account?"
                  : "already have an account?"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp
