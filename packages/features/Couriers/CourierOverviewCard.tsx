import { FC } from "react";
import { Couriers } from "@sahil/lib/graphql/__generated__/graphql";

import { Avatar, Card } from "ui";
import Link from "next/link";
import { EntityCard } from "../Shared/EntityCard";

export type CourierRideType = "Car" | "Bike";
export type CourierRideStatus = "Active" | "Inactive" | "Maintenance";

export type CourierRide = {
  type: CourierRide;
  status: CourierRideStatus;
  numberPlate: string;
  model: string;
  name: string;
  year: string;
};

type Props = {
  courier: Couriers;
};

export const CourierOverviewCard: FC<Props> = ({ courier }) => {
  return (
    <EntityCard
      id={courier.id}
      name={courier.name}
      phoneNumber={courier.phoneNumber}
      route="couriers"
      extraInfo={[
        {
          label: "Gender",
          value: courier.gender || "N/A"
        },
        {
          label: "Email",
          value: courier.email || "N/A"
        }
      ]}
    />
  );
};
