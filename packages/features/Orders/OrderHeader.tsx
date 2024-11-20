import React from 'react';
import { Card } from 'ui';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import BusinessSwitcher from '../Shared/BusinessSwitcher';
import { CustomSelect, type SelectOption } from '../Shared/CustomSelect';
import { StatusBadge } from './StatusBadge';
import { HiOutlineCalendarDays } from 'react-icons/hi2';

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

interface OrderHeaderProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  businesses: Array<{
    id: string;
    name: string;
    totalOrders?: number;
  }>;
  activeBusiness?: { id: string; name: string; totalOrders?: number; } | null;
  onBusinessSelect: (business: any) => void;
}

const OrderHeader = ({
  filters,
  onFilterChange,
  businesses,
  activeBusiness,
  onBusinessSelect
}: OrderHeaderProps) => {
  const statusOptions: SelectOption[] = [
    { value: '', label: 'All Status' },
    ...(['CONFIRMED', 'CANCELLED', 'PENDING', 'PROCESSING', 'DELIVERED'] as OrderStatus[]).map(status => ({
      value: status,
      label: status,
      icon: <HiOutlineCalendarDays />
    }))
  ];

  const sortOptions: SelectOption[] = [
    { value: 'date_desc', label: 'Newest First' },
    { value: 'date_asc', label: 'Oldest First' },
    { value: 'status', label: 'By Status' },
    { value: 'customer', label: 'By Customer' },
  ];

  const dateRangeOptions: SelectOption[] = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'custom', label: 'Custom Range' },
  ];

  return (
    <Card className="rounded-none border-x-0 border-t-0">
      <div className="p-6 space-y-4">
        <BusinessSwitcher
          businesses={businesses}
          activeBusiness={activeBusiness}
          onBusinessSelect={onBusinessSelect}
          type="orders"
        />

        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search orders..."
              value={filters.search}
              onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
              className="input input-bordered w-full pl-10"
            />
          </div>

          <CustomSelect
            value={filters.status}
            onChange={(value) => onFilterChange({ ...filters, status: value as OrderStatus })}
            options={statusOptions}
            placeholder="Filter by status"
            width="180px"
          />

          <CustomSelect
            value={filters.dateRange}
            onChange={(value) => onFilterChange({ ...filters, dateRange: value as DateRange })}
            options={dateRangeOptions}
            placeholder="Select date range"
            width="180px"
          />

          <CustomSelect
            value={filters.sortBy}
            onChange={(value) => onFilterChange({ ...filters, sortBy: value as SortOption })}
            options={sortOptions}
            placeholder="Sort by"
            width="150px"
          />
        </div>
      </div>
    </Card>
  );
};

export default OrderHeader; 