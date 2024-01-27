import { create } from "zustand";

type StepDirection = "prev" | "next";

type FormState = Record<string, any>;

type FormStore<T> = {
  currentStep: T;
  steps: readonly T[];
  goToStep: (direction: StepDirection) => void;
  updateStepByIndex: (stepIndex: number) => void;
  updateStepFormData: (formData: Record<string, any>) => void;
  formData: Record<string, number | string>;
};

// code review comments

export const useCreateFormStore = <T extends string>(
  initialStep: T, // why is this is a generic?
  steps: readonly T[] // can be a string!
) => {
  return create<FormStore<T>>((set) => ({
    currentStep: initialStep,
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
        const currentStep = steps[stepIndex]; // what if stepIndex is out of bounds?
        // also, stepIndex refers to the step we wanna go to but we wanna get the current step and our state should be the single source of truth.
        // what's gonna happen if stepIndex === 2 but state.currentStep === 1?
        // whom do you believe? State or user input?
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
};
