import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Toggle } from 'ui';

export const supplierProductSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, 'Name cannot be less than 3 characters.').trim(),
  description: z.string().min(1, 'Description cannot be less than 10.').trim(),
  inStock: z.boolean(),
  price: z.number().min(0, 'Price cannot be negative.'),
  quantity: z.number().min(0, 'Quantity cannot be negative.'),
  discount: z
    .number()
    .min(0, 'Discount cannot be negative.')
    .max(100, 'Discount cannot be more than 100.'),
});

export type ProductFormData = z.infer<typeof supplierProductSchema>;

type SupplierProductFormProps = {
  onSubmit: SubmitHandler<ProductFormData>;
  loading?: boolean;
};

const SupplierProductForm = ({
  loading,
  onSubmit,
}: SupplierProductFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(supplierProductSchema),
  });

  const price = watch('price');
  const discount = watch('discount');
  const inStock = watch('inStock');

  const discountedPrice = Math.round(price - price * (discount / 100));

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
      className='flex flex-col gap-1'
    >
      <Input label='Name' name='name' register={register} errors={errors} />
      <Input
        label='Description'
        name='description'
        register={register}
        errors={errors}
      />
      <div className='w-full flex gap-4'>
        <Input
          label='Price (SSP)'
          name='price'
          register={register}
          errors={errors}
          defaultValue={0}
          valueAsNumber={true}
        />
        <Input
          label='Quantity'
          name='quantity'
          register={register}
          errors={errors}
          defaultValue={0}
          valueAsNumber={true}
        />
      </div>
      <div className='w-full flex gap-4'>
        <div>
          <Input
            label='Discount (%)'
            name='discount'
            register={register}
            errors={errors}
            defaultValue={0}
            valueAsNumber={true}
          />
          {discount > 0 && discountedPrice > 0 && (
            <p className='text-sm text-primary'>
              New Price {discountedPrice} SSP
            </p>
          )}
        </div>

        <Toggle
          label='Available'
          name='inStock'
          register={register}
          errors={errors}
          isChecked={inStock}
        />
      </div>

      <div className='my-4 flex flex-row justify-end gap-4'>
        <button
          type='submit'
          className={`btn normal-case btn-primary ${
            loading && 'animate-pulse'
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SupplierProductForm;
