import React, { FC, ReactElement, ReactText } from "react"
import { toast, ToastContent, ToastOptions } from "react-toastify"
import {
  FaInfo,
  FaCheck,
  FaExclamationTriangle,
  FaBug,
  FaExclamationCircle,
} from "react-icons/fa"

export const displayIcon = (type: any) => {
  switch (type) {
    case "success":
      return <FaCheck />
    case "info":
      return <FaInfo />
    case "error":
      return <FaExclamationCircle />
    case "warn":
      return <FaExclamationTriangle />
    default:
      return <FaBug />
  }
}

interface ToastMessageProps {
  type: "success" | "info" | "dark" | "error" | "warn"
  message: string
}

const ToastMessage: FC<ToastMessageProps> = ({ type, message }) => {
  const Fn = toast[type]

  return (
    <div>
      {Fn(
        <div className="flex text-white">
          <div className="flex-shrink-0 text-center w-[30px] pt-2 text-base">
            {displayIcon(type)}
          </div>
          <div className="flex text-[15px] flex-grow p-[8px 12px]">
            {message}
          </div>
        </div>
      )}
    </div>
  )
}

export default ToastMessage
