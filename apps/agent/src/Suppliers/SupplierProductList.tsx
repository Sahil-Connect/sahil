import { useState } from 'react';
import { useFetchSupplierProducts } from '@/hooks/suppliers';
import {
  HiOutlineBanknotes,
  HiOutlineCube,
  HiEllipsisHorizontal,
} from 'react-icons/hi2';
import EditProductModal from './EditProductModal';
import { formatCurrency } from '@sahil/lib';
import { Card, List, ListHeader } from 'ui';
import DeleteProductModal from './DeleteProductModal';

type SahilProduct = {
  id: string;
  name: string;
  description: string;
  inStock: boolean;
  price: number;
  quantity: number;
  discount: number;
  supplier_id: string;
};

type props = {
  productsCount: number;
};

const SupplierProductList = ({ productsCount }: props) => {
  const [page, setPage] = useState(0);
  const { data: products, loading, error } = useFetchSupplierProducts(page);

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPage((prev) => {
      if (page === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <div className='space-y-4'>
      <ListHeader
        onNextPage={handleNext}
        onPreviousPage={handlePrev}
        size={productsCount}
        limit={4}
        sizeLabel='Products'
      />

      <List
        data={products}
        error={error}
        loading={loading}
        renderItem={(product: SahilProduct) => (
          <ProductOverviewCard key={product.id} product={product} />
        )}
      />
    </div>
  );
};

export default SupplierProductList;

const ProductOverviewCard = ({ product }: { product: SahilProduct }) => {
  return (
    <Card className='bg-white h-full'>
      <div className='flex flex-col justify-start'>
        <div className='flex justify-between items-start'>
          <h3 className='card-title w-11/12'>{product.name}</h3>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-sm btn-ghost m-1'>
              <HiEllipsisHorizontal />
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow-xl border border-neutral bg-base-100 rounded-box w-36 space-y-2'
            >
              <EditProductModal product={product} />

              <DeleteProductModal name={product.name} id={product.id} />
            </ul>
          </div>
        </div>
        <p
          className={`text-xs font-bold tracking-wider ${
            product.inStock ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {product.inStock ? 'Available' : 'Out of Stock'}
        </p>
      </div>

      <div className='grow grid items-center'>
        <p className='text-sm'>{product.description}</p>
      </div>

      <div className='flex flex-wrap items-center gap-2'>
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
    </Card>
  );
};
