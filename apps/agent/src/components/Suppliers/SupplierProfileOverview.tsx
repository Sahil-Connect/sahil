import { formatCategoryName } from './SupplierOverviewCard';
import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlineUser,
} from 'react-icons/hi2';

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
    <div className='card card-compact shadow'>
      <div className='card-body'>
        <div className='avatar placeholder'>
          <div className='bg-neutral-focus text-neutral-content rounded-full w-20'>
            <span>{generateInitials(supplier?.name)}</span>
          </div>
        </div>
        <h2 className='card-title'>{supplier?.name}</h2>
        <div className='flex flex-wrap gap-2'>
          {supplier?.categories.map(({ category_name: name }) => {
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
        <p>{supplier?.description}</p>
        <div className='divider'>Contact Info</div>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <span className='shadow rounded-md p-2'>
              <HiOutlineUser />
            </span>
            <p>{supplier?.contactName}</p>
          </div>

          <div className='flex items-center gap-2'>
            <span className='shadow rounded-md p-2'>
              <HiOutlineMapPin />
            </span>
            <p>{supplier?.streetAddress}</p>
          </div>

          <div className='flex items-center gap-2'>
            <span className='shadow rounded-md p-2'>
              <HiOutlineEnvelope />
            </span>
            <p>{supplier?.contactEmail}</p>
          </div>

          <div className='flex items-center gap-2'>
            <span className='shadow rounded-md p-2'>
              <HiOutlinePhone />
            </span>
            <p>{supplier?.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const generateInitials = (name: string) => {
  return name
    ?.split(' ')
    .slice(0, 3)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
};
