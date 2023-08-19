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
<<<<<<< HEAD
  console.log(client);
=======
>>>>>>> a0790fa (feat: list clients error and loading states)
  return (
    <div className="card w-96 bg-rose-900 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{client.name}</h2>
<<<<<<< HEAD
        <div>
          {
            client.addresses && client.addresses.map(address => (
              <div>
                <p>{address.city}</p>
              </div>
            ))
          }
        </div>
=======
>>>>>>> a0790fa (feat: list clients error and loading states)
      </div>
    </div>
  );
};
