export const OrderStatusSteps = ({ orderId }) => {
    return (
        <div className="space-y-2">
          <ul className="steps steps-vertical">
            <li className="step step-primary">Order Confirmation</li>
            <li className="step">Courier Pickup</li>
            <li className="step">Enroute</li>
            <li className="step">Delivered</li>
          </ul>
      </div>
    )
}