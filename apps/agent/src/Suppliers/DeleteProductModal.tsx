import React, { useRef } from 'react';
import Modal from 'ui/Modal';
import { HiOutlineTrash } from 'react-icons/hi2';
import { useDeleteProduct } from '@/hooks/suppliers';

const DeleteProductModal = ({ id, name }: { id: string; name: string }) => {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const { deleteProduct, loading } = useDeleteProduct();
  const handleDelete = () => {
    deleteProduct({
      variables: {
        id,
      },
    }).then(() => closeBtn.current?.click());
  };
  const handleCancel = () => {
    closeBtn.current?.click();
  };
  return (
    <Modal
      btnSize='sm'
      btnStyle='error'
      icon={<HiOutlineTrash />}
      CTA='Delete'
      id={`delete-${id}-modal`}
      CloseBtnRef={closeBtn}
      title='Delete Product'
    >
      <p className='text-center text-base mt-4'>
        Are you sure you want to delete <b>{name}</b>?
      </p>
      <div className='flex items-center justify-center gap-4 my-4'>
        <button
          onClick={handleDelete}
          className={`btn btn-sm normal-case btn-error ${
            loading && 'animate-pulse'
          }`}
        >
          Delete
        </button>
        <button
          onClick={handleCancel}
          className='btn btn-sm normal-case btn-outline'
        >
          Cancel
        </button>
      </div>
      <div className='my-4 flex flex-row justify-end gap-4'></div>
    </Modal>
  );
};

export default DeleteProductModal;
