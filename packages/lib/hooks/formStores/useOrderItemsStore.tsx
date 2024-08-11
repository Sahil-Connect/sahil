import { create } from "zustand";

type OrderItem = {
  id: string;
  quantity: number;
  price: number;
};

type OrderItemsStore = {
  orderItems: OrderItem[];
  products: any[];
  addOrderItem: (item: OrderItem) => void;
  removeOrderItem: (item: OrderItem) => void;
  updateOrderItem: (item: OrderItem) => void;
  setProducts: (products: any[]) => void;
};

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
};

export const useOrderItemsStore = create<OrderItemsStore>((set) => ({
  orderItems: [],
  addOrderItem: (item) =>
    set((state) => {
      const existingItem = state.orderItems.find((i) => i.id === item.id);
      const updatedProducts = state.products.map((product) =>
        product.id === item.id ? { ...product, isInCart: true } : product
      );

      // If the item already exists, update its quantity, otherwise add it
      const updatedItems = existingItem
        ? state.orderItems.map((i) =>
            i.id === item.id ? { ...i, quantity: item.quantity } : i
          )
        : [...state.orderItems, item];

      return {
        ...state,
        orderItems: updatedItems,
        products: updatedProducts,
      };
    }),
  removeOrderItem: (item) =>
    set((state) => {
      const updatedItems = state.orderItems.filter((i) => i.id !== item.id);
      return { orderItems: updatedItems };
    }),
  updateOrderItem: (item) =>
    set((state) => {
      const updatedItems = state.orderItems.map((i) =>
        i.id === item.id ? { ...i, quantity: item.quantity } : i
      );
      return {
        ...state,
        orderItems: updatedItems,
      };
    }),
  products: [],
  setProducts: (products: any) => {
    const mappedProducts = products?.map((product: any) => ({
      ...product,
      isInCart: false,
    }));
    set((state) => {
      return {
        ...state,
        products: mappedProducts,
      };
    });
  },
}));
