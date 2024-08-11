import { ClientOverviewCard } from "./ClientOverviewCard";
import { List, ListHeader, ListErrorState, ListPagination } from "ui";
import { useRouter } from "next/router";

const clients = [
  {
    id: "1",
    name: "Client 1",
    email: "client1@example.com",
    phone: "(123) 456-7890",
    address: {
      city: "New York",
      state: "NY",
    },
  },
  {
    id: "2",
    name: "Client 2",
    email: "client2@example.com",
    phone: "(123) 456-7890",
    address: {
      city: "Los Angeles",
      state: "CA",
    },
  },
];

export const ListClients = () => {
  const router = useRouter();
  return (
    <section className="space-y-4">
      <ListHeader size={clients.length} sizeLabel="Clients" title="Clients">
      <h1 className="text-xl">Clients</h1>
      </ListHeader>
      <List
        data={clients}
        loading={false}
        cols={4}
        renderItem={(client) => (
          // @ts-ignore
          <ClientOverviewCard key={client.id} client={client} />
        )}
      />
    </section>
  );
};