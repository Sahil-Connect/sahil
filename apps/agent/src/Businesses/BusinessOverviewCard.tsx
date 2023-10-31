import { FC } from "react";
import { formatDateTime } from "@sahil/lib/dates";
import Link from "next/link";

export type SahilBusiness = {
  name: string;
  id: string;
};

type Props = {
  business: SahilBusiness;
};

export const BusinessOverviewCard: FC<Props> = ({ business }) => {
  const formattedDate = formatDateTime(business.created_at);
  return (
    <div className="w-full h-full card card-compact shadow bg-base-200/40 rounded-none">
      <div className="card-body justify-between">
        <div className='flex justify-between text-4xl'>
          <Link
            href={`/businesses/${business.id}`}
            className='avatar placeholder h-fit'
          >
            <div className='bg-neutral-focus text-base text-neutral-content rounded-full w-20'>
              <span>{generateInitials(business.name)}</span>
            </div>
          </Link>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 12a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm6 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm6 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"/>
            </svg>
          </button>
        </div>
        <div className='space-y-2'>
          <Link href={`/businesses/${business.id}`} className='card-title text-base md:text-lg'>
            {business.name}
          </Link>
        </div>
        <p>Business Description</p>
        <div className="font-semibold">
          {business.addresses &&
            business.addresses.map((address, index) => (
              <div key={index} className='flex items-center gap-2'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"/>
                  </svg>
                </span>
                <p>{address.city}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const generateInitials = (name: string) => {
  return name
    .split(' ')
    .slice(0, 3)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
};