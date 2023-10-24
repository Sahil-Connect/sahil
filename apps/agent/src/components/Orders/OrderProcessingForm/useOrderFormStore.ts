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

type OrderFormStore = {
    currentStep: typeof steps[number];
    steps: typeof steps;
    goToStep: (direction: StepDirection) => void;
    updateStepByIndex: (stepIndex: number) => void;
    updateStepFormData: (formData: any) => void;
    formData: any;
}

export const useOrderFormStore = create<OrderFormStore>((set) => ({
    currentStep: INITIAL_STEP,
    formData: {},
    steps,
    goToStep: (direction: StepDirection) => {
        set((state) => {
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
        set((state) => {
            const currentIndex = steps.indexOf(state.currentStep);
            if (currentIndex !== -1 && currentIndex <= steps.length - 1) {
                return ({
                    ...state,
                    currentStep: steps[stepIndex]
                });
            }
            return ({
                ...state
            });
        });
    },
    updateStepFormData: (formData: Record<string, any>) => {
        set((state) => {
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