import { create } from 'zustand';

type OrderItem = {
  productId: string;
  quantity: number;
};

type OrderItemsStore = {
  orderItems: OrderItem[];
  addOrderItem: (item: OrderItem) => void;
};

export const useOrderItemsStore = create<OrderItemsStore>((set) => ({
  orderItems: [],
  addOrderItem: (item) => set((state) => ({ orderItems: [...state.orderItems, item] })),
}));
