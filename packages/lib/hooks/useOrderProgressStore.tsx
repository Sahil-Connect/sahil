import { create } from "zustand";
export const INITIAL_STEP = "order_details";

export const steps = [
  "order_accepted",
  "courier_search",
  "delivery_details",
  "payment_details",
  "summary",
] as const;

type SahilOrder = {
  id?: string;
};

type OrderProgressStore = {
  order: SahilOrder;
};

export const useOrderProgressStore = create<OrderProgressStore>((set) => ({
  order: {},
}));
