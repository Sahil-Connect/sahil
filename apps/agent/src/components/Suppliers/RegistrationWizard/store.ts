import { create } from 'zustand'

export const useSupplierFormStore = create((set) => ({
  step: 1,
  moveForward: () => set((state) => ({ step: state.step + 1 })),
}))