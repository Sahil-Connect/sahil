import { Card } from "ui";
import { useSession } from "next-auth/react";
import { HiOutlinePlus, HiOutlineArrowDown, HiArrowLeft, HiChevronRight } from "react-icons/hi2";
import { useGetUserById } from "@sahil/lib/hooks/users";
import { useUserSuppliers } from "@sahil/lib/hooks/useUserOrganizations";
import { useFetchProducts } from "@sahil/lib/hooks/products";
import type { Supplier } from "@sahil/lib/hooks/useUserOrganizations";
import { useRouter } from 'next/router';
import { formatDateTime } from "@sahil/lib/dates";
import BusinessInventoryHeader from '@sahil/features/Inventory/BusinessInventoryHeader';
import FilterPanel from '@sahil/features/Inventory/FilterPanel';

interface ProductsTableProps {
  products: any[];
  isLoading: boolean;
  error?: Error;
  onProductClick: (productId: string) => void;
}

function ProductsTable({ products, isLoading, error, onProductClick }: ProductsTableProps) {
  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded-t-xl" />
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-100" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4 text-gray-500">
        Error loading products
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className="text-center py-4 text-gray-500">
        No products found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Product</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr 
              key={product.id} 
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => onProductClick(product.id)}
            >
              <th onClick={(e) => e.stopPropagation()}>
                <label>
                  <input 
                    type="checkbox" 
                    className="checkbox" 
                    aria-label={`Select ${product.name}`}
                  />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={product.mainImage || "https://placehold.co/100x100"}
                        alt={product.name}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.name}</div>
                    <div className="text-sm opacity-50">{product.sku || 'No SKU'}</div>
                  </div>
                </div>
              </td>
              <td>
                ${product.price}
              </td>
              <td>
            
              {product.price}
              </td>
              <td>
                <span className={`badge badge-md py-2 ${
                  product.quantity > 0 ? 'badge-success' : 'badge-error'
                } badge-sm`}>
                  {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </td>
              <th onClick={(e) => e.stopPropagation()}>
                <button 
                  className="btn btn-ghost btn-xs"
                  aria-label={`Edit ${product.name}`}
                >
                  View Product
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price & Stock</th>
            <th>Status</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default function InventoryPage() {
  const router = useRouter();
  const { data: sessionData } = useSession();
  const { data: currentUser, loading: userLoading } = useGetUserById(sessionData?.user?.id);
  
  const {
    suppliers,
    activeSupplier,
    switchSupplier,
    loading: suppliersLoading
  } = useUserSuppliers(
    sessionData?.user?.id,
    currentUser?.role
  );

  const {
    data: products,
    loading: productsLoading,
    error: productsError
  } = useFetchProducts({
    offset: 0,
    limit: 12,
    supplierId: activeSupplier?.id
  });

  const handleProductClick = (productId: string) => {
    router.push(`/inventory/${productId}`);
  };

  const handleAddProduct = () => {
    router.push('/inventory/new');
  };

  if (userLoading || suppliersLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <BusinessInventoryHeader
        suppliers={suppliers}
        activeSupplier={activeSupplier}
        onSupplierSelect={switchSupplier}
        isLoading={suppliersLoading}
        onAddProduct={handleAddProduct}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <FilterPanel 
          suppliers={suppliers}
          activeSupplier={activeSupplier}
          onSupplierSelect={switchSupplier}
        />
        <div className="flex-1 overflow-auto p-6">
          <ProductsTable 
            products={products || []}
            isLoading={productsLoading}
            error={productsError}
            onProductClick={handleProductClick}
          />
        </div>
      </div>
    </div>
  );
}
