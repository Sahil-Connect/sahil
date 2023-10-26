import { useDeleteProduct, useEditProduct } from '@/hooks/suppliers';
import React, { useState, useRef } from 'react';
import { HiEllipsisHorizontal, HiXMark } from 'react-icons/hi2';

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
    <>
      <button
        className='btn btn-xs btn-ghost text-xl'
        onClick={() =>
          document.getElementById(`edit_${product?.id}`)?.showModal()
        }
      >
        <HiEllipsisHorizontal />
      </button>
      <dialog id={`edit_${product?.id}`} className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button
              ref={closeBtn}
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
            >
              <HiXMark />
            </button>
          </form>
          <h3 className='font-bold text-lg'>Edit Product</h3>
          <div className='w-fit flex flex-col gap-1'>
            <div className='form-control max-w-xs'>
              <label className='label'>
                <span className='label-text font-medium'>Name</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered max-w-xs'
                name='name'
                value={_product.name}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-control max-w-xs'>
              <label className='label'>
                <span className='label-text font-medium'>Description</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered max-w-xs'
                name='description'
                value={_product.description}
                onChange={handleInputChange}
              />
            </div>
            <div className='flex gap-4'>
              <div className='form-control w-1/3'>
                <label className='label'>
                  <span className='label-text font-medium'>Price</span>
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
              <div className='form-control w-1/3'>
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
            <div className='form-control w-fit'>
              <label className='label cursor-pointer gap-2'>
                <span className='label-text font-medium'>Out of Stock</span>
                <input
                  type='checkbox'
                  className={`toggle ${
                    _product.inStock ? 'toggle-primary' : ''
                  }`}
                  name='inStock'
                  checked={_product.inStock}
                  onChange={handleInputChange}
                />
                <span className='label-text font-medium'>Available</span>
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
              className='btn btn-sm btn-error'
            >
              Delete
            </button>
            <button onClick={handleSave} className='btn btn-sm btn-primary'>
              Save
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditProductModal;
