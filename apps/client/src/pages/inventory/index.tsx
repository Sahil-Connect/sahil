import { Card } from "ui";
import { useSession } from "next-auth/react";
import { HiOutlinePlus, HiOutlineArrowDown } from "react-icons/hi2";
import { useGetUserById } from "@sahil/lib/hooks/users";
import { useUserSuppliers } from "@sahil/lib/hooks/useUserOrganizations";
import { useFetchProducts } from "@sahil/lib/hooks/products";
import type { Supplier } from "@sahil/lib/hooks/useUserOrganizations";
import { useRouter } from 'next/router';
import { formatDateTime } from "@sahil/lib/dates";

interface SupplierSwitcherProps {
  suppliers: Supplier[];
  activeSupplier?: Supplier | null;
  onSupplierSelect: (supplier: Supplier) => void;
  isLoading?: boolean;
}

function SupplierSwitcher({
  suppliers,
  activeSupplier,
  onSupplierSelect,
  isLoading = false
}: SupplierSwitcherProps) {
  if (isLoading) {
    return (
      <div className="h-10 w-48 animate-pulse rounded bg-gray-100" />
    );
  }

  return (
    <select
      aria-label="Select supplier"
      className="block w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      value={activeSupplier?.id || ''}
      onChange={(e) => {
        const selected = suppliers.find(s => s.id === e.target.value);
        if (selected) onSupplierSelect(selected);
      }}
    >
      <option value="" disabled>Select Supplier</option>
      {suppliers.map((supplier) => (
        <option key={supplier.id} value={supplier.id}>
          {supplier.name}
        </option>
      ))}
    </select>
  );
}

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
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Product</th>
            <th>Price & Stock</th>
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
                <br />
                <span className="badge badge-ghost badge-sm">
                  Stock: {product.quantity}
                </span>
              </td>
              <td>
                <span className={`badge ${
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
                  details
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

  if (userLoading || suppliersLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-2">
      <Card>
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h3 className="text-xl">Inventory</h3>
            <SupplierSwitcher
              suppliers={suppliers}
              activeSupplier={activeSupplier}
              onSupplierSelect={switchSupplier}
              isLoading={suppliersLoading}
            />
          </div>
          <div>
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => router.push('/inventory/new')}
              disabled={!activeSupplier}
            >
              <HiOutlinePlus className="-ml-1 mr-2 h-5 w-5" />
              Add Product
            </button>
          </div>
        </div>
      </Card>
      <ProductsTable 
        products={products || []}
        isLoading={productsLoading}
        error={productsError}
        onProductClick={handleProductClick}
      />
    </div>
  );
}
