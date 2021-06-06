import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext({})
CartContext.displayName = "CartContext"

const CartProvider = (props: any) => {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const data: any = localStorage.getItem("cart")
      const localData: any = JSON.parse(data)
      setItems(localData)
    }
  }, [])

  const value = { items, setItems }
  return <CartContext.Provider value={value} {...props} />
}

const useCart = () => {
  return useContext(CartContext)
}

const useInCart = (item: any) => {
  const { items }: any = useCart()
  return items.findIndex((char: any) => char.id === item.id) > -1
}

export { CartProvider, useCart, useInCart }
