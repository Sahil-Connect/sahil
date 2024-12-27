import { FC } from "react";
import { EntityCard } from "@sahil/features/Shared/EntityCard";

export type SahilBusiness = {
  name: string;
  id: string;
  contactName: string;
  type: string;
  phoneNumber: string;
  addresses: Array<{
    street_address: string;
  }>;
};

type Props = {
  business: SahilBusiness;
};

export const BusinessOverviewCard: FC<Props> = ({ business }) => {
  return (
    <EntityCard
      id={business.id}
      name={business.name}
      type={business.type}
      contactName={business.contactName}
      phoneNumber={business.phoneNumber}
      address={business.addresses?.[0]?.street_address}
      route="businesses"
      extraInfo={[
        {
          label: "Business Type",
          value: business.type || "N/A"
        },
        {
          label: "Contact Name",
          value: business.contactName || "N/A"
        }
      ]}
    />
  );
};
