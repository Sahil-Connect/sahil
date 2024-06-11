import { FC } from "react";
import { formatDateTime } from "@sahil/lib/dates";
import { generateInitials } from "@sahil/lib/strings";
import Link from "next/link";
import { Card } from "ui";
import {
  HiOutlineEllipsisHorizontal,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

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
    <Card className="w-full">
      <div className="flex justify-between">
        <Link
          href={`/businesses/${business.id}`}
          className="avatar placeholder h-fit"
        >
          <div className="bg-neutral text-base text-neutral-content rounded-full w-12">
            <span>{generateInitials(business.name)}</span>
          </div>
        </Link>
        <button title="More">
          <HiOutlineEllipsisHorizontal />
        </button>
      </div>
      <div className="space-y-2">
        <Link
          href={`/businesses/${business.id}`}
          className="card-title text-base md:text-lg"
        >
          {business.name}
        </Link>
      </div>
      <div className="mt-2 flex flex-col bg-gray-50 p-4 gap-4 shadow-sm rounded-lg">
        <div className="flex justify-between items-center">
          <div className="space-y-1 font-semibold">
            <span className="text-gray-500 text-sm font-normal">
              Business Type
            </span>
            <p className="capitalize">{business.type}</p>
          </div>
          <div className="space-y-1 font-semibold">
            <span className="text-gray-500 text-sm font-normal">
              Contact Name
            </span>
            <p className="capitalize">{business.contactName}</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        {business.addresses &&
          business.addresses.map((address, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="shadow rounded-md p-2 text-primary">
                <HiOutlineMapPin />
              </span>
              <p className="truncate ...">{address.street_address}</p>
            </div>
          ))}
      </div>
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <span className="shadow rounded-md p-2 text-primary">
            <HiOutlinePhone />
          </span>
          <p>{business.phoneNumber}</p>
        </div>
      </div>
    </Card>
  );
};
