import { formatCategoryName } from "@sahil/lib/strings";
import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlineUser,
} from "react-icons/hi2";
import { Card } from "ui";

type SahilSupplier = {
  id: string;
  name: string;
  phoneNumber: string;
  streetAddress: string;
  contactName: string;
  zone: string;
  contactEmail: string;
  description: string;
  created_at: Date;
  categories: Array<{
    category_name: string;
  }>;
};

export const SupplierProfileOverview = ({
  supplier,
}: {
  supplier: SahilSupplier;
}) => {
  return (
    <Card height="h-fit">
      <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
          <span>{generateInitials(supplier?.name)}</span>
        </div>
      </div>
      <h2 className="card-title">{supplier?.name}</h2>
      <p>{supplier?.description}</p>
      <div className="mt-2 flex flex-col p-4  gap-4 border border-solid border-[#d2d6db] rounded-lg ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="shadow rounded-md p-2">
              <HiOutlineUser />
            </span>
            <p>{supplier?.contactName}</p>
          </div>
          <div className="flex items-center gap-2">
          <span className="shadow rounded-md p-2">
            <HiOutlineUser />
          </span>
          <p>{supplier?.contactName}</p>
        </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="shadow rounded-md p-2">
            <HiOutlineMapPin />
          </span>
          <p>{supplier?.streetAddress}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="shadow rounded-md p-2">
            <HiOutlineEnvelope />
          </span>
          <p>{supplier?.contactEmail}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="shadow rounded-md p-2">
            <HiOutlinePhone />
          </span>
          <p>{supplier?.phoneNumber}</p>
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
