import { create } from 'zustand';

type StepDirection = 'prev' | 'next';

type FormState = Record<string, any>;

type FormStore<T> = {
  currentStep: T;
  steps: readonly T[];
  goToStep: (direction: StepDirection) => void;
  updateStepByIndex: (stepIndex: number) => void;
  updateStepFormData: (formData: Record<string, any>) => void;
  formData: Record<string, any>;
};

export const createFormStore = <T extends string>(
  initialStep: T,
  steps: readonly T[]
) => {
  return create<FormStore<T>>((set) => ({
    currentStep: initialStep,
    formData: {},
    steps,
    goToStep: (direction: StepDirection) => {
      set((state: FormState) => {
        const currentIndex = steps.indexOf(state.currentStep);
        const nextStep =
          direction === 'next'
            ? steps[currentIndex + 1]
            : steps[currentIndex - 1];
        return nextStep ? { ...state, currentStep: nextStep } : state;
      });
    },
    updateStepByIndex: (stepIndex: number) => {
      set((state) => {
        const currentStep = steps[stepIndex];
        return currentStep ? { ...state, currentStep } : state;
      });
    },
    updateStepFormData: (formData: Record<string, any>) => {
      set((state) => ({
        ...state,
        formData: {
          ...state.formData,
          ...formData,
        },
      }));
    },
  }));
};
