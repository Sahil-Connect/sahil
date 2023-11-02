import React from 'react';

type SahilProduct = {
  id?: string;
  name: string;
  description: string;
  inStock: boolean;
  price: number;
  quantity: number;
  discount: number;
  supplier_id: string;
};

type SupplierProductFormProps = {
  product: SahilProduct;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SupplierProductForm = ({
  product,
  onInputChange,
}: SupplierProductFormProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='form-control w-full max-w-lg'>
        <label className='label'>
          <span className='label-text font-medium'>Name</span>
        </label>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full max-w-lg'
          name='name'
          value={product.name}
          onChange={onInputChange}
        />
      </div>
      <div className='form-control w-full max-w-lg'>
        <label className='label'>
          <span className='label-text font-medium'>Description</span>
        </label>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full max-w-lg'
          name='description'
          value={product.description}
          onChange={onInputChange}
        />
      </div>
      <div className='w-full flex gap-4'>
        <div className='form-control w-1/2'>
          <label className='label'>
            <span className='label-text font-medium'>Price (SSP)</span>
          </label>
          <input
            type='number'
            placeholder='Type here'
            className='input input-bordered'
            name='price'
            value={product.price}
            onChange={onInputChange}
          />
        </div>
        <div className='form-control w-1/2'>
          <label className='label'>
            <span className='label-text font-medium'>Quantity</span>
          </label>
          <input
            type='number'
            placeholder='Type here'
            className='input input-bordered'
            name='quantity'
            value={product.quantity}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className='form-control justify-start w-fit'>
        <label className='label cursor-pointer gap-2'>
          <span className='label-text font-medium'>Available</span>
          <input
            type='checkbox'
            className={`toggle toggle-lg ${
              product.inStock ? 'toggle-primary' : ''
            }`}
            name='inStock'
            checked={product.inStock}
            onChange={onInputChange}
          />
        </label>
      </div>
    </div>
  );
};

export default SupplierProductForm;
