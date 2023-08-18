import { ClientOverviewCard } from "./ClientOverviewCard";
export const ListClients = ({ clients }) => {
  return (
    <div className="space-y-2">
      {clients.map((client) => (
        <ClientOverviewCard key={client.id} client={client} />
      ))}
    </div>
  );
};
