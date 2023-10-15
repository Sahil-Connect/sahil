import { FC } from "react";
// import { Button } from "ui";

export type SahilSupplier = {
  name: string;
  id: string;
};

type Props = {
  supplier: SahilSupplier;
};

export const SupplierOverviewCard: FC<Props> = ({ supplier }) => {
  return (
    <div className="card card-compact shadow">
      <div className="card-body">
        <h2 className="card-title">{supplier.name}</h2>
      </div>
    </div>
  );
};
