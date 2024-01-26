import { create } from "zustand";
export const INITIAL_STEP = "order_details";
export const steps = [
  "order_details",
  "product_selection",
  "delivery_details",
  "payment_details",
  "summary",
] as const;

import {
  FormDataState,
  OrderItem,
  StepDirection,
} from "ui/components/MultiStepForm";

export type SahilBusinessPartner = Record<string, any>;

type OrderFormStore = {
  client: SahilBusinessPartner;
  currentStep: (typeof steps)[number];
  steps: typeof steps;
  goToStep: (direction: StepDirection) => void;
  updateStepByIndex: (stepIndex: number) => void;
  updateStepFormData: (formData: FormDataState) => void;
  formData: FormDataState;
  orderItems: OrderItem[];
  setOrderItems: (items: OrderItem[]) => void;
  setCurrentClient: (client: SahilBusinessPartner) => void;
};

export const useOrderFormStore = create<OrderFormStore>((set) => ({
  client: {},
  currentStep: INITIAL_STEP,
  formData: {},
  steps,
  goToStep: (direction: StepDirection) => {
    set((state) => {
      const currentIndex = steps.indexOf(state.currentStep);
      if (currentIndex !== -1 && currentIndex <= steps.length - 1) {
        return {
          ...state,
          currentStep:
            direction === "prev"
              ? steps[currentIndex - 1]
              : steps[currentIndex + 1],
        };
      }
      return {
        ...state,
      };
    });
  },
  orderItems: [],
  setOrderItems: (items) => {
    set((state) => {
      return {
        ...state,
        orderItems: items,
      };
    });
  },
  updateStepByIndex: (stepIndex: number) => {
    set((state) => {
      const currentIndex = steps.indexOf(state.currentStep);
      if (currentIndex !== -1 && currentIndex <= steps.length - 1) {
        return {
          ...state,
          currentStep: steps[stepIndex],
        };
      }
      return {
        ...state,
      };
    });
  },
  updateStepFormData: (formData: Record<string, any>) => {
    set((state) => {
      return {
        ...state,
        formData: {
          ...state.formData,
          ...formData,
        },
      };
    });
  },
  setCurrentClient: (client) => {
    set((state) => {
      return {
        ...state,
        client,
      };
    });
  },
}));
