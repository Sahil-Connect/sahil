import { create } from 'zustand';
import { INITIAL_STEP } from '../constants';

const steps = [
    "order_details",
    "product_selection",
    "delivery_details",
    "payment_details",
    "summary"
] as const;

export type StepDirection = "prev" | "next";

export type FormState = Record<string, any>;

export const useOrderFormStore = create((set) => ({
    currentStep: INITIAL_STEP,
    formData: {},
    steps,
    goToStep: (direction: StepDirection) => {
        set((state: FormState) => {
            const currentIndex = steps.indexOf(state.currentStep);
            if (currentIndex !== -1 && currentIndex <= steps.length - 1) {
                return ({
                    ...state,
                    currentStep: direction === "prev" ? steps[currentIndex - 1] : steps[currentIndex + 1]
                });
            }
            return ({
                ...state
            });
        });
    },
    updateStepByIndex: (stepIndex: number) => {

    },
    updateStepFormData: (formData: Record<string, any>) => {
        set((state: FormState) => {
          return ({
            ...state,
            formData: {
              ...state.formData,
              ...formData,
            }
          })
        });
      }
}));