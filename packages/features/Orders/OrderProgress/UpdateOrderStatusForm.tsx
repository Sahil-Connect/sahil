import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Select, Card } from 'ui';
import {
  Orders,
  Order_Status_Enum,
} from '@sahil/lib/graphql/__generated__/graphql';
import { allStatuses } from './constants';
import { useAppendOrderStatus } from '@sahil/lib/hooks/orders';
import { OrderInfoItem } from '../OrderDetails';
import { formatDateTime } from '@sahil/lib/dates';
import { HiOutlineHandRaised, HiCalendarDays } from 'react-icons/hi2';
import toast, { Toaster } from 'react-hot-toast';

const status = z.enum(allStatuses);

const statusSchema = z.object({
  status: status,
  // note: z.string().min(10, 'Note must be at least 10 characters.'),
});

type FormData = z.infer<typeof statusSchema>;

type Props = {
  order: Orders;
};

export const UpdateOrderStatusForm = ({ order }: Props) => {
  const { appendOrderStatus, loading } = useAppendOrderStatus();
  const isCanceled =
    order.status_histories?.[0]?.status === Order_Status_Enum.Canceled;

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
      label: 'Order Date',
      value: formatDateTime(order?.created_at),
    },
    {
      icon: <HiOutlineHandRaised />,
      label: 'Status',
      value: order?.status_histories?.[0]?.status ?? 'Pending',
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
      toast.success('Order status updated successfully');
    } catch (error) {
      console.error('Error appending order status:', error);
      toast.error("Order status couldn't be updated, try again later.");
    }
  };

  return (
    <>
      <Card>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <h3>Current Order Status</h3>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
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

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-2 max-w-xl'
          >
            <h3>Manage Order Status</h3>

            <div className='grid grid-cols-2 gap-2'>
              <Select
                name='status'
                label='New Status'
                register={register}
                errors={errors}
                options={status.options}
                defaultValue={order?.status_histories?.[0]?.status as string}
                disabled={isCanceled}
              />

              {!isCanceled && (
                <button
                  type='submit'
                  className={`w-fit btn btn-sm normal-case btn-primary ${
                    loading && 'animate-pulse cursor-not-allowed'
                  }`}
                  disabled={loading}
                >
                  Update
                </button>
              )}
            </div>
          </form>
        </div>

        {order?.status_histories?.[0]?.status ===
          Order_Status_Enum.Canceled && <p>Order Has Been Cancelled</p>}
      </Card>
      <Toaster position='bottom-center' reverseOrder={false} />
    </>
  );
};
