import { FC } from "react";
import { Business } from "@sahil/lib/graphql/__generated__/graphql";

import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlineUser,
} from "react-icons/hi2";
import { Card } from "ui";

type Props = {
  business: Partial<Business>;
};

export const BusinessProfileOverview: FC<Props> = ({ business }) => {
  return (
    <Card height="h-fit">
      <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
          <span>{generateInitials(business?.name as string)}</span>
        </div>
      </div>
      <h3 className="card-title">{business?.name}</h3>
      <p>{business?.description}</p>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="shadow rounded-md p-2">
            <HiOutlineUser />
          </span>
          <p>{business?.contactName}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="shadow rounded-md p-2">
            <HiOutlineMapPin />
          </span>

        </div>
        <div className="flex items-center gap-2">
          <span className="shadow rounded-md p-2">
            <HiOutlineEnvelope />
          </span>
          <p>{business?.contactEmail}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="shadow rounded-md p-2">
            <HiOutlinePhone />
          </span>
          <p>{business?.phoneNumber}</p>
        </div>
      </div>
    </Card>
  );
};

const generateInitials = (name: string) => {
  return name
    ?.split(" ")
    .slice(0, 3)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};
