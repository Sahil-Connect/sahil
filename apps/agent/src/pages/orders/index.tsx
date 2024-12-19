import { useState } from 'react';
import { HiPlus } from "react-icons/hi2";
import { ListOrders } from "@sahil/features/Orders/ListOrders";
import { SectionHeader } from "ui";
import OrderHeader from "@sahil/features/Orders/OrderHeader";
import StatsPanel from "@sahil/features/Orders/StatsPanel";

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
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [activeBusiness, setActiveBusiness] = useState<any>(null);

  // Dummy data for demonstration
  const businesses = [
    { id: '1', name: 'Business A', totalOrders: 450 },
    { id: '2', name: 'Business B', totalOrders: 280 },
    { id: '3', name: 'Business C', totalOrders: 150 },
  ];

  const stats = {
    totalOrders: 1234,
    pendingOrders: 56,
    completedOrders: 1178
  };

  return (
    <div className="flex flex-col h-screen">
      <OrderHeader
        filters={filters}
        onFilterChange={setFilters}
        businesses={businesses}
        activeBusiness={activeBusiness}
        onBusinessSelect={setActiveBusiness}
      />
      
      <div className="flex flex-1 overflow-hidden">

        <div className="flex-1 overflow-auto">
          <SectionHeader title="Orders" actions={actions}>
            <ListOrders />
          </SectionHeader>
        </div>

      </div>
    </div>
  );
}
