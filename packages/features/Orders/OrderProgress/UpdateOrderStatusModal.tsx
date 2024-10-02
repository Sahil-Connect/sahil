import { z } from "zod";
import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Modal from "ui/components/Modal";
import { Input, Select, Card } from "ui";
import {
  Orders,
  Order_Status_Enum,
} from "@sahil/lib/graphql/__generated__/graphql";
import { allStatuses } from "./constants";
import { useAppendOrderStatus } from "@sahil/lib/hooks/orders";
import { createTimeline } from "./OrderProgress";
import { OrderInfoItem } from "../OrderDetails";
import { formatDateTime } from "@sahil/lib/dates";
import {
  HiOutlineHandRaised,
  HiCalendarDays,
  HiOutlineBanknotes,
  HiOutlineMapPin,
  HiOutlineFlag,
} from "react-icons/hi2";
import toast, { Toaster } from "react-hot-toast";

const status = z.enum(allStatuses);

const statusSchema = z.object({
  status: status,
  // note: z.string().min(10, 'Note must be at least 10 characters.'),
});

type FormData = z.infer<typeof statusSchema>;

type Props = {
  order: Orders;
};

export const UpdateOrderStatusModal = ({ order }: Props) => {
  const id = `update-${order.id}-status`;
  const closeBtn = useRef<HTMLButtonElement>(null);
  const { appendOrderStatus, loading } = useAppendOrderStatus();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(statusSchema),
  });

  const orderInfoItems = [
    {
      icon: <HiCalendarDays />,
      label: "Order Date",
      value: formatDateTime(order?.created_at),
    },
    {
      icon: <HiOutlineHandRaised />,
      label: "Status",
      value: order?.status_histories?.[0]?.status ?? "Pending",
    },
  ];

  const onSubmit = async (data: FormData) => {
    if (loading) return;
    const validatedInput = statusSchema.parse(data);

    try {
      await appendOrderStatus({
        variables: {
          object: {
            order_id: order.id,
            status: validatedInput.status,
          },
        },
      });
      toast.success("Order status updated successfully");
      closeBtn.current?.click();
    } catch (error) {
      console.error("Error appending order status:", error);
      toast.error("This didn't work.");
    }
  };

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
      toast.error("Order has been cancelled");
      closeBtn.current?.click();
    } catch (error) {
      console.error("Error canceling order status:", error);
      toast.error("This didn't work.");
    }
  };

  return (
    <>
      <Card>
        <div className="space-y-2">
          <h3>Current Order Status</h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {orderInfoItems.map((item, index) => (
              <OrderInfoItem
                key={index}
                icon={item.icon}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>

        <h3>Manage Order Status</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex gap-4 items-center"
        >
          <div className="my-4 space-y-2 w-96">
            <Select
              name="status"
              label="New Status"
              register={register}
              errors={errors}
              options={status.options}
              defaultValue={order?.status_histories?.[0]?.status as string}
              disabled={
                order?.status_histories?.[0]?.status ===
                Order_Status_Enum.Canceled
              }
            />
            {/* <Input name='note' label='Note' register={register} errors={errors} /> */}
          </div>
          {order?.status_histories?.[0]?.status !== Order_Status_Enum.Canceled && (
            <div className="my-4 flex gap-2">
              <button
                type="button"
                className={`btn btn-sm btn-ghost normal-case ${
                  loading && "animate-pulse cursor-not-allowed"
                }`}
                onClick={onCancel}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`btn btn-sm normal-case btn-primary ${
                  loading && "animate-pulse cursor-not-allowed"
                }`}
                disabled={loading}
              >
                Update
              </button>
            </div>
          )}
        </form>
        {order?.status_histories?.[0]?.status ===
              Order_Status_Enum.Canceled && <p>Order Has Been Cancelled</p>}
      </Card>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};
