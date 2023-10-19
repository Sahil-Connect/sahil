import { create } from 'zustand';

const INITIAL_STEP = "business_info";

const steps = [
  "business_info",
  "contact_details",
  "preferences",
] as const;

const getNextStep = () => {

}

export const useSupplierFormStore = create((set) => ({
  currentStep: INITIAL_STEP,
  formData: {},
  steps,
  nextStep: (currentStep: typeof steps[number]) => {
    console.log("yerrrr");
    set((state) => {
      const currentIndex = steps.indexOf(currentStep || state.currentStep);
      if (currentIndex !== -1 && currentIndex < steps.length - 1) {
        return ({
          ...state,
          currentStep: steps[currentIndex + 1]
        });
      }
      return ({
        ...state
      });
    });
  },
  prevStep: (currentStep: typeof steps[number]) => {
    set((state) => {
      const currentIndex = steps.indexOf(currentStep || state.currentStep);
      if (currentIndex !== -1 && currentIndex < steps.length - 1) {
        return ({
          ...state,
          currentStep: steps[currentIndex - 1]
        });
      }
      return ({
        ...state
      });
    });
  },
  updateStepData: (formData = {}) => {
    set((state) => {
      return ({
        ...state,
        formData: {
          ...formData
        }
      })
    })
  }
}))