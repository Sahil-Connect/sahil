import { create } from 'zustand';
import { INITIAL_STEP } from '../components/Suppliers/constants';

const steps = [
  "business_info",
  "contact_details",
  "preferences",
  "preview"
] as const;

export type StepDirection = "prev" | "next";

export type FormState = Record<string, any>;

type SupplierFormStore = {
  currentStep: typeof steps[number];
  steps: typeof steps;
  goToStep: (direction: StepDirection) => void;
  updateStepByIndex: (stepIndex: number) => void;
  updateStepFormData: (formData: any) => void;
  formData: any;
};

export const useSupplierFormStore = create<SupplierFormStore>((set) => ({
  currentStep: INITIAL_STEP,
  formData: {
    name: "",
    contactName: "",
    description: ""
  },
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
}))