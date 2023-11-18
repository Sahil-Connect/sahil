import { MinHeight } from "ui"
import { ListAccounts, ListTransactions } from "@/Payments";
import { useGetAccountBalance } from "@/hooks/accounts";

export default function Payments() {
  const { data } = useGetAccountBalance();
  console.log(data);
  return (
    <MinHeight>
      <h1 className="font-medium leading-none text-lg md:text-2xl">Payments</h1>
      <div className="divider"></div>
      <ListAccounts />
      <div className="flex gap-2">
        <div className="basis-2/5 grow">
          <ListTransactions />
        </div>
        <div className="basis-2/5 grow">
          <ListTransactions />
        </div>
      </div>
    </MinHeight>
  );
}
