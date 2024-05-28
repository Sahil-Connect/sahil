import { Card } from "ui";

export const OrderPaymentInformation = () => {
  return (
    <Card title="Payment Information" height="h-fit" titleSize="sm">
            <div className="space-y-4">
      <div className="flex items-center">
        <div className="basis-1/2 space-y-2">
          <p className="text-sm">Payment Method</p>
          <p className="text-sm">Card Number</p>
          <p className="text-sm">Expiration Date</p>
        </div>
        <div className="basis-1/2 space-y-2">
          <p className="text-sm">1234 5678 9012 3456</p>
          <p className="text-sm">01/20/2022</p>
          <p className="text-sm">01/20/2022</p>
        </div>
      </div>
    </div>
    </Card>
  );
};
