import { AccountQuickViewCard } from "./AccountQuickViewCard";
import { IconButton } from "ui";
import { HiOutlinePlusCircle } from "react-icons/hi2";
const accounts = [
  {
    id: 1,
    name: "Hello, World",
  },
  {
    id: 2,
    name: "Hello, World",
  },
];
export const ListAccounts = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3 className="text-lg">Accounts</h3>
        <IconButton icon={HiOutlinePlusCircle} />
      </div>
      <div className="flex gap-2">
        {accounts.map((account) => (
          <AccountQuickViewCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
};
