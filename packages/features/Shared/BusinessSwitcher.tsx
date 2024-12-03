import React from "react";
import { HiArrowsUpDown } from "react-icons/hi2";

interface Business {
  id: string;
  name: string;
  totalOrders?: number;
  totalProducts?: number;
}

interface BusinessSwitcherProps {
  businesses: Business[];
  activeBusiness?: Business | null;
  onBusinessSelect: (business: Business) => void;
  type?: 'orders' | 'inventory';
}

const BusinessSwitcher = ({
  businesses,
  activeBusiness,
  onBusinessSelect,
  type = 'orders'
}: BusinessSwitcherProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white px-4 py-2 text-left border rounded-md flex items-center justify-between hover:bg-gray-50"
      >
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="text-sm text-gray-500">Active Business</span>
            </div>
            <p>
              {activeBusiness && (
                <span className="text-lg font-medium">
                  {activeBusiness.name}
                </span>
              )}
            </p>
          </div>
          <HiArrowsUpDown />
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-md shadow-lg border p-1 z-10">
          {businesses.map((business) => (
            <button
              key={business.id}
              onClick={() => {
                onBusinessSelect(business);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left rounded-md flex items-center justify-between hover:bg-secondary/10 ${
                activeBusiness?.id === business.id
                  ? "bg-secondary/20 text-primary"
                  : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">{business.name}</span>
                <span className="text-xs text-gray-500">
                  {type === 'orders' 
                    ? `${business.totalOrders || 0} orders`
                    : `${business.totalProducts || 0} products`
                  }
                </span>
              </div>
              {activeBusiness?.id === business.id && (
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BusinessSwitcher; 