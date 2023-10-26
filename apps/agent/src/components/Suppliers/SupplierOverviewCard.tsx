import { FC } from 'react';
import Link from 'next/link';
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiEllipsisHorizontal,
} from 'react-icons/hi2';

export type SahilSupplier = {
  id: string;
  name: string;
  phoneNumber: string;
  streetAddress: string;
  contactName: string;
  zone: string;
  categories: Array<{
    category_name: string;
  }>;
};

type Props = {
  supplier: SahilSupplier;
};

export const SupplierOverviewCard: FC<Props> = ({ supplier }) => {
  return (
    <div className='w-full h-full card card-compact shadow bg-base-200/40'>
      <div className='card-body justify-between'>
        <div className='flex justify-between text-4xl'>
          <Link
            href={`/suppliers/${supplier.id}`}
            className='avatar placeholder h-fit'
          >
            <div className='bg-neutral-focus text-base text-neutral-content rounded-full w-20'>
              <span>{generateInitials(supplier.name)}</span>
            </div>
          </Link>
          <button>
            <HiEllipsisHorizontal />
          </button>
        </div>
        <div className='space-y-2'>
          <Link href={`/suppliers/${supplier.id}`} className='card-title'>
            {supplier.name}
          </Link>
          <div className='flex flex-wrap gap-2'>
            {supplier.categories.map(({ category_name: name }) => {
              return (
                <span
                  key={name}
                  className='badge badge-sm badge-outline opacity-80'
                >
                  {formatCategoryName(name)}
                </span>
              );
            })}
          </div>
        </div>
        <div className='mt-2 bg-base-100 p-4 rounded-xl flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <div className='space-y-1 font-semibold'>
              <span className='opacity-70 text-sm font-normal'>
                Service Zone
              </span>
              <p>{supplier.zone}</p>
            </div>
            <div className='space-y-1 font-semibold'>
              <span className='opacity-70 text-sm font-normal'>
                Contact Name
              </span>
              <p>{supplier.contactName}</p>
            </div>
          </div>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <span className='shadow rounded-md p-2'>
                <HiOutlineMapPin />
              </span>
              <p>{supplier.streetAddress}</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='shadow rounded-md p-2'>
                <HiOutlinePhone />
              </span>
              <p>{supplier.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const formatCategoryName = (categoryName: string) => {
  // Replace "_and_" with " & ", split the category name by underscores,
  // capitalize each word, and join them back with spaces
  return categoryName
    .replace(/_and_/g, ' & ')
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const generateInitials = (name: string) => {
  return name
    .split(' ')
    .slice(0, 3)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
};
