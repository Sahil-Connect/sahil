import { FC } from "react";
import { formatDateTime } from "@sahil/lib/dates";
import { generateInitials } from "@sahil/lib/strings";
import Link from "next/link";
import { Card } from "ui";
import { HiOutlineEllipsisHorizontal, HiOutlineMapPin } from "react-icons/hi2";

export type SahilBusiness = {
  name: string;
  id: string;
};

type Props = {
  business: SahilBusiness;
};

export const BusinessOverviewCard: FC<Props> = ({ business }) => {
  return (
    <div className="basis-1/4">
      <Card>
        <div className="flex justify-between text-4xl">
          <Link
            href={`/businesses/${business.id}`}
            className="avatar placeholder h-fit"
          >
            <div className="bg-neutral-focus text-base text-neutral-content rounded-full w-12">
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
        <p>Business Description</p>
        <div className="font-semibold">
          {business.addresses &&
            business.addresses.map((address, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>
                  <HiOutlineMapPin />
                </span>
                <p>{address.city}</p>
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
};
