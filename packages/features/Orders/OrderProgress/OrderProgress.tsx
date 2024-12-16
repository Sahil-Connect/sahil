"use client"

import { Card } from "ui"
import { Orders } from "@sahil/lib/graphql/__generated__/graphql"
import { formatDateTime } from "@sahil/lib/dates"
import { 
  HiOutlineCheckCircle, 
  HiOutlineTruck, 
  HiOutlineClipboard,
  HiOutlineXCircle
} from "react-icons/hi2"

type Props = {
  order: Orders
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "PENDING":
      return <HiOutlineClipboard className="h-5 w-5 text-primary" />
    case "CONFIRMED":
      return <HiOutlineCheckCircle className="h-5 w-5 text-success" />
    case "ENROUTE":
      return <HiOutlineTruck className="h-5 w-5 text-primary" />
    case "CANCELED":
      return <HiOutlineXCircle className="h-5 w-5 text-error" />
    default:
      return <HiOutlineClipboard className="h-5 w-5 text-primary" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "PENDING":
      return "text-primary"
    case "CONFIRMED":
      return "text-success"
    case "ENROUTE":
      return "text-primary"
    case "CANCELED":
      return "text-error"
    default:
      return "text-primary"
  }
}

const getStatusDescription = (status: string) => {
  switch (status) {
    case "PENDING":
      return "Order received, awaiting confirmation."
    case "CONFIRMED":
      return "Order confirmed, preparing for shipment."
    case "ENROUTE":
      return "Order in transit, awaiting delivery."
    case "CANCELED":
      return "Order canceled, we're sorry for any inconvenience."
    default:
      return ""
  }
}

export const OrderProgress = ({ order }: Props) => {
  const { status_histories } = order
  const sortedHistory = [...status_histories].sort((a, b) => 
    new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  )

  return (
    <div className="p-6 bg-base-100 rounded-lg">
      {sortedHistory.map((history, index) => (
        <div key={index} className="relative flex gap-4">
          <div className="flex flex-col items-center">
            <div className={`rounded-full p-2 bg-base-100 border-2 ${
              index === sortedHistory.length - 1 ? getStatusColor(history.status) : "border-gray-200"
            }`}>
              {getStatusIcon(history.status)}
            </div>
            {index < sortedHistory.length - 1 && (
              <div className="w-0.5 h-16 bg-gray-200" />
            )}
          </div>
          <div className="flex-1 pb-8 space-y-2">
            <div className="text-sm text-gray-500">
              {formatDateTime(history.created_at)}
            </div>
            <div className={`font-medium badge py-2 ${
              index === sortedHistory.length - 1 ? getStatusColor(history.status) : ""
            }`}>
              {history.status}
            </div>
            <div className="text-sm text-gray-600">
              {getStatusDescription(history.status)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

