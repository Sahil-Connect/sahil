import { create } from 'zustand';

const INITIAL_STEP = "Business Info";

export const useSupplierFormStore = create((set) => ({
  step: 1,
  currentStep: {
    label: INITIAL_STEP,
    id: 1
  },
  formData: {},
  steps: [
    {
      id: 1,
      label: "Business Info",
      path: "info",
      active: true,
    },
    {
      id: 2,
      label: "Contact Details",
      path: "contact",
      active: false,
    },
    {
      id: 3,
      label: "Preferences",
      path: "preferences",
      active: false,
    },
  ],
  nextStep: (currentStep = {}) => {
    // console.log(currentStep);
    set((state) => {
      const nextStep = state.steps.find(step => step.id === currentStep.id + 1);
      console.log(nextStep);
      return ({
        ...state,
        currentStep: {
          label: nextStep.label,
          id: nextStep.id
        }
      })
    });
  },
  prevStep: (currentStep = {}) => {
    console.log(currentStep);
    set((state) => {
      const nextStep = state.steps.find(step => step.id === currentStep.id - 1);
      return ({
        ...state,
        currentStep: {
          label: nextStep.label,
          id: nextStep.id
        }
      })
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