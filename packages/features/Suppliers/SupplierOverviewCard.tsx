import { FC } from "react";
import Link from "next/link";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiEllipsisHorizontal,
} from "react-icons/hi2";
import { formatCategoryName, generateInitials } from "@sahil/lib/strings";
import { Card } from "ui";
import { Suppliers } from "@sahil/lib/graphql/__generated__/graphql";

type Supplier = Suppliers & {};

type Props = {
  supplier: Supplier;
};

export const SupplierOverviewCard: FC<Props> = ({ supplier }) => {
  return (
    <Card className="w-full">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Link
            href={`/suppliers/${supplier.id}`}
            className="avatar placeholder h-fit"
          >
            {supplier.name && (
              <div className="bg-neutral text-base text-neutral-content rounded-full w-11">
                <span>{generateInitials(supplier?.name)}</span>
              </div>
            )}
          </Link>
          <Link
            href={`/suppliers/${supplier.id}`}
            className="card-title max-w-[35ch] leading-tight text-base"
          >
            {supplier.name}
          </Link>
        </div>
        <button title="More">
          <HiEllipsisHorizontal />
        </button>
      </div>
      <div className="mt-4 flex flex-col h-full">
        <div className="mt-1 overflow-hidden text-ellipsis">
          <span className="font-medium">Category:</span> {""}
          {supplier.categories.map(({ category_name: name }, index) => (
            <span key={name} className="text-xs text-zinc-500">
              {formatCategoryName(name)}
              {index < supplier.categories.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </div>
      <div className="my-4 flex flex-col bg-base-100 border p-4 gap-4 rounded-lg">
        <div className="w-full flex justify-between items-center">
          <div className="font-semibold">
            <p className="text-gray-500 text-xs font-normal">Service Zone</p>
            <p className="capitalize">{supplier.zone}</p>
          </div>
          <div className="font-semibold">
            <p className="text-gray-500 text-xs font-normal text-right">
              Contact Name
            </p>
            <p className="capitalize text-right">{supplier.contactName}</p>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-base border rounded-md p-2">
              <HiOutlineMapPin />
            </span>
            <p className="truncate ...">{supplier.streetAddress}</p>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-base border rounded-md p-2">
                <HiOutlinePhone />
              </span>
              <p>{supplier.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
