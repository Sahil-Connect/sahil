import { FC } from "react";
import { Couriers } from "@sahil/lib/graphql/__generated__/graphql";

import { Avatar, Card } from "ui";
import Link from "next/link";

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
    <Card className="w-full">
      {courier?.avatar && <Avatar src={courier?.avatar} alt={courier.name} />}
      <Link href={`/couriers/${courier.id}`}>
        <h3 className="card-title text-lg font-semibold">{courier.name}</h3>
      </Link>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div>
            <p>{courier.gender}</p>
          </div>
          <div>
            <p>{courier.gender}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
