import { create } from "zustand";

type OrderItem = {
  productId: string;
  quantity: number;
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
      const existingItem = state.orderItems.find(
        (i) => i.productId === item.productId
      );
      const productIndex = state.products.findIndex(
        (product) => product.id === item.productId
      );
      const updatedProducts = state.products.map((product) =>
        product.id === item.productId ? { ...product, isInCart: true } : product
      );
      if (existingItem) {
        // If the item already exists, update its quantity
        const updatedItems = state.orderItems.map((i) => {
          if (i.productId === item.productId) {
            return { ...i, quantity: i.quantity + item.quantity };
          }
          return i;
        });
        return {
          ...state,
          orderItems: updatedItems,
          products: updatedProducts,
        };
      } else {
        // If the item is not in the orderItems, add it
        return {
          ...state,
          orderItems: [...state.orderItems, item],
          products: updatedProducts,
        };
      }
    }),
  removeOrderItem: (item) =>
    set((state) => {
      const updatedItems = state.orderItems.filter(
        (i) => i.productId !== item.productId
      );
      return { orderItems: updatedItems };
    }),
  updateOrderItem: (item) =>
    set((state) => {
      const existingItem = state.orderItems.find(
        (i) => i.productId === item.productId
      );
      if (existingItem) {
        // If the item already exists, update its quantity
        const updatedItems = state.orderItems.map((i) => {
          if (i.productId === item.productId) {
            return { ...i, quantity: item.quantity };
          }
          return i;
        });
        return { orderItems: updatedItems };
      } else {
        // If the item is not in the orderItems, do nothing
        return state;
      }
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
