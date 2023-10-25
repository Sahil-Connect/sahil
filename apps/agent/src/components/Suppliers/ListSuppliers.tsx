import {
  SupplierOverviewCard,
  formatCategoryName,
} from './SupplierOverviewCard';
import { useFetchSuppliers } from '@/hooks/suppliers';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useRouter } from 'next/router';

export type SahilSupplier = {
  id: string;
  name: string;
  phoneNumber: string;
  streetAddress: string;
  categories: Array<{
    category_name: string;
  }>;
};

export const ListSuppliers = () => {
  const { data: suppliers, error, loading } = useFetchSuppliers();

  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  if (error) {
    return (
      <div className='card card-compact bg-white shadow'>
        <div className='card-body'>
          <h3 className='card-title'>Something went wrong...</h3>
          <p>
            Error loading suppliers, check your network connection. You can also
            try refreshing the page.
          </p>
          <div className='card-actions'>
            <button className='btn btn-sm btn-secondary'>Reload</button>
            <button className='btn btn-sm btn-outline'>Go Back</button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <p>Loading suppliers...</p>
      </div>
    );
  }

  return (
    <section>
      <FilterSuppliers />
      <div className='flex flex-col gap-2' ref={parent}>
        {suppliers &&
          suppliers.map((supplier: SahilSupplier) => (
            <SupplierOverviewCard key={supplier.id} supplier={supplier} />
          ))}
      </div>
    </section>
  );
};

const FilterSuppliers = () => {
  const router = useRouter();

  const handleCategoryChange = (event: { target: { value: string } }) => {
    const selectedCategory = event.target.value;

    router.push({
      pathname: router.pathname,
      query: { category: selectedCategory },
    });
  };

  const categories = [
    'agricultural_supplies',
    'construction_materials',
    'electronics_appliances',
    'transportation_solutions',
    'educational_materials',
    'energy_solutions',
    'clothing_and_textiles',
    'health_and_safety',
    'home_and_living',
    'beauty_and_care',
    'office_supplies',
    'food_beverages',
    'waste_recycling',
    'water_sanitation',
  ];
  return (
    <div className='bg-primary/30 rounded-xl shadow mb-4 w-full flex justify-between items-center'>
      <p className='ml-4'>All Suppliers</p>
      <select
        onChange={handleCategoryChange}
        className='select select-primary select-bordered'
      >
        <option disabled selected>
          Filter Category
        </option>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {formatCategoryName(category)}
            </option>
          );
        })}
      </select>
    </div>
  );
};
