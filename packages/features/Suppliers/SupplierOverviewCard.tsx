import { FC } from "react";

import { EntityCard } from "@sahil/features/Shared/EntityCard";
import { Suppliers } from "@sahil/lib/graphql/__generated__/graphql";


type Supplier = Suppliers & {};

type Props = {
  supplier: Supplier;
};

export const SupplierOverviewCard: FC<Props> = ({ supplier }) => {
  return (
    <EntityCard
      id={supplier.id}
      name={supplier.name}
      contactName={supplier.contactName}
      phoneNumber={supplier.phoneNumber}
      address={supplier.streetAddress}
      categories={supplier.categories}
      route="suppliers"
      extraInfo={[
        {
          label: "Service Zone",
          value: supplier.zone || "N/A"
        },
        {
          label: "Contact Name",
          value: supplier.contactName || "N/A"
        }
      ]}
    />
  );
};
