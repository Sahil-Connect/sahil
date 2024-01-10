import { Card, Icon } from "ui";
import { HiOutlineBanknotes } from "react-icons/hi2";

type props = {
  transaction: {
    id: number;
    name: string;
  }
}

export const TransactionQuickViewCard = ({ transaction }: props) => {
  return (
    <Card>
      <div className="flex gap-2 items-center justify-between">
        <h3 className="card-title text-xm">{transaction.name}</h3>
        
      </div>
    </Card>
  );
};
