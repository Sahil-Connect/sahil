export interface OrderRequest {
    prompt: string;
}

export interface Order {
    id: string;
    quantity: number;
    unit: string;
    product: string;
    frequency?: string;
    nextDeliveryDate: Date;
    isRecurring: boolean;
}

export interface OrderResponse {
    success: boolean;
    message: string;
    data?: Order;
    error?: string;
}
