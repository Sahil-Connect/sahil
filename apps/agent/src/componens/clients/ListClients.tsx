import { ClientOverviewCard } from "./ClientOverviewCard";
export const ListClients = ({ clients }) => {
  return (
    <div>
      {clients.map((client) => (
        <ClientOverviewCard key={client.id} client={client} />
      ))}
    </div>
  );
};
