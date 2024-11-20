import React from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import type { Supplier } from "@sahil/lib/hooks/useUserOrganizations";

interface BusinessSwitcherProps {
  suppliers: Supplier[];
  activeSupplier?: Supplier | null;
  onSupplierSelect: (supplier: Supplier) => void;
}

const BusinessSwitcher = ({
  suppliers,
  activeSupplier,
  onSupplierSelect,
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
            <span className="text-sm text-gray-500">Active Supplier</span>
            </div>
            <p>
              {activeSupplier && (
                <span className="text-lg font-medium">
                  {activeSupplier.name}
                </span>
              )}
            </p>
          </div>
          <HiArrowsUpDown />
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-md shadow-lg border p-1 z-10">
          {suppliers.map((supplier) => (
            <button
              key={supplier.id}
              onClick={() => {
                onSupplierSelect(supplier);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left rounded-md flex items-center justify-between hover:bg-secondary/10 ${
                activeSupplier?.id === supplier.id
                  ? "bg-secondary/20 text-primary"
                  : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">{supplier.name}</span>
                <span className="text-xs text-gray-500">
                  {supplier.totalProducts || 0} products
                </span>
              </div>
              {activeSupplier?.id === supplier.id && (
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
