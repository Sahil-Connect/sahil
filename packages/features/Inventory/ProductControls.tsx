import React from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import { Button, Tabs } from 'ui';
import type { TabItem } from './types';

interface ProductControlsProps {
  onEdit: () => void;
  onDelete: () => void;
  tabs: TabItem[];
  currentTab: string;
  onTabClick: (value: string) => void;
}

const ProductControls: React.FC<ProductControlsProps> = ({
  onEdit,
  onDelete,
  tabs,
  currentTab,
  onTabClick
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <Tabs
        items={tabs}
        onTabClick={onTabClick}
        currentTab={currentTab}
        className="overflow-x-auto"
      />
      
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          className="flex items-center gap-2" 
          onClick={onEdit}
        >
          <HiPencil className="w-4 h-4" />
          Edit Product
        </Button>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 border-red-200" 
          onClick={onDelete}
        >
          <HiTrash className="w-4 h-4" />
          Delete Product
        </Button>
      </div>
    </div>
  );
};

export default ProductControls; 