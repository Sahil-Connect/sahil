import { FC } from "react";
// import { Button } from "ui";

export type SahilClient = {
  name: string;
  id: string;
};

type Props = {
  client: SahilClient;
};

export const ClientOverviewCard: FC<Props> = ({ client }) => {
  return (
    <div className="card w-96 bg-rose-900 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{client.name}</h2>
      </div>
    </div>
  );
};
