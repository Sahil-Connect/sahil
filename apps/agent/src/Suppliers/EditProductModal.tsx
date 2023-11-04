import React, { useRef } from 'react';
import { useEditProduct } from '@/hooks/suppliers';
import SupplierProductForm, {
  ProductFormData,
  supplierProductSchema,
} from './SupplierProductForm';
import Modal from 'ui/Modal';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { SubmitHandler } from 'react-hook-form';

const EditProductModal = ({ product }: { product: ProductFormData }) => {
  const { updateProduct, loading } = useEditProduct();

  const closeBtn = useRef<HTMLButtonElement>(null);

  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    const validatedInput = supplierProductSchema.parse(data);
    const { id, inStock, name, price, quantity, description, discount } =
      validatedInput;

    console.log(validatedInput);
    updateProduct({
      variables: {
        id,
        inStock,
        name,
        price,
        quantity,
        description,
        discount,
      },
    }).then(() => closeBtn.current?.click());
  };

  return (
    <Modal
      btnSize='xs'
      btnStyle='ghost'
      icon={<HiEllipsisHorizontal />}
      id={`edit-${product.id}-modal`}
      CloseBtnRef={closeBtn}
      title='Edit Product'
    >
      <SupplierProductForm
        loading={loading}
        initial={product}
        onSubmit={onSubmit}
      />
      <div className='my-4 flex flex-row justify-end gap-4'></div>
    </Modal>
  );
};

export default EditProductModal;
