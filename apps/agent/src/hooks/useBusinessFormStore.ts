import { create } from 'zustand';
import { INITIAL_STEP, steps } from '@/Orders/constants';
export type StepDirection = "prev" | "next";

export type SahilBusinessPartner = Record<string, any>;

type OrderFormStore = {
    currentStep: typeof steps[number];
    steps: typeof steps;
    goToStep: (direction: StepDirection) => void;
    updateStepByIndex: (stepIndex: number) => void;
    updateStepFormData: (formData: Record<string, any>) => void;
    formData: Record<string, any>;
}

export const useBusinessFormStore = create<OrderFormStore>((set) => ({
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