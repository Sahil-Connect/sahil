import { create } from 'zustand';

const INITIAL_STEP = "Business Info";

export const useSupplierFormStore = create((set) => ({
  step: 1,
  currentStep: {
    label: INITIAL_STEP,
    id: 1
  },
  data: {

  },
  steps: [
    {
      id: 1,
      label: "Business Info",
      path: "",
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
  gotToStep: (step = {}) => {
    set((state) => ({
      ...state, 
      currentStep: {
        label: step.label,
        id: step.id
      }
    }));
  },
  updateStepData: (data = {}) => {
    set((state) => {
      return ({
        ...state,
        data: {
          ...data
        }
      })
    })
  }
}))