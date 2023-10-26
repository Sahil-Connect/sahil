import { ListSuppliers } from '@/components/Suppliers';
import FilterSuppliersModal from '@/components/Suppliers/FilterSuppliersModal';
import { useRouter } from 'next/router';
import { HiOutlinePlusCircle } from 'react-icons/hi2';

export default function Suppliers() {
  const router = useRouter();
  return (
    <main className='min-h-screen p-8 space-y-6'>
      <section className='flex flex-col lg:flex-row justify-between items-start gap-4'>
        <div>
          <h1 className='text-3xl'>Partner Suppliers</h1>
          <p>
            Users can register through agents, an app, or USSD codes and set
            delivery preferences.
          </p>
        </div>
        <div className='w-full lg:w-fit flex justify-end gap-4'>
          <FilterSuppliersModal />
          <button
            className='btn btn-sm btn-primary normal-case'
            onClick={() => router.push('/suppliers/new/business_info')}
          >
            <HiOutlinePlusCircle className='text-lg' />
            Register Supplier
          </button>
        </div>
      </section>

      <ListSuppliers />
    </main>
  );
}
