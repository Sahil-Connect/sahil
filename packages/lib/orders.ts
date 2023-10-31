export type OrderItemsTotal = {
    totalCost?: number | string;
    totalItems?: number | string;
}

export type OrderItemsOptions = {
    code?: string;
    currency?: string;
    formatted?: boolean;
};

export const getOrderItemsTotal = (orderItems: any[], {
    code = "SS",
    currency = "SSP",
    formatted = false
}: OrderItemsOptions): OrderItemsTotal => {
    const { totalItems, totalCost } = orderItems?.reduce(
        (totals, product) => ({
            totalItems: totals.totalItems + product.quantity,
            totalCost: totals.totalCost + product.price * product.quantity,
        }),
        {
            totalItems: 0,
            totalCost: 0,
        }
    );
    return { totalCost, totalItems };
}