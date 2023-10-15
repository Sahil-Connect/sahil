import { create } from 'zustand'

export const useSupplierFormStore = create((set) => ({
  step: 1,
  currenntStep: {
    label: ""
  },
  steps: [
    {
      id: 1,
      label: "Business Info",
      path: "?info",
      active: true
    },
    {
      id: 2,
      label: "Contact Details",
      path: "?contact",
      active: false
    },
    {
      id: 3,
      label: "Preferences",
      path: "?preferences",
      active: false
    },
  ],
  nextStep: () => set((state) => ({ ...state, currentStep: {

  } })),
}))