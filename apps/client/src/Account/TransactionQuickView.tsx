import { Card, Icon } from "ui";
import { HiOutlineBanknotes } from "react-icons/hi2";
export const TransactionQuickViewCard = ({ transaction }) => {
  return (
    <Card>
      <div className="flex gap-2 items-center justify-between">
        <h3 className="card-title text-xm">{transaction.name}</h3>
      </div>
    </Card>
  );
};
