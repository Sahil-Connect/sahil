import { FC } from "react";
const clients = [
  {
    id: 1,
    name: "Radisson Blu",
  },
  {
    id: 2,
    name: "Amigos Bar & Grill",
  },
];

type ClientProps = {
  client: any;
};

const ClientOverviewCard: FC<ClientProps> = ({ client }) => {
  return (
    <div className="card card-compact shadow">
      <div className="card-body">
        <h3 className="card-title">{client.name}</h3>
      </div>
    </div>
  );
};

export const Clients = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl">Clients</h3>
        <div className="flex gap-2">
          <button className="btn btn-sm">Prev</button>
          <button className="btn btn-sm btn-secondary">Next</button>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        {clients.map((client) => (
          <ClientOverviewCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
};
