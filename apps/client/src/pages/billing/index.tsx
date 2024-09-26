import { HiOutlineCurrencyDollar, HiOutlineCreditCard, HiOutlineDocumentText, HiPlus } from "react-icons/hi2";
import { Card } from "ui";
import { useState } from "react";

const PaymentMethodCard = ({ method, isPreferred, onEdit, onSetPreferred }) => (
  <Card className="mb-4">
    <div className="flex items-center justify-between p-2">
      <div>
        <span className="font-medium">{method.type} ending in {method.last4}</span>
        {isPreferred && <span className="ml-2 text-sm text-green-600">Preferred</span>}
      </div>
      <div>
        <button onClick={onEdit} className="text-blue-600 hover:underline mr-2">Edit</button>
        {!isPreferred && (
          <button onClick={onSetPreferred} className="text-green-600 hover:underline">Set as Preferred</button>
        )}
      </div>
    </div>
  </Card>
);

export default function Billing() {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Visa', last4: '1234' },
    { id: 2, type: 'Mastercard', last4: '5678' },
  ]);
  const [preferredMethodId, setPreferredMethodId] = useState(1);

  const handleAddPaymentMethod = () => {
    // Implement add payment method logic
  };

  const handleEditPaymentMethod = (id) => {
    // Implement edit payment method logic
  };

  const handleSetPreferred = (id) => {
    setPreferredMethodId(id);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Billing</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <HiOutlineCreditCard className="mr-2" /> Payment Methods
          </h2>
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              isPreferred={method.id === preferredMethodId}
              onEdit={() => handleEditPaymentMethod(method.id)}
              onSetPreferred={() => handleSetPreferred(method.id)}
            />
          ))}
          <button
            onClick={handleAddPaymentMethod}
            className="btn btn-primary w-full flex items-center justify-center"
          >
            <HiPlus className="mr-2" /> Add Payment Method
          </button>
        </div>
        <div className="md:w-2/3">
          <div className="space-y-6">
            <section className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <HiOutlineCurrencyDollar className="mr-2" /> Summary
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-sm font-medium text-gray-700">Total Earned</span>
                  <span className="text-2xl font-bold">$1,234.56</span>
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700">Total Spent</span>
                  <span className="text-2xl font-bold">$567.89</span>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <HiOutlineDocumentText className="mr-2" /> Recent Transactions
              </h2>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Product Sale</span>
                  <span className="text-green-600">+$50.00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Platform Fee</span>
                  <span className="text-red-600">-$5.00</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
