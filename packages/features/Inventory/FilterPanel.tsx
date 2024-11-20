import React from 'react';
import { Card } from 'ui';
import type { Supplier } from "@sahil/lib/hooks/useUserOrganizations";
import BusinessSwitcher from './BusinessSwitcher';

interface FilterPanelProps {
  className?: string;
  suppliers: Supplier[];
  activeSupplier?: Supplier | null;
  onSupplierSelect: (supplier: Supplier) => void;
}

const FilterPanel = ({ 
  className, 
  suppliers,
  activeSupplier,
  onSupplierSelect 
}: FilterPanelProps) => {
  return (
    <div className="flex flex-col h-full space-y-4 py-2">
      {/* Business Switcher Section */}
      <div className="border-b">
        <BusinessSwitcher
          suppliers={suppliers}
          activeSupplier={activeSupplier}
          onSupplierSelect={onSupplierSelect}
        />
      </div>

      {/* Filters Section */}
      <div className="flex-1 overflow-auto">
        <div className="w-64 space-y-6 p-6 bg-white">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="category-select">Categories</label>
            <select
              id="category-select"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              aria-label="Select category"
            >
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="furniture">Furniture</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Price Range</label>
            <div className="space-y-4">
              <div className="h-2 bg-secondary/20 rounded-full">
                <div className="h-full w-1/2 bg-primary rounded-full"></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Stock Status</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="stock" 
                  value="all" 
                  defaultChecked 
                  className="radio radio-primary" 
                />
                <span>All</span>
              </label>
              <label className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="stock" 
                  value="in-stock" 
                  className="radio radio-primary" 
                />
                <span>In Stock</span>
              </label>
              <label className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="stock" 
                  value="out-of-stock" 
                  className="radio radio-primary" 
                />
                <span>Out of Stock</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel; 