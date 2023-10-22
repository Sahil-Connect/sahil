import { create } from 'zustand';

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
    currentStep: "order_details",
    steps,
    updateStepByIndex: (stepIndex: number) => {

    },
    updateStepData: () => {

    }
}));