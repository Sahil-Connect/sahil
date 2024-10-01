import { FC } from "react";
import { Business } from "@sahil/lib/graphql/__generated__/graphql";

import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlineUser,
  HiCalendarDays,
} from "react-icons/hi2";
import { Card, Schedule } from "ui";

type Props = {
  business: Business;
};

export const BusinessProfileOverview: FC<Props> = ({ business }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <Card height="h-fit">
      <div className="flex items-center gap-2">
        {business?.name && (
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-12 md:w-14">
              <span>{generateInitials(business?.name)}</span>
            </div>
          </div>
        )}
        <h2 className="card-title">{business?.name}</h2>
      </div>
      <p className="my-3">{business?.description}</p>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-base border rounded-md p-2">
            <HiOutlineUser />
          </span>
          <p>{business?.contactName}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base border rounded-md p-2">
            <HiOutlineMapPin />
          </span>
          {business?.addresses.map(({ street_address: name }) => {
            return <span key={name}>{name}</span>;
          })}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base border rounded-md p-2">
            <HiOutlineEnvelope />
          </span>
          <p>{business?.contactEmail}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base border rounded-md p-2">
            <HiOutlinePhone />
          </span>
          <p>{business?.phoneNumber}</p>
        </div>
      </div>

      {business?.schedule && <Schedule schedule={business.schedule} />}
    </Card>
  );
};

const generateInitials = (name: string) => {
  return name
    ?.split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};
