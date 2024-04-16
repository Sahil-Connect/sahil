import { create } from "zustand";
export const INITIAL_STEP = "business_info";

type StepDirection = "prev" | "next";

type FormState = Record<string, any>;

const steps = [
  "business_info",
  "contact_details",
  "preferences",
  "preview",
] as const;

type FormStore = {
  currentStep: (typeof steps)[number];
  steps: typeof steps;
  goToStep: (direction: StepDirection) => void;
  updateStepByIndex: (stepIndex: number) => void;
  updateStepFormData: (formData: Record<string, any>) => void;
  formData: Record<string, number | string>;
};

export const useSupplierFormStore = create<FormStore>((set) => ({
  currentStep: INITIAL_STEP,
  formData: {},
  steps,
  goToStep: (direction: StepDirection) =>
    set((state: FormState) => {
      const currentIndex = steps.indexOf(state.currentStep);
      const nextStep =
        direction === "next"
          ? steps[currentIndex + 1]
          : steps[currentIndex - 1];
      return nextStep ? { ...state, currentStep: nextStep } : state;
    }),
  updateStepByIndex: (stepIndex: number) =>
    set((state) => {
      const currentStep = steps[stepIndex];
      return currentStep ? { ...state, currentStep } : state;
    }),
  updateStepFormData: (formData: Record<string, any>) =>
    set((state) => ({
      ...state,
      formData: {
        ...state.formData,
        ...formData,
      },
    })),
}));
