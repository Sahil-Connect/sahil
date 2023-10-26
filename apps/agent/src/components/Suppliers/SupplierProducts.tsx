import { useState } from 'react';
import SupplierProductList from './SupplierProductList';
import { HiOutlinePlusCircle } from 'react-icons/hi2';

export const SupplierProducts = () => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    console.log(page);
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className='grow space-y-2 bg-base-200 p-4 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl'>Products</h3>
        <button className='btn btn-sm btn-outline normal-case'>
          <HiOutlinePlusCircle className='text-xl' />
          Add Product
        </button>
      </div>
      <SupplierProductList page={page} />

      <div className='flex justify-between'>
        <button onClick={() => handlePrev()} className='btn btn-sm btn-outline'>
          Prev
        </button>
        <button
          onClick={() => handleNext()}
          className='btn btn-sm btn-secondary'
        >
          Next
        </button>
      </div>
    </div>
  );
};
