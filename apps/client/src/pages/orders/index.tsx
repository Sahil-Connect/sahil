import { useState } from 'react';
import { HiPlus } from "react-icons/hi2";
import { ListOrders } from "@sahil/features/Orders/ListOrders";
import { SectionHeader } from "ui";
import OrderHeader from "@sahil/features/Orders/OrderHeader";
import { useFetchSupplierOrders } from "@sahil/lib/hooks/suppliers";
import { useGetUserById } from "@sahil/lib/hooks/users";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useUserSuppliers } from "@sahil/lib/hooks/useUserOrganizations";
import { CollectionControls } from "@sahil/features/Shared/CollectionControls";


type DateRange = 'today' | 'week' | 'month' | 'custom';
type SortOption = 'date_desc' | 'date_asc' | 'status' | 'customer';
type OrderStatus = 'CONFIRMED' | 'CANCELLED' | 'PENDING' | 'PROCESSING' | 'DELIVERED';

interface FilterState {
  search: string;
  status: OrderStatus | '';
  dateRange: DateRange;
  customDateRange?: { from: Date; to: Date };
  sortBy: SortOption;
}

const initialFilters: FilterState = {
  search: '',
  status: '',
  dateRange: 'week',
  sortBy: 'date_desc'
};

const actions = [
  {
    label: "New Order",
    icon: <HiPlus />,
    href: "/orders/new/order_details",
    primary: true,
  },
];

export default function OrdersPage() {
  const router = useRouter();
  const { data: sessionData } = useSession();
  const { data: currentUser, loading: userLoading } = useGetUserById(sessionData?.user?.id);


  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [activeBusiness, setActiveBusiness] = useState<any>(null);

  const {
    suppliers,
    activeSupplier,
    switchSupplier,
    loading: suppliersLoading
  } = useUserSuppliers(
    sessionData?.user?.id,
    currentUser?.role
  );

  const stats = {
    totalOrders: 1234,
    pendingOrders: 56,
    completedOrders: 1178
  };

  return (
    <div className="flex flex-col h-screen gap-4">
      <CollectionControls user={currentUser} />
      <SectionHeader title="Orders" actions={actions}>
        <ListOrders />
      </SectionHeader>
    </div>
  );
}
