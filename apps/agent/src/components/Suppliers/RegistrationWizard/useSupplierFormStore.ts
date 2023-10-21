import exp from 'constants';
import { create } from 'zustand';
import { INITIAL_STEP } from '../constants';

const steps = [
  "business_info",
  "contact_details",
  "preferences",
] as const;

export type StepDirection = "prev" | "next";

export type FormState = Record<string, any>;

export const useSupplierFormStore = create((set) => ({
  currentStep: INITIAL_STEP,
  formData: {},
  steps,
  goToStep: (currentStep: typeof steps[number], direction: StepDirection) => {
    set((state: FormState) => {
      const currentIndex = steps.indexOf(currentStep || state.currentStep);
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
  updateStepData: (formData: Record<string, any>) => {
    set((state: FormState) => {
      return ({
        ...state,
        formData: {
          ...formData
        }
      })
    })
  }
}))