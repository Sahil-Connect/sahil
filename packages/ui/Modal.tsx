import { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { HiXMark } from 'react-icons/hi2';

export type ModalProps = {
  id: string;
  children: ReactNode | ReactNode[];
  title?: string;
  CTA?: string;
  icon: ReactNode;
  CloseBtnRef: React.RefObject<HTMLButtonElement>;
  btnStyle?: 'primary' | 'secondary' | 'accent' | 'ghost';
  btnSize?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
};

const Modal = ({
  id,
  children,
  title,
  icon,
  CTA,
  btnSize = 'md',
  btnStyle = 'primary',
  CloseBtnRef,
  className,
}: ModalProps) => {
  return (
    <>
      <button
        className={`btn btn-${btnSize} btn-${btnStyle} ${className}`}
        onClick={() => document.getElementById(id)?.showModal()}
      >
        {icon}
        {CTA}
      </button>
      <dialog id={id} className='modal'>
        <div className='modal-box justify-items-center'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button
              ref={CloseBtnRef}
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
            >
              <HiXMark />
            </button>
          </form>
          <h3 className='font-bold text-lg'>{title}</h3>
          {children}
        </div>
      </dialog>
    </>
  );
};

export default Modal;
