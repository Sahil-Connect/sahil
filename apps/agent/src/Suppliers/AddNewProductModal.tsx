import React, { useRef } from 'react';
import SupplierProductForm, {
  ProductFormData,
  supplierProductSchema,
} from './SupplierProductForm';
import Modal from 'ui/Modal';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { useAddNewProduct } from '@/hooks/suppliers';
import { SubmitHandler } from 'react-hook-form';
<<<<<<< HEAD

let productEmptyState = {
  name: '',
  description: '',
  inStock: false,
  price: 0,
  quantity: 0,
  discount: 0,
};
=======
>>>>>>> 2a9f006 (feat: refactored Input & Toggle components)

const AddNewProductModal = ({ supplier_id }: { supplier_id: string }) => {
  const closeBtn = useRef<HTMLButtonElement>(null);

  const { addNewProduct, loading } = useAddNewProduct();

  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    const validatedInput = supplierProductSchema.parse(data);
    const product = { ...validatedInput, supplier_id };
<<<<<<< HEAD

    addNewProduct({
      variables: {
        product,
      },
    }).then(() => {
      productEmptyState = { ...productEmptyState };
      closeBtn.current?.click();
    });
=======
    console.log(product);

    // addNewProduct({
    //   variables: {
    //     product,
    //   },
    // }).then(() => closeBtn.current?.click());
>>>>>>> 2a9f006 (feat: refactored Input & Toggle components)
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
<<<<<<< HEAD
      <SupplierProductForm
        loading={loading}
        onSubmit={onSubmit}
        initial={productEmptyState}
      />
=======
      <SupplierProductForm loading={loading} onSubmit={onSubmit} />
>>>>>>> 2a9f006 (feat: refactored Input & Toggle components)
    </Modal>
  );
};

export default AddNewProductModal;
