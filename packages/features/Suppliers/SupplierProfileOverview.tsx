import { formatCategoryName } from "@sahil/lib/strings";
import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlineUser,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentCheck,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";
import { Card, Icon } from "ui";

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
    <div className="space-y-2">
      <Card height="h-fit">
        <div className="flex items-center gap-2">
          {supplier?.name && (
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-12 md:w-14">
                {/* <span>{generateInitials("Supplier Name")}</span> */}
                <span>{generateInitials(supplier?.name)}</span>
              </div>
            </div>
          )}
          <h2 className="card-title">{supplier?.name}</h2>
        </div>
        <p className="my-3">{supplier?.description}</p>
        <div className="flex flex-col p-2 gap-4 border border-solid rounded-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-base border rounded-full p-2">
                <HiOutlineUser />
              </span>
              <div className="space-y-1 font-semibold">
                <span className="text-gray-500 text-sm font-normal">
                  Contact Name
                </span>
                <p>{supplier?.contactName}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-base border rounded-md p-2">
              <HiOutlineMapPin />
            </span>
            <p>{supplier?.streetAddress}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-base border rounded-md p-2">
              <HiOutlineEnvelope />
            </span>
            <p>{supplier?.contactEmail}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-base border rounded-md p-2">
              <HiOutlinePhone />
            </span>
            <p>{supplier?.phoneNumber}</p>
          </div>
          <div>
            <button className="btn btn-sm w-full btn-secondary">
              <HiOutlineDevicePhoneMobile /> Chat on WhatsApp
            </button>
          </div>
        </div>
      </Card>
      <div className="stats shadow-sm w-full">
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

const generateInitials = (name: string) => {
  return name
    ?.split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};
