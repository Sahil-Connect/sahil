import { useGetClients } from "@/hooks/clients";
import { ListClients } from "@/componens/clients/ListClients";

export default function Business() {
  const { error, data, loading } = useGetClients();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h3>Hello, Business</h3>
        {data && <ListClients clients={data} />}
      </div>
    </main>
  );
}
