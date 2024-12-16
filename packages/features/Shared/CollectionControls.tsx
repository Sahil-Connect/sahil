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


export const CollectionControls = ({ user, title }) => {
    console.log(user);
    

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
                <div className="flex items-center gap-3">

                    <div>
                        <h1 className="text-xl">{title}</h1>
                    </div>
                    <CustomSelect
                        value={filters.status}
                        onChange={(value) => setFilters({ ...filters, status: value as OrderStatus })}
                        options={statusOptions}
                        placeholder="Filter by status"
                        width="180px"
                    />

                    <CustomSelect
                        value={filters.dateRange}
                        onChange={(value) => setFilters({ ...filters, dateRange: value as DateRange })}
                        options={dateRangeOptions}
                        placeholder="Select date range"
                        width="180px"
                    />

                    <CustomSelect
                        value={filters.sortBy}
                        onChange={(value) => setFilters({ ...filters, sortBy: value as SortOption })}
                        options={sortOptions}
                        placeholder="Sort by"
                        width="150px"
                    />
                    <ListPagination
                        onNextPage={() => { }}
                        onPreviousPage={() => { }}
                    />
                </div>

            </div>

        </Card>
    )
}