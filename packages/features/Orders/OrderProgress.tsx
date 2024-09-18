import { Card, Timeline } from 'ui';
import { Orders } from '@sahil/lib/graphql/__generated__/graphql';
import { formatDateTime } from '@sahil/lib/dates';

type Props = {
  order: Orders;
};

export const OrderProgress = ({ order: { status_histories } }: Props) => {
  const timeline = createTimeline(status_histories);

  return (
    <Card title='Order Progress' height='h-fit' titleSize='sm'>
      <Timeline items={timeline} />
    </Card>
  );
};

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

type Timeline = {
  prefix: string;
  label: (typeof allStatuses)[number] | 'CANCELED';
  description: string;
  status: 'completed' | 'pending' | 'cancelled';
};

const createTimeline = (statusHistories: Orders['status_histories']) => {
  const latestStatus = statusHistories[0]?.status || 'PENDING';
  const isCanceled = latestStatus === 'CANCELED';
  const statusIndex = isCanceled
    ? allStatuses.findIndex((status) => status === statusHistories[1]?.status)
    : allStatuses.indexOf(latestStatus);

  const timeline: Timeline[] = allStatuses.map((status, index) => {
    const statusHistory = statusHistories.find((sh) => sh.status === status);
    return {
      prefix: statusHistory ? formatDateTime(statusHistory.created_at) : '',
      label: status,
      description: statusLabels[status],
      status: index <= statusIndex ? 'completed' : 'pending',
    };
  });

  if (isCanceled) {
    const canceledStatus = statusHistories[0];
    timeline.splice(statusIndex + 1, 0, {
      prefix: formatDateTime(canceledStatus.created_at),
      label: 'CANCELED',
      description: statusLabels.CANCELED,
      status: 'cancelled',
    });
  }

  return timeline;
};
