import { Card, Timeline } from 'ui';
import { Orders } from '@sahil/lib/graphql/__generated__/graphql';
import { formatDateTime } from '@sahil/lib/dates';

const allStatuses = [
  'PENDING',
  'CONFIRMED',
  'ENROUTE',
  'DELIVERED',
  'FULFILLED',
] as const;

const statusLabels = {
  PENDING: 'Order received, awaiting confirmation.',
  CONFIRMED: 'Order confirmed, preparing for shipment.',
  ENROUTE: 'Order in transit, awaiting delivery.',
  DELIVERED: 'Order delivered, awaiting confirmation.',
  FULFILLED: 'Order completed, thank you for shopping with us.',
  CANCELED: "Order canceled, we're sorry for any inconvenience.",
};

type Props = {
  order: Orders;
};

export const OrderProgress = ({ order: { status_histories } }: Props) => {
  const latestStatus = status_histories[0]?.status || 'PENDING';
  const statusIndex = allStatuses.indexOf(latestStatus as any);

  const timeline = allStatuses.map((status, index) => {
    const statusHistory = status_histories.find((sh) => sh.status === status);
    return {
      prefix: statusHistory
        ? formatDateTime(statusHistory.created_at, 'HH:mm')
        : '',
      label: status,
      description: statusLabels[status],
      status:
        index <= statusIndex ? ('completed' as const) : ('pending' as const),
    };
  });

  return (
    <Card title='Order Progress' height='h-fit' titleSize='sm'>
      <Timeline items={timeline} />
    </Card>
  );
};
