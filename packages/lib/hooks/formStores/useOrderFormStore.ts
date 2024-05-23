import { Business } from "../../graphql/__generated__/graphql";
import { useCreateFormStore } from "./useCreateFormStore";
import { OrderItem } from "ui/components/MultiStepForm";

export const INITIAL_STEP = "order_details";

export const steps = [
  "order_details",
  "product_selection",
  "delivery_details",
  "payment_details",
  "summary",
] as const;

type OrderFormStore = {
  client: Partial<Business> | undefined;
  orderItems: OrderItem[];
  setOrderItems: (items: OrderItem[]) => void;
  setCurrentClient: (client: Business) => void;
};

export const useOrderFormStore = useCreateFormStore<OrderFormStore>(
  INITIAL_STEP,
  steps,
  (set) => ({
    client: {},
    orderItems: [],
    setOrderItems: (items: OrderItem[]) => {
      set((state) => ({
        ...state,
        orderItems: items,
      }));
    },
    setCurrentClient: (client: Business) => {
      set((state) => ({
        ...state,
        client,
      }));
    },
  })
);
