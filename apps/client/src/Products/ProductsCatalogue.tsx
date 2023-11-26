import { useFetchProducts } from '@/hooks/products';
import { Card, List, ListHeader } from 'ui';
import { formatCost } from '@sahil/lib';
import {
  HiOutlineBanknotes,
  HiArrowPath,
  HiSignalSlash,
} from 'react-icons/hi2';
import { useState } from 'react';

export const ProductsCatalogue = () => {
  const [offset, setOffset] = useState(0);
  const {
    data: products,
    error,
    loading,
    productsCount,
  } = useFetchProducts({ offset });

  if (error) {
    return (
      <Card title='Unable to load products...'>
        <span className='shadow p-2 rounded-md w-fit text-2xl'>
          <HiSignalSlash />
        </span>
        <p>
          Products aren't loading due to a technical problem on our side. Please
          try again. If the issue continues,{' '}
          <span className='text-primary'>contact support.</span>
        </p>
        <div className='card-actions justify-end'>
          <button className='btn btn-sm btn-warning'>
            <HiArrowPath /> try again
          </button>
        </div>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card title='Available Products' titleSize='sm'>
        <div className='flex items-center justify-center text-center'>
          <div>
            <span className='loading loading-spinner loading-lg'></span>
            <p>Loading Products</p>
          </div>
        </div>
      </Card>
    );
  }
  return (
    <>
      <ListHeader
        onNextPage={() => setOffset((prev) => prev + 12)}
        onPreviousPage={() => setOffset((prev) => prev - 12)}
        isNextDisabled={offset + 12 >= productsCount}
        isPrevDisabled={offset === 0}
        size={productsCount}
        limit={12}
        sizeLabel='Total Products'
      />
      <List
        data={products}
        error={error}
        loading={loading}
        cols={4}
        renderItem={(product) => (
          <ProductSummary product={product} key={product.id} />
        )}
      />
    </>
  );
};

type ProductSummaryProps = {
  product: any;
};

export const ProductSummary = ({ product }: ProductSummaryProps) => {
  return (
    <Card>
      <div className='card-body'>
        <div className='flex items-center justify-between'>
          <h3 className='card-title text-sm'>{product.name}</h3>
          {product.discount && product.discount !== 0 && (
            <div className='badge badge-accent'>{product.discount}%</div>
          )}
        </div>
        <div className='flex gap-2 items-center'>
          <div className='flex gap-2 items-center'>
            <span className='shadow p-2 rounded-md'>
              <HiOutlineBanknotes />
            </span>
            {formatCost(product.price)}
          </div>
        </div>
        <div className='card-actions items-center'></div>
      </div>
    </Card>
  );
};
