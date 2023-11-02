import React, { useState, useRef } from 'react';
import { useDeleteProduct, useEditProduct } from '@/hooks/suppliers';
import SupplierProductForm from './SupplierProductForm';
import Modal from 'ui/Modal';
import { HiEllipsisHorizontal } from 'react-icons/hi2';

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

const EditProductModal = ({ product }: { product: SahilProduct }) => {
  const [_product, _setProduct] = useState<SahilProduct>(product);
  const { updateProduct } = useEditProduct();
  const { deleteProduct } = useDeleteProduct();
  const closeBtn = useRef<HTMLButtonElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    _setProduct((prevProduct) => ({
      ...prevProduct!,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    const { id, inStock, name, price, quantity, description } = _product;
    updateProduct({
      variables: {
        id,
        inStock,
        name,
        price,
        quantity,
        description,
      },
    }).then(() => closeBtn.current?.click());
  };

  return (
    <Modal
      btnSize='xs'
      btnStyle='ghost'
      icon={<HiEllipsisHorizontal />}
      id={`edit-${_product.id}-modal`}
      CloseBtnRef={closeBtn}
      title='Edit Product'
    >
      <SupplierProductForm
        product={_product}
        onInputChange={handleInputChange}
      />
      <div className='my-4 flex flex-row justify-end gap-4'>
        <button
          onClick={() =>
            deleteProduct({
              variables: {
                id: _product.id,
              },
            }).then(() => closeBtn.current?.click())
          }
          className='btn normal-case btn-error'
        >
          Delete
        </button>
        <button onClick={handleSave} className='btn normal-case btn-primary'>
          Save
        </button>
      </div>
    </Modal>
  );
};

export default EditProductModal;
