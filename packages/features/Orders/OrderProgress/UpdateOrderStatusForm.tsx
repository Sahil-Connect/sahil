"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button, Card, IconButton } from "ui"
import {
  Orders,
  Order_Status_Enum,
} from "@sahil/lib/graphql/__generated__/graphql"
import { useAppendOrderStatus } from "@sahil/lib/hooks/orders"
import { formatDateTime } from "@sahil/lib/dates"
import { 
  HiOutlineClipboard,
  HiOutlineCheckCircle,
  HiOutlineTruck,
  HiOutlineArchiveBox,
  HiOutlineXCircle,
  HiCalendarDays,
  HiArrowRight,
  HiArrowPathRoundedSquare,
  HiOutlineInformationCircle
} from "react-icons/hi2"
import toast from "react-hot-toast"

const statusSchema = z.object({
  status: z.enum([
    "PENDING",
    "CONFIRMED",
    "ENROUTE",
    "DELIVERED",
    "FULFILLED",
    "CANCELED"
  ]),
  note: z.string().optional(),
})

type FormData = z.infer<typeof statusSchema>

type Props = {
  order: Orders
}

const STATUS_FLOW = {
  PENDING: ["CONFIRMED", "CANCELED"],
  CONFIRMED: ["ENROUTE", "CANCELED"],
  ENROUTE: ["DELIVERED", "CANCELED"],
  DELIVERED: ["FULFILLED", "CANCELED"],
  FULFILLED: ["CANCELED"],
  CANCELED: [],
} as const

const STATUS_INFO = {
  PENDING: {
    icon: HiOutlineClipboard,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Order received, awaiting confirmation"
  },
  CONFIRMED: {
    icon: HiOutlineCheckCircle,
    color: "text-success",
    bgColor: "bg-success/10",
    description: "Order confirmed, preparing for shipment"
  },
  ENROUTE: {
    icon: HiOutlineTruck,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Order in transit, awaiting delivery"
  },
  DELIVERED: {
    icon: HiOutlineArchiveBox,
    color: "text-success",
    bgColor: "bg-success/10",
    description: "Order delivered successfully"
  },
  FULFILLED: {
    icon: HiOutlineCheckCircle,
    color: "text-success",
    bgColor: "bg-success/10",
    description: "Order completed and fulfilled"
  },
  CANCELED: {
    icon: HiOutlineXCircle,
    color: "text-error",
    bgColor: "bg-error/10",
    description: "Order has been canceled"
  },
} as const

export const UpdateOrderStatusForm = ({ order }: Props) => {
  const { appendOrderStatus, loading } = useAppendOrderStatus()
  const [showNote, setShowNote] = useState(false)
  const [showStatusInfo, setShowStatusInfo] = useState(false)
  const currentStatus = order.status_histories?.[0]?.status || "PENDING"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(statusSchema),
  })

  const availableStatuses = STATUS_FLOW[currentStatus as keyof typeof STATUS_FLOW]
  const currentStatusInfo = STATUS_INFO[currentStatus as keyof typeof STATUS_INFO]

  const onSubmit = async (data: FormData) => {
    if (loading) return
    
    try {
      await appendOrderStatus({
        variables: {
          object: {
            order_id: order.id,
            status: data.status,
            note: data.note,
          },
        },
      })
      toast.success("Order status updated successfully")
    } catch (error) {
      console.error("Error updating order status:", error)
      toast.error("Failed to update order status")
    }
  }

  return (
    <Card>
      <div className="space-y-4">
        {/* Current Status */}
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${currentStatusInfo.bgColor}`}>
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-full ${currentStatusInfo.bgColor}`}>
                <currentStatusInfo.icon 
                  className={`w-6 h-6 ${currentStatusInfo.color}`} 
                />
              </div>
              <div>
                <div className={`font-medium ${currentStatusInfo.color}`}>
                  {currentStatus}
                </div>
                <div className="text-sm text-gray-600">
                  {currentStatusInfo.description}
                </div>
                <div className="text-sm text-gray-500">
                  Last updated: {formatDateTime(order.status_histories?.[0]?.created_at)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Status Updates */}
        {availableStatuses.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold flex gap-2 items-center"><HiArrowPathRoundedSquare /> Update Status</h3>
              <IconButton 
                icon={HiOutlineInformationCircle} 
                onClick={() => setShowStatusInfo(true)}
                title="View status flow information"
              />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {availableStatuses.map((status) => {
                  const statusInfo = STATUS_INFO[status as keyof typeof STATUS_INFO]
                  return (
                    <label
                      key={status}
                      className={`
                        flex items-center gap-4 p-2 rounded-lg border-2 cursor-pointer
                        transition-colors duration-200
                        ${errors.status ? 'border-error' : 'border-gray-200'}
                        hover:border-primary
                      `}
                    >
                      <input
                        type="radio"
                        value={status}
                        {...register("status")}
                        className="radio radio-primary"
                      />
                      <div className={`p-2 rounded-full ${statusInfo.bgColor}`}>
                        <statusInfo.icon 
                          className={`w-5 h-5 ${statusInfo.color}`} 
                        />
                      </div>
                      <div>
                        <div className="font-medium">{status}</div>
                        <div className="text-sm text-gray-600">
                          {statusInfo.description}
                        </div>
                      </div>
                    </label>
                  )
                })}
              </div>

              {showNote && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Add a note (optional)
                  </label>
                  <textarea
                    {...register("note")}
                    className="textarea textarea-bordered w-full"
                    placeholder="Enter additional details about this status update..."
                    rows={3}
                  />
                </div>
              )}

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="btn btn-sm btn-primary"
                  disabled={loading}
                >
                  Confirm
                  <HiArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-ghost"
                  onClick={() => setShowNote(!showNote)}
                >
                  {showNote ? "Close" : "Add Note"}
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="divider">Status History</div>

        {/* Status History */}
        <div className="space-y-4">
          <div className="space-y-2">
            {order.status_histories?.map((history, index) => {
              const statusInfo = STATUS_INFO[history.status as keyof typeof STATUS_INFO]
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-50"
                >
                  <div className={`p-2 rounded-full ${statusInfo.bgColor}`}>
                    <statusInfo.icon 
                      className={`w-4 h-4 ${statusInfo.color}`} 
                    />
                  </div>
                  <div>
                    <div className="font-medium">{history.status}</div>
                    <div className="text-sm text-gray-500">
                      {formatDateTime(history.created_at)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Status Flow Information Dialog */}
      <dialog className={`modal ${showStatusInfo ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Order Status Flow</h3>
          <div className="space-y-4">
            {Object.entries(STATUS_FLOW).map(([status, nextStatuses]) => {
              const statusInfo = STATUS_INFO[status as keyof typeof STATUS_INFO]
              return (
                <div key={status} className="space-y-2">
                  <div className={`flex items-center gap-2`}>
                    <div className={`flex items-center gap-2 p-2 rounded-full ${statusInfo.bgColor}`}>
                    <statusInfo.icon className={`w-5 h-5 ${statusInfo.color}`} />
                      </div>
               
                    <span className="font-medium">{status}</span>
                  </div>
                  <div className="pl-7">
                    {nextStatuses.length > 0 ? (
                      <div className="text-sm text-gray-600">
                        Can be updated to: {nextStatuses.join(', ')}
                      </div>
                    ) : (
                      <div className="text-sm text-gray-600">
                        Final status - no further updates possible
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="modal-action">
            <button className="btn" onClick={() => setShowStatusInfo(false)}>Close</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <Button onClick={() => setShowStatusInfo(false)}>close</Button>
        </form>
      </dialog>
    </Card>
  )
}
