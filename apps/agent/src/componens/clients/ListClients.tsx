import { ClientOverviewCard } from "./ClientOverviewCard";
import { useGetClients } from "@/hooks/clients";

export type SahilClient = {
  name: string;
  id: string;
};


export const ListClients = () => {
  const { data: clients, error, loading } = useGetClients();

  if (error) {
    return (
      <div>
        <p>Error loading clients</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <p>Loading clients...</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {clients && clients.map((client: SahilClient) => (
        <ClientOverviewCard key={client.id} client={client} />
      ))}
    </div>
  );
};
