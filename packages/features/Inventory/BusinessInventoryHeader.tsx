import React from 'react';
import { HiArrowLeft, HiOutlinePlus, HiAdjustmentsHorizontal, HiMagnifyingGlass, HiChevronRight } from 'react-icons/hi2';
import { Button, Card } from 'ui';
import type { Supplier } from "@sahil/lib/hooks/useUserOrganizations";

interface BusinessInventoryHeaderProps {
  suppliers: Supplier[];
  activeSupplier?: Supplier | null;
  onSupplierSelect: (supplier: Supplier) => void;
  isLoading?: boolean;
  onAddProduct: () => void;
}

const BusinessInventoryHeader = ({
  suppliers,
  activeSupplier,
  onSupplierSelect,
  isLoading,
  onAddProduct
}: BusinessInventoryHeaderProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-24 bg-gray-100 rounded-lg" />
      </div>
    );
  }

  return (
    <Card className="rounded-none border-x-0 border-t-0">
      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
            
            <div className="stats shadow bg-base-100">
              <div className="stat place-items-center">
                <div className="stat-title">Total Products</div>
                <div className="stat-value text-primary">{activeSupplier?.totalProducts || 0}</div>
                <div className="stat-desc">All products in inventory</div>
              </div>
              
              <div className="stat place-items-center">
                <div className="stat-title">In Stock</div>
                <div className="stat-value text-secondary">{activeSupplier?.inStockProducts || 0}</div>
                <div className="stat-desc">Available for sale</div>
              </div>
              
              <div className="stat place-items-center">
                <div className="stat-title">Total Sold</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↗︎ 90 (14%) from last month</div>
              </div>
            </div>
          </div>
  
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex flex-1 gap-4">
            <div className="relative flex-1">
              <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="input input-bordered w-full pl-10"
                aria-label="Search products"
              />
            </div>
            <Button 
            onClick={onAddProduct} 
            disabled={!activeSupplier}
            className="btn btn-primary"
          >
            <HiOutlinePlus className="-ml-1 mr-2 h-5 w-5" />
            Add Product
          </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BusinessInventoryHeader; 