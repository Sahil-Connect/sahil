import { useState } from "react";
import { useFetchSupplierOrders } from "@sahil/lib/hooks/suppliers";

import { useUserSuppliers } from "@sahil/lib/hooks/useUserOrganizations";
import { Card } from "ui";
import { getRevenueByProduct, getOrderStatusStats, getClientProfitability, getClientSizeStats } from "../Reports/utils";
import { SelectOption, CustomSelect } from "./CustomSelect";
import { HiCalendar, HiMagnifyingGlass, HiOutlineCalendarDays } from 'react-icons/hi2';
import { ListPagination } from "ui";

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

interface CollectionControlsProps {
    user: {
        id: string;
        role: string;
    };
    title: string;
}

export const CollectionControls = ({ user, title }: CollectionControlsProps) => {

    const [dateRange, setDateRange] = useState({ from: new Date(), to: new Date() })


    const statusOptions: SelectOption[] = [
        { value: '', label: 'All Status' },
        ...(['CONFIRMED', 'CANCELLED', 'PENDING', 'PROCESSING', 'DELIVERED'] as OrderStatus[]).map(status => ({
            value: status,
            label: status,
            icon: <HiOutlineCalendarDays />
        }))
    ]

    const dateRangeOptions: SelectOption[] = [
        { value: 'today', label: 'Today' },
        { value: 'week', label: 'This Week' },
        { value: 'month', label: 'This Month' },
        { value: 'custom', label: 'Custom Range' },
    ]

    const sortOptions: SelectOption[] = [
        { value: 'date_desc', label: 'Newest First' },
        { value: 'date_asc', label: 'Oldest First' },
        { value: 'status', label: 'By Status' },
        { value: 'customer', label: 'By Customer' },
    ]


    const [filters, setFilters] = useState<FilterState>(initialFilters);
    const [activeBusiness, setActiveBusiness] = useState<any>(null);
    const {
        suppliers,
        activeSupplier,
        switchSupplier,
        loading: suppliersLoading
    } = useUserSuppliers(
        user?.id,
        user?.role
    );

    return (
        <Card className="border-x-0 border-t-0">
            <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="w-full sm:w-auto">
                        <h1 className="text-xl">{title}</h1>
                    </div>
                    
                    <div className="flex flex-col gap-2 w-full sm:flex-row sm:items-center">
                        <CustomSelect
                            value={filters.status}
                            onChange={(value) => setFilters({ ...filters, status: value as OrderStatus })}
                            options={statusOptions}
                            placeholder="Filter by status"
                            width="100%"
                            className="w-full sm:w-[180px]"
                        />

                        <CustomSelect
                            value={filters.dateRange}
                            onChange={(value) => setFilters({ ...filters, dateRange: value as DateRange })}
                            options={dateRangeOptions}
                            placeholder="Select date range"
                            width="100%"
                            className="w-full sm:w-[180px]"
                        />

                        <CustomSelect
                            value={filters.sortBy}
                            onChange={(value) => setFilters({ ...filters, sortBy: value as SortOption })}
                            options={sortOptions}
                            placeholder="Sort by"
                            width="100%"
                            className="w-full sm:w-[150px]"
                        />
                        
                        <div className="w-full sm:w-auto">
                            <ListPagination
                                onNextPage={() => { }}
                                onPreviousPage={() => { }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}