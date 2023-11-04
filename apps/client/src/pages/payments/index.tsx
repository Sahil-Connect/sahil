import Image from "next/image";
import { Inter } from "next/font/google";
import { ListAccounts, ListTransactions } from "@/Payments";

const inter = Inter({ subsets: ["latin"] });

export default function Payments() {
  return (
    <main className={`min-h-screen p-4 space-y-4`}>
      <h1 className="text-2xl">Payments</h1>
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
    </main>
  );
}
