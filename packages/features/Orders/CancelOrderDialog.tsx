import React, { useRef } from "react";
import Modal from "ui/components/Modal";
import { Order_Status_Enum } from "@sahil/lib/graphql/__generated__/graphql";
import { useAppendOrderStatus } from "@sahil/lib/hooks/orders";
import toast from "react-hot-toast";

type CancelOrderDialogProps = {
  orderId: string;
};

export const CancelOrderDialog: React.FC<CancelOrderDialogProps> = ({ orderId }) => {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const { appendOrderStatus, loading } = useAppendOrderStatus();

  const onCancel = async () => {
    if (loading) return;

    try {
      await appendOrderStatus({
        variables: {
          object: {
            order_id: orderId,
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
    <Modal
      title="Confirm Order Cancellation"
      CloseBtnRef={closeBtn}
      CTA="Cancel Order"
      id="cancel-order-modal"
      btnSize="sm"
      btnStyle="error"
      className="btn-outline"
    >
      <p>Are you sure you want to cancel this order?</p>
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={() => {}}
          className="btn btn-sm"
        >
          No, Keep Order
        </button>
        <button
          onClick={onCancel}
          className="btn btn-sm btn-error"
        >
          Yes, Cancel Order
        </button>
      </div>
    </Modal>
  );
};


