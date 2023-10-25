import { FC } from 'react';
import Link from 'next/link';
import { HiOutlineMapPin, HiOutlinePhone } from 'react-icons/hi2';

export type SahilSupplier = {
  id: string;
  name: string;
  phoneNumber: string;
  streetAddress: string;
  categories: Array<{
    category_name: string;
  }>;
};

type Props = {
  supplier: SahilSupplier;
};

export const SupplierOverviewCard: FC<Props> = ({ supplier }) => {
  return (
    <div className='card card-compact shadow'>
      <div className='card-body md:flex-row md:justify-between gap-4'>
        <div className='flex gap-2'>
          <Link
            href={`/suppliers/${supplier.id}`}
            className='avatar placeholder h-fit'
          >
            <div className='bg-neutral-focus text-neutral-content rounded-full w-12'>
              <span className='text-xs'>{generateInitials(supplier.name)}</span>
            </div>
          </Link>
          <div className='space-y-2'>
            <Link href={`/suppliers/${supplier.id}`} className='card-title'>
              {supplier.name}
            </Link>
            <div className='flex flex-col gap-1 text-xs'>
              <div className='flex items-center gap-1'>
                <HiOutlineMapPin />
                <p>{supplier.streetAddress}</p>
              </div>
              <div className='flex items-center gap-1'>
                <HiOutlinePhone />
                <p>{supplier.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap gap-2 max-w-xs'>
          {supplier.categories.map(({ category_name: name }) => {
            return (
              <span key={name} className='badge badge-xs badge-secondary p-2'>
                {formatCategoryName(name)}
              </span>
            );
          })}
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
