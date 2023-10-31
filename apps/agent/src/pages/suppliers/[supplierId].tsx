import { useRouter } from 'next/router';
import { useFetchSupplierByPK } from '@/hooks/suppliers';
import {
  SupplierOrderHistory,
  SupplierProducts,
  ServiceZones,
  SupplierProfileOverview,
} from '@/components/Suppliers';

export default function SupplierPage() {
  const { data: supplier, error, loading } = useFetchSupplierByPK();
  if (error) {
    console.log(error);
    return <p>Failed</p>;
  }
  return (
    <div className='min-h-screen p-8 space-y-4'>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='space-y-2'>
          <SupplierProfileOverview supplier={supplier} />
          <ServiceZones />
        </div>
        <div className='basis-4/5 space-y-4'>
          <SupplierProducts />
          <SupplierOrderHistory />
        </div>
      </div>
    </div>
  );
}
