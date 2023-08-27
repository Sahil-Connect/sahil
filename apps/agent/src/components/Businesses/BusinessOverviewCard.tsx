import { FC } from "react";
// import { Button } from "ui";

export type SahilBusiness = {
  name: string;
  id: string;
};

type Props = {
  business: SahilBusiness;
};

export const BusinessOverviewCard: FC<Props> = ({ business }) => {

  return (
    <div className="card card-compact shadow">
      <div className="card-body">
        <h2 className="card-title">{business.name}</h2>
        <div>
          {
            business.addresses && business.addresses.map(address => (
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
