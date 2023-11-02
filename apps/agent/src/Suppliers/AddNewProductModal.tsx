import React, { useState, useRef } from 'react';
import SupplierProductForm from './SupplierProductForm';
import Modal from 'ui/Modal';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { useAddNewProduct } from '@/hooks/suppliers';

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

const initial: SahilProduct = {
  name: '',
  description: '',
  inStock: false,
  price: 0,
  quantity: 0,
  discount: 0,
  supplier_id: '',
};

const AddNewProductModal = ({ supplier_id }: { supplier_id: string }) => {
  const [product, setProduct] = useState<SahilProduct>(initial);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const { addNewProduct, loading } = useAddNewProduct();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct!,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAdd = (e: { preventDefault: () => void }) => {
    if (product.name && product.description && !loading) {
      const _product = { ...product, supplier_id: supplier_id };
      addNewProduct({
        variables: {
          product: _product,
        },
      }).then(() => {
        setProduct(initial);
        closeBtn.current?.click();
      });
    }
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
      <SupplierProductForm
        product={product}
        onInputChange={handleInputChange}
      />
      <div className='my-4 flex flex-row justify-end gap-4'>
        <button
          onClick={handleAdd}
          className={`btn normal-case btn-primary ${
            loading && 'animate-pulse'
          }`}
        >
          Add
        </button>
      </div>
    </Modal>
  );
};

export default AddNewProductModal;
