import { FC } from "react";
import { formatDateTime } from "@sahil/lib/dates";
import { generateInitials } from "@sahil/lib/strings";
import Link from "next/link";
import { Card } from "ui";
import {
  HiEllipsisHorizontal,
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
        <div className="flex items-center gap-2">
          <Link
            href={`/businesses/${business.id}`}
            className="avatar placeholder h-fit"
          >
            <div className="bg-neutral text-base text-neutral-content rounded-full w-11">
              <span>{generateInitials(business.name)}</span>
            </div>
          </Link>
          <Link
            href={`/businesses/${business.id}`}
            className="card-title text-base max-w-[35ch] leading-tight"
          >
            {business.name}
          </Link>
        </div>
        <button title="More">
          <HiEllipsisHorizontal />
        </button>
      </div>
      <div className="my-4 flex flex-col bg-base-100 border p-4 gap-4 rounded-lg">
        <div className="w-full flex justify-between items-center">
          <div className="font-semibold">
            <p className="text-gray-500 text-xs font-normal">Business Type</p>
            <p className="capitalize">{business.type}</p>
          </div>
          <div className="font-semibold">
            <p className="text-gray-500 text-xs font-normal text-right">
              Contact Name
            </p>
            <p className="capitalize text-right">{business.contactName}</p>
          </div>
        </div>
      </div>

      <div className="mt-3">
        {business.addresses &&
          business.addresses.map((address, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-gray-500 text-base border rounded-md p-2">
                <HiOutlineMapPin />
              </span>
              <p className="truncate ...">{address.street_address}</p>
            </div>
          ))}
      </div>
      <div className="my-3">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-base border rounded-md p-2">
            <HiOutlinePhone />
          </span>
          <p>{business.phoneNumber}</p>
        </div>
      </div>
    </Card>
  );
};
