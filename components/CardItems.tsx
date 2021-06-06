import { useCart } from "context/context"

export default function CardItems() {
  const { items, setItems }: any = useCart()
  if (!items?.length) return <p className="mt-20">No data</p>

  const handleClick = (item: any) => {
    return () => selectItem(item)
  }

  const selectItem = (item: any) => {
    const newItems = items.filter((cartItem: any) => cartItem.id !== item.id)
    setItems(newItems)

    return false
  }

  return (
    <div className="flex flex-row justify-between items-center mt-7 mb-6">
      {items
        ? items.map((item: { id: string | number; name: string }) => (
            <div
              key={item.id}
              className="border m-5 flex flex-col justify-center items-center p-3"
            >
              <p> {item.name}</p>
              <button
                onClick={handleClick(item)}
                className="bg-white text-black w-5 h-5"
              >
                {"x"}
              </button>
            </div>
          ))
        : ""}
    </div>
  )
}
