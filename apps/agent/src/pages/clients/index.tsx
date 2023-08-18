import { useGetClients } from "@/hooks/clients";
import { ListClients } from "@/componens/clients/ListClients";
import { InsertNewClient } from "@/componens/clients/InsertNewClient";

export default function Business() {
  const { error, data, loading } = useGetClients();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>
          <div>
          <h3>Register, Business</h3>
          <p>This form is designed to gather essential information about your business, ensuring a seamless integration into our platform.</p>
          </div>

          <InsertNewClient />
        </div>
        <div>{data && <ListClients clients={data} />}</div>
      </div>
    </main>
  );
}
