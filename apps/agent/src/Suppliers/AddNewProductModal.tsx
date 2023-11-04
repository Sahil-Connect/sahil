import React, { useRef } from 'react';
import SupplierProductForm, {
  ProductFormData,
  supplierProductSchema,
} from './SupplierProductForm';
import Modal from 'ui/Modal';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { useAddNewProduct } from '@/hooks/suppliers';
import { SubmitHandler } from 'react-hook-form';

const AddNewProductModal = ({ supplier_id }: { supplier_id: string }) => {
  const closeBtn = useRef<HTMLButtonElement>(null);

  const { addNewProduct, loading } = useAddNewProduct();

  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    const validatedInput = supplierProductSchema.parse(data);
    const product = { ...validatedInput, supplier_id };

    addNewProduct({
      variables: {
        product,
      },
    }).then(() => closeBtn.current?.click());
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
      <SupplierProductForm loading={loading} onSubmit={onSubmit} />
    </Modal>
  );
};

export default AddNewProductModal;
