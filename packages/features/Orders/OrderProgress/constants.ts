export const allStatuses = [
  'PENDING',
  'CONFIRMED',
  'ENROUTE',
  'DELIVERED',
  'FULFILLED',
  'CANCELED',
] as const;

export const statusLabels = {
  PENDING: 'Order received, awaiting confirmation.',
  CONFIRMED: 'Order confirmed, preparing for shipment.',
  ENROUTE: 'Order in transit, awaiting delivery.',
  DELIVERED: 'Order delivered, awaiting confirmation.',
  FULFILLED: 'Order completed, thank you for shopping with us.',
  CANCELED: "Order canceled, we're sorry for any inconvenience.",
};
