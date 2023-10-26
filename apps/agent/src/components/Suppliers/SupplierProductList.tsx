import { useState } from 'react';
import { useFetchSupplierProducts } from '@/hooks/suppliers';
import {
  HiOutlineBanknotes,
  HiOutlineCube,
  HiEllipsisHorizontal,
} from 'react-icons/hi2';

type SahilProduct = {
  id: string;
  name: string;
  description: string;
  inStock: boolean;
  price: number;
  quantity: number;
};

const SupplierProductList = ({ page }: { page: number }) => {
  const { data: products, loading, error } = useFetchSupplierProducts(page);

  if (error)
    return (
      <div>
        <p>An error occurred, couldn't load products1</p>
      </div>
    );

  if (loading)
    return (
      <div>
        <p>Loading supplier products...</p>
      </div>
    );

  if (products.length === 0)
    return (
      <div>
        <p>
          {page === 0
            ? 'This supplier has no products'
            : 'There are no more products'}
        </p>
      </div>
    );
  return (
    <div>
      <div className='grid place-items-center grid-cols-auto-250 gap-4'>
        {products?.map((product: any) => (
          <ProductOverviewCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SupplierProductList;

const ProductOverviewCard = ({ product }: { product: SahilProduct }) => {
  return (
    <div className='w-full h-full bg-base-100 card card-compact shadow'>
      <div className='card-body h-full flex-col justify-between'>
        <div className='flex flex-col justify-start'>
          <div className='flex justify-between'>
            <h3 className='card-title w-11/12'>{product.name}</h3>
            <button className='text-2xl'>
              <HiEllipsisHorizontal />
            </button>
          </div>
          <p
            className={`text-xs font-bold tracking-wider ${
              product.inStock ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {product.inStock ? 'Available' : 'Out of Stock'}
          </p>
        </div>

        <p className='text-sm'>{product.description}</p>

        <div className='flex items-center gap-4 mt-2 w-max'>
          <div className='flex items-center gap-1'>
            <span className='text-lg shadow rounded-md p-2'>
              <HiOutlineBanknotes />
            </span>
            <p>{formatCurrency(product.price)}</p>
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-lg shadow rounded-md p-2'>
              <HiOutlineCube />
            </span>
            <p>{product.quantity} items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatCurrency = (number: number) => {
  const formattedNumber = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return `${formattedNumber} SSP`;
};
