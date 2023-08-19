import { useGetClients, useRegisterClient } from "@/hooks/clients";
import { ListClients } from "@/componens/clients/ListClients";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Business() {
  const { data: session, status } = useSession();
  console.log(session);
  const { error, data, loading } = useGetClients();
  const { insertClient } = useRegisterClient();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>
        <h3>Hello, Business</h3>
        <button onClick={(e) => signOut()}>Insert</button>
        </div>
        <div>
        {data && <ListClients clients={data} />}
        </div>
      </div>
    </main>
  );
}
