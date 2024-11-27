import { FC } from "react";
import { Avatar } from "ui";
import { Couriers } from "@sahil/lib/graphql/__generated__/graphql";

type Props = {
  courier: Couriers;
};

export const CourierProfileOverview: FC<Props> = ({ courier }) => {
  console.log(courier)
  return (
    <div>
      {courier?.avatar && <Avatar src={courier?.avatar} alt={courier.name} />}
      <h3>{courier.name}</h3>
    </div>
  );
};