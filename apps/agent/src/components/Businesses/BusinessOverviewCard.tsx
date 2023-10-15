import { FC } from "react";

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
        <p>Business Description</p>
        <div>
          {
            business.addresses && business.addresses.map((address, index) => (
              <div key={index}>
                <p>{address.city}</p>
              </div>
            ))
          }
        </div>
        <p>{business.created_at}</p>
      </div>
    </div>
  );
};
