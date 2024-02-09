import { FC } from "react";
type Props = {
  orderId: string;
};

export const OrderStatusSteps: FC<Props> = ({ orderId }) => {
  return (
    <div className="space-y-2 w-full">
      <ul className="steps steps-vertical w-full">
        <li className="step step-primary">Order Confirmation</li>
        <li className="step">Courier Pickup</li>
        <li className="step">Enroute</li>
        <li className="step">Delivered</li>
      </ul>
    </div>
  );
};
