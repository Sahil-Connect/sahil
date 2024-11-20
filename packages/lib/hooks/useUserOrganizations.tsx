import { useQuery } from '@apollo/client';
import { create } from 'zustand';
import { GET_USER_SUPPLIER, GET_ALL_SUPPLIERS } from '../graphql/queries/users';
import { useEffect } from 'react';

export interface Supplier {
  id: string;
  name: string;
  totalProducts?: number;
  inStockProducts?: number;
  user_id: string;
}

type SupplierStore = {
  activeSupplier: Supplier | null;
  setActiveSupplier: (supplier: Supplier | null) => void;
};

const useSupplierStore = create<SupplierStore>((set) => ({
  activeSupplier: null,
  setActiveSupplier: (supplier) => {
    set({ activeSupplier: supplier });
    if (supplier) {
      localStorage.setItem('activeSupplier', JSON.stringify(supplier));
    } else {
      localStorage.removeItem('activeSupplier');
    }
  },
}));

export function useUserSuppliers(userId?: string, userRole?: string) {
  const { activeSupplier, setActiveSupplier } = useSupplierStore();
  
  const isAdmin = userRole === 'admin';
  const query = isAdmin ? GET_ALL_SUPPLIERS : GET_USER_SUPPLIER;
  
  const { data, loading, error } = useQuery(query, {
    variables: isAdmin ? {} : { userId },
    skip: !userId
  });

  const getSuppliers = (): Supplier[] => {
    if (!data) return [];
    return data.suppliers || [];
  };

  const switchSupplier = (supplier: Supplier) => {
    setActiveSupplier(supplier);
  };

  // Set first supplier as default if no active supplier
  useEffect(() => {
    const suppliers = getSuppliers();
    if (suppliers.length > 0 && !activeSupplier) {
      setActiveSupplier(suppliers[0]);
    }
  }, [data, activeSupplier, setActiveSupplier]);

  // Restore active supplier from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('activeSupplier');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setActiveSupplier(parsed);
      } catch (e) {
        localStorage.removeItem('activeSupplier');
      }
    }
  }, [setActiveSupplier]);

  return {
    suppliers: getSuppliers(),
    activeSupplier,
    switchSupplier,
    loading,
    error
  };
} 