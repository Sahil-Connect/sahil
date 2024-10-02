import { FC } from 'react';
import {
  Order_Status_Enum,
  Orders,
} from '@sahil/lib/graphql/__generated__/graphql';
import { useAppendOrderStatus } from '@sahil/lib/hooks/orders';
import toast, { Toaster } from 'react-hot-toast';
import {
  HiOutlinePrinter,
  HiOutlineXCircle,
  HiOutlineArrowPathRoundedSquare,
} from 'react-icons/hi2';

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
      toast.success('Order has been cancelled');
    } catch (error) {
      console.error('Error canceling order status:', error);
      toast.error("Order couldn't be cancelled, try again later.");
    }
  };

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-2'>
        <h1 className='text-lg'>
          Order ID: #{order.id.slice(0, 8).toLocaleUpperCase()}
        </h1>
        <div className='flex gap-2 items-center'>
          <button className='btn btn-sm'>
            <HiOutlinePrinter /> Print
          </button>
          <button className='btn btn-sm btn-primary'>
            <HiOutlineArrowPathRoundedSquare /> Order Again
          </button>
          <button
            onClick={onCancel}
            disabled={isCanceled || loading}
            className={`btn btn-sm btn-error text-white ${
              loading && 'animate-pulse cursor-not-allowed'
            }`}
          >
            <HiOutlineXCircle /> Cancel
          </button>
        </div>
      </div>
      <Toaster position='bottom-center' reverseOrder={false} />
    </>
  );
};
