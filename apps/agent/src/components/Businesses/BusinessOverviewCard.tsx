import { FC } from "react";
import { formatDateTime } from "@sahil/lib/dates";
import Link from "next/link";

export type SahilBusiness = {
  name: string;
  id: string;
};

type Props = {
  business: SahilBusiness;
};

export const BusinessOverviewCard: FC<Props> = ({ business }) => {
  const formattedDate = formatDateTime(business.created_at);
  return (
    <div className="card card-compact shadow">
      <div className="card-body">
      <Link href={`/businesses/${business.id}`}>
        <h2 className="card-title">{business.name}</h2>

        </Link>
        <p>Business Description</p>
        <div>
          {business.addresses &&
            business.addresses.map((address, index) => (
              <div key={index}>
                <p>{address.city}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
