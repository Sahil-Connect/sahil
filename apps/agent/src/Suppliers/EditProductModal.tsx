import { useDeleteProduct, useEditProduct } from '@/hooks/suppliers';
import React, { useState, useRef } from 'react';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import Modal from 'ui/Modal';

type SahilProduct = {
  id: string;
  name: string;
  description: string;
  inStock: boolean;
  price: number;
  quantity: number;
};

const EditProductModal = ({ product }: { product: SahilProduct }) => {
  const [_product, _setProduct] = useState<SahilProduct>(product);
  const { updateProduct } = useEditProduct();
  const { deleteProduct } = useDeleteProduct();
  const closeBtn = useRef<HTMLButtonElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    console.log(_product.id);
    _setProduct((prevProduct) => ({
      ...prevProduct!,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
            value={_product.name}
            onChange={handleInputChange}
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
            value={_product.description}
            onChange={handleInputChange}
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
              value={_product.price}
              onChange={handleInputChange}
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
              value={_product.quantity}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='form-control justify-start w-fit'>
          <label className='label cursor-pointer gap-2'>
            <span className='label-text font-medium'>Available</span>
            <input
              type='checkbox'
              className={`toggle toggle-lg ${
                _product.inStock ? 'toggle-primary' : ''
              }`}
              name='inStock'
              checked={_product.inStock}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>
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
