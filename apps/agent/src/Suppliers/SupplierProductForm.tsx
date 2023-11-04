import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { supplierProductSchema } from './AddNewProductModal';
import { z } from 'zod';

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

type FormData = z.infer<typeof supplierProductSchema>;

type SupplierProductFormProps = {
  register: UseFormRegister<FormData>; // Add register from react-hook-form
  errors: FieldErrors<FormData>;
};

const SupplierProductForm = ({
  register,
  errors,
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
          {...register('name')}
        />
        {errors && <p className='text-error'>{errors.name?.message}</p>}
      </div>
      <div className='form-control w-full max-w-lg'>
        <label className='label'>
          <span className='label-text font-medium'>Description</span>
        </label>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full max-w-lg'
          {...register('description')}
        />
        {errors && <p className='text-error'>{errors.description?.message}</p>}
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
            {...register('price')}
            defaultValue={0}
          />
          {errors && <p className='text-error'>{errors.price?.message}</p>}
        </div>
        <div className='form-control w-1/2'>
          <label className='label'>
            <span className='label-text font-medium'>Quantity</span>
          </label>
          <input
            type='number'
            placeholder='Type here'
            className='input input-bordered'
            {...register('quantity')}
            defaultValue={0}
          />
          {errors && <p className='text-error'>{errors.quantity?.message}</p>}
        </div>
      </div>
      <div className='form-control justify-start w-fit'>
        <label className='label cursor-pointer gap-2'>
          <span className='label-text font-medium'>Available</span>
          <input
            type='checkbox'
            className={`toggle toggle-lg `}
            {...register('inStock')}
          />
          {errors && <p className='text-error'>{errors.inStock?.message}</p>}
        </label>
      </div>
    </div>
  );
};

export default SupplierProductForm;
