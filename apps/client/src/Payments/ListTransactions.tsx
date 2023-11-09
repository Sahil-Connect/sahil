import { TransactionQuickViewCard } from "./TransactionQuickView";
import { IconButton } from "ui";
import { HiOutlinePlusCircle } from "react-icons/hi2";
const transactions = [
  {
    id: 1,
    name: "Hello, World",
  },
  {
    id: 2,
    name: "Hello, World",
  },
  {
    id: 3,
    name: "Hello, World",
  }
];
export const ListTransactions = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3 className="text-lg">Accounts</h3>
        <IconButton icon={HiOutlinePlusCircle} />
      </div>
      <div className="space-y-2 bg-red-300">
        {transactions.map((transaction) => (
          <TransactionQuickViewCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
