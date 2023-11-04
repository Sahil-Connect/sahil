import React, { useState, useRef } from 'react';
import SupplierProductForm from './SupplierProductForm';
import Modal from 'ui/Modal';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { useAddNewProduct } from '@/hooks/suppliers';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const supplierProductSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(0, 'Name is required').trim(),
  description: z.string().min(0, 'Description is required').trim(),
  inStock: z.boolean().default(false),
  price: z.number().lte(0, "Price can't be a negative").default(0),
  quantity: z.number().default(0),
  discount: z.number().default(0),
});

type FormData = z.infer<typeof supplierProductSchema>;

const AddNewProductModal = ({ supplier_id }: { supplier_id: string }) => {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(supplierProductSchema),
  });

  const { addNewProduct, loading } = useAddNewProduct();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = supplierProductSchema.parse(data);
    const product = { ...validatedInput, supplier_id };

    console.log(product);
  };

  return (
    <Modal
      btnSize='sm'
      icon={<HiOutlinePlusCircle />}
      CTA='Add Product'
      id='add-product'
      CloseBtnRef={closeBtn}
      title='New Product'
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <SupplierProductForm register={register} errors={errors} />
        <div className='my-4 flex flex-row justify-end gap-4'>
          <button
            className={`btn normal-case btn-primary ${
              loading && 'animate-pulse'
            }`}
          >
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddNewProductModal;
