import { useState } from 'react';
import { SettingsHeader } from "ui";
import { HiOutlineCreditCard, HiOutlineBanknotes } from "react-icons/hi2";
import { IconType } from 'react-icons';

type PaymentMethodType = 'credit' | 'paypal' | 'cash';

interface PaymentMethodModalProps {
  type: 'credit' | 'paypal';
  isOpen: boolean;
  onClose: () => void;
}

interface PaymentMethod {
  id: PaymentMethodType;
  name: string;
  icon: IconType;
  requiresModal: boolean;
}

const PaymentMethodModal: React.FC<PaymentMethodModalProps> = ({ type, isOpen, onClose }) => {
  return (
    <dialog id={`${type}-modal`} className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          {type === 'credit' ? 'Add Credit Card' : 'Connect PayPal'}
        </h3>
        
        {type === 'credit' ? (
          <div className="py-4 space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Card Number</span>
              </label>
              <input 
                type="text" 
                placeholder="**** **** **** ****" 
                className="input input-bordered w-full outline-none focus:outline-none" 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Expiry Date</span>
                </label>
                <input 
                  type="text" 
                  placeholder="MM/YY" 
                  className="input input-bordered w-full outline-none focus:outline-none" 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">CVV</span>
                </label>
                <input 
                  type="text" 
                  placeholder="***" 
                  className="input input-bordered w-full outline-none focus:outline-none" 
                />
              </div>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Cardholder Name</span>
              </label>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="input input-bordered w-full outline-none focus:outline-none" 
              />
            </div>
          </div>
        ) : (
          <div className="py-4">
            <p className="text-sm text-gray-500 mb-4">
              You will be redirected to PayPal to complete the connection.
            </p>
            <button className="btn btn-primary w-full">Connect PayPal</button>
          </div>
        )}
        
        <div className="modal-action">
          <button className="btn" onClick={onClose}>Close</button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export const BillingCard: React.FC = () => {
  const [preferredMethod, setPreferredMethod] = useState<PaymentMethodType>('cash');
  const [activeModal, setActiveModal] = useState<PaymentMethodType | null>(null);
  
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'cash',
      name: 'Cash on Delivery',
      icon: HiOutlineBanknotes,
      requiresModal: false
    },
    {
      id: 'credit',
      name: 'Credit Card',
      icon: HiOutlineCreditCard,
      requiresModal: true
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: HiOutlineCreditCard,
      requiresModal: true
    }
  ];

  const handleMethodClick = (methodId: PaymentMethodType, requiresModal: boolean): void => {
    setPreferredMethod(methodId);
    if (requiresModal) {
      setActiveModal(methodId);
    }
  };

  return (
    <>
      <SettingsHeader 
        title="Billing Settings"
        description="Manage payment and billing information"
      />
      <hr className="mt-1 mb-8" />

      <div className="flex items-center p-4 my-8 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Info alert!</span> Currently, we only accept Cash on Delivery as the default mode of payment. You&#39;ll be notified when other modes of payment are implemented.
        </div>
      </div>
      
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="border rounded-lg">
            <div className="p-4">
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => handleMethodClick(method.id, method.requiresModal)}
              >
                <div className="flex items-center">
                  <method.icon size={24} className="mr-2" />
                  <div className="flex flex-col">
                    <span className="font-medium">{method.name}</span>
                    <div className="flex items-center gap-2">
                      {preferredMethod === method.id && (
                        <span className="text-sm opacity-70">Preferred method</span>
                      )}
                      {method.requiresModal && (
                        <span className="text-sm text-primary">Set up</span>
                      )}
                    </div>
                  </div>
                </div>
                <input
                  type="radio"
                  className="radio radio-primary"
                  checked={preferredMethod === method.id}
                  onChange={() => handleMethodClick(method.id, method.requiresModal)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {(activeModal === 'credit' || activeModal === 'paypal') && (
        <PaymentMethodModal 
          type={activeModal}
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  );
};