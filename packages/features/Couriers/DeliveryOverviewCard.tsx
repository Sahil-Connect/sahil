import { FC } from "react";
import { Card } from "ui";
import { Couriers } from "@sahil/lib/graphql/__generated__/graphql";

type Props = {
  delivery: any;
};

export const DeliveryOverviewCard: FC<Props> = ({ delivery }) => {
  return (
    <div className="basis-1/4">
      <Card title="ED-15" titleSize="sm">
        <p>Hello</p>
      </Card>
    </div>
  );
};
