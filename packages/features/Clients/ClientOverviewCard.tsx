import { FC } from "react";
import Link from "next/link";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiEllipsisHorizontal,
} from "react-icons/hi2";
import { generateInitials } from "@sahil/lib/strings";
import { Card } from "ui";

type ClientProps = {
  client: {
    id: string;
    name: string;
    contactName?: string;
    phoneNumber?: string;
    streetAddress?: string;
    categories?: Array<{ category_name: string }>;
    zone?: string;
    type?: string;
    addresses?: Array<{ street_address: string }>;
  };
};

export const ClientOverviewCard: FC<ClientProps> = ({ client }) => {
  const isSupplier = Boolean(client.categories);
  const baseUrl = "clients";
  const address = isSupplier 
    ? client.streetAddress 
    : client.addresses?.[0]?.street_address;

  return (
    <Card className="w-full">
      <div className="flex justify-between">
        <Link
          href={{
            pathname: `/${baseUrl}/${client.id}`,
            query: { type: isSupplier ? 'supplier' : 'business' }
          }}
          className="avatar placeholder h-fit"
        >
          <div className="bg-neutral text-base text-neutral-content rounded-full w-12">
            <span>{generateInitials(client.name)}</span>
          </div>
        </Link>
        <button title="More">
          <HiEllipsisHorizontal className="text-2xl" />
        </button>
      </div>

      <div className="space-y-2">
        <Link
          href={{
            pathname: `/${baseUrl}/${client.id}`,
            query: { type: isSupplier ? 'supplier' : 'business' }
          }}
          className="card-title text-base md:text-lg"
        >
          {client.name}
        </Link>
        {isSupplier && client.categories && (
          <div className="flex flex-wrap gap-2">
            {client.categories.map(({ category_name }) => (
              <span
                key={category_name}
                className="badge badge-sm badge-outline opacity-80"
              >
                {category_name}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-2 bg-base-100 p-4 rounded-xl flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1 font-semibold">
            <span className="opacity-70 text-sm font-normal">
              {isSupplier ? "Service Zone" : "Business Type"}
            </span>
            <p className="capitalize">{isSupplier ? client.zone : client.type}</p>
          </div>
          <div className="space-y-1 font-semibold">
            <span className="opacity-70 text-sm font-normal">Contact Name</span>
            <p className="capitalize">{client.contactName}</p>
          </div>
        </div>

        <div className="space-y-2">
          {address && (
            <div className="flex items-center gap-2">
              <span className="shadow rounded-md p-2 text-primary">
                <HiOutlineMapPin />
              </span>
              <p className="truncate">{address}</p>
            </div>
          )}
          {client.phoneNumber && (
            <div className="flex items-center gap-2">
              <span className="shadow rounded-md p-2 text-primary">
                <HiOutlinePhone />
              </span>
              <p>{client.phoneNumber}</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};