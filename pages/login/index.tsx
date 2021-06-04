import Layout from "@components/Layout"
import { useMutation } from "@apollo/client"
import { LOGIN_MUTATION } from "graphql/Queries"
import { AUTH_TOKEN } from "types/types.d"
import { useRouter } from "next/router"
import { FC, useCallback, useState } from "react"
import ToastMessage from "@components/Toast"

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const router = useRouter()

  const notify = useCallback((type, message) => {
    ToastMessage({ type, message })
  }, [])

  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
  })

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token)
      notify("success", "Successfully logined!")
      router.push("/")
    },
    onError: () => {
      notify("error", "User not found!")
    },
  })

  const handleFormSubmit = (e: any) => {
    e.preventDefault()

    let email = e.target.elements.email?.value
    let password = e.target.elements.password?.value

    login({
      variables: { email: email, password: password },
    })
  }
  return (
    <Layout title="Sign in">
      <div className="flex">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border-transparent shadow-lg py-10 px-16">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
            Log in to your account 🔐
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
                className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
