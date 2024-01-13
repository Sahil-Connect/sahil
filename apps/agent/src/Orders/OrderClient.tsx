import { useFetchBusinessByPK } from "@/hooks/businesses";
import { Avatar, Card, Icon } from "ui";
import {
  HiOutlinePhone,
  HiOutlineStar,
  HiEllipsisHorizontal,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentCheck,
} from "react-icons/hi2";
import Link from "next/link";

export const OrderClient = ({ businessId }) => {
  const { error, data: business, loading } = useFetchBusinessByPK(businessId);

  if (error) return <p>error</p>;
  if (loading) return <p>loading</p>;

  return (
    <div className="grow space-y-2">
      <Card className="grow " titleSize="sm">
        <div className="flex justify-between">
          <Link
            href={`/suppliers/${business.id}`}
            className="avatar placeholder h-fit"
          >
            <Avatar alt={business?.name} src={business?.avatar} />
          </Link>
          <button title="More Horizontal">
            <HiEllipsisHorizontal />
          </button>
        </div>
        <h3 className="text-sm">{business?.name}</h3>
        <div className="mt-2 flex flex-col p-4  gap-4 border border-solid border-[#d2d6db] rounded-lg ">
          <div className="flex justify-between items-center">
            <div className="space-y-1 font-semibold">
              <span className="text-gray-600 text-sm font-normal">
                Business Type
              </span>
              <p className="capitalize">{business.type}</p>
            </div>
            <div className="space-y-1 font-semibold">
              <span className="text-gray-600 text-sm font-normal">
                Contact Name
              </span>
              <p className="capitalize">{business.contactName}</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <span className="p-2 shadow rounded-lg w-fit">
              <HiOutlinePhone />
            </span>
            <p>{business.phoneNumber}</p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="p-2 shadow rounded-lg w-fit">
              <HiOutlineStar />
            </span>
            <p>4.6</p>
          </div>
        </div>
      </Card>
      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-title">Orders Made</div>
          <div className="stat-value">17</div>
          <div className="stat-figure">
            <Icon icon={HiOutlineClipboardDocumentList} />
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Fulfilled Orders</div>
          <div className="stat-value">15</div>
          <div className="stat-figure">
            <Icon icon={HiOutlineDocumentCheck} />
          </div>
        </div>
      </div>
    </div>
  );
};
