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
    <Card>
      <div className="flex justify-between text-4xl">
        <Link
          href={`/suppliers/${supplier.id}`}
          className="avatar placeholder h-fit"
        >
          {supplier.name && (
            <div className="bg-neutral text-base text-neutral-content rounded-full w-12">
              <span>{generateInitials(supplier?.name)}</span>
            </div>
          )}
        </Link>
        <button title="More Horizontal">
          <HiEllipsisHorizontal />
        </button>
      </div>
      <div className="space-y-2 grow">
        <Link href={`/suppliers/${supplier.id}`} className="card-title">
          {supplier.name}
        </Link>
        <div className="flex flex-wrap gap-2">
          {supplier.categories.map(({ category_name: name }) => {
            return (
              <span
                key={name}
                className="badge badge-sm badge-outline opacity-80"
              >
                {formatCategoryName(name)}
              </span>
            );
          })}
        </div>
      </div>
      <div className="mt-2 bg-base-100 p-4 rounded-xl flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1 font-semibold">
            <span className="opacity-70 text-sm font-normal">Service Zone</span>
            <p>{supplier.zone}</p>
          </div>
          <div className="space-y-1 font-semibold">
            <span className="opacity-70 text-sm font-normal">Contact Name</span>
            <p>{supplier.contactName}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="shadow rounded-md p-2">
              <HiOutlineMapPin />
            </span>
            <p>{supplier.streetAddress}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="shadow rounded-md p-2">
              <HiOutlinePhone />
            </span>
            <p>{supplier.phoneNumber}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
