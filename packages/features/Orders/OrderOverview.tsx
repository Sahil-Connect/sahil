import { FC, useState, useRef } from "react";
import {
  Order_Status_Enum,
  Orders,
} from "@sahil/lib/graphql/__generated__/graphql";
import { useAppendOrderStatus } from "@sahil/lib/hooks/orders";
import toast, { Toaster } from "react-hot-toast";
import {
  HiOutlinePrinter,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { Card } from "ui";
import { CancelOrderDialog } from "./CancelOrderDialog";

type Props = {
  order: Orders;
};

export const OrderOverview: FC<Props> = ({ order }) => {
  const { appendOrderStatus, loading } = useAppendOrderStatus(); 
  const isCanceled =
    order.status_histories?.[0]?.status === Order_Status_Enum.Canceled;

  const onCancel = async () => {
    if (loading) return;
    try {
      await appendOrderStatus({
        variables: {
          object: {
            order_id: order.id,
            status: Order_Status_Enum.Canceled,
          },
        },
      });
      toast.success("Order has been cancelled");
    } catch (error) {
      console.error("Error canceling order status:", error);
      toast.error("Order couldn't be cancelled, try again later.");
    }
  };

  return (
    <>
    <Card title={`Order ID #${order.id.slice(0, 8).toLocaleUpperCase()}` } height="h-fit">
    <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex gap-2 items-center">
        <button className="btn btn-sm">
            <HiOutlineExclamationCircle /> Report Problem
          </button>
          <CancelOrderDialog orderId={order.id} onCancel={onCancel} />
        </div>
        <div className="flex gap-2 items-center">
          <button className="btn btn-sm">
            <HiOutlinePrinter /> Print
          </button>
          <button className="btn btn-sm btn-primary">
            <HiOutlineArrowPathRoundedSquare /> Order Again
          </button>
        </div>
      </div>
    </Card>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};
