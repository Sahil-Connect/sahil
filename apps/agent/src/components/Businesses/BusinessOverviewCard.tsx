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
    <div className="card card-compact shadow">
      <div className="card-body">
        <h2 className="card-title">{client.name}</h2>
        <div>
          {
            client.addresses && client.addresses.map(address => (
              <div>
                <p>{address.city}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
