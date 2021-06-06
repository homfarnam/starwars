import { useCart, useInCart } from "context/context"
import Image from "next/image"
import Link from "next/link"
import { FC, useEffect } from "react"

interface CharProps {
  item: any
}

const Char: FC<CharProps> = ({ item }) => {
  const inCart = useInCart(item)
  const { items, setItems }: any = useCart()

  const handleClick = () => {
    const newItems = inCart
      ? items.filter((cartItem: any) => cartItem.id !== item.id)
      : [...items, item]
    setItems(newItems)

    return false
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  return (
    <div
      key={item?.id}
      className="cursor-pointer border-transparent flex flex-col shadow-lg justify-center items-center m-3 p-4 w-[200px] h-[200px]"
    >
      <Image
        src={item?.image}
        layout="fixed"
        width="100"
        height="100"
        objectFit="contain"
        quality="100"
        loading="lazy"
      />
      <Link href={`/charachters/${item.id}`}>
        <p>{item?.name}</p>
      </Link>
      <button onClick={handleClick} className="border px-3 mt-4 bg-red">
        {inCart ? "x" : "+"}
      </button>
    </div>
  )
}

export default Char
