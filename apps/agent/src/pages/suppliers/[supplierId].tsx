import { useRouter } from 'next/router';
import { useFetchSupplierByPK } from '@/hooks/suppliers';
import {
  SupplierOrderHistory,
  SupplierProducts,
  ServiceZones,
  SupplierProfileOverview,
} from '@/Suppliers';

export default function SupplierPage() {
  const { data: supplier, error, loading } = useFetchSupplierByPK();
  if (error) {
    console.log(error);
    return <p>Failed</p>;
  }
  return (
    <div className='space-y-4'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='space-y-2'>
          <SupplierProfileOverview supplier={supplier} />
          <ServiceZones />
        </div>
        <div className='basis-5/6 space-y-4'>
          <SupplierProducts
            productsCount={supplier?.products_aggregate.aggregate.count}
          />
          <SupplierOrderHistory />
        </div>
      </div>
    </div>
  );
}
