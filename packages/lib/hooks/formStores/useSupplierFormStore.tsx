import { useCreateFormStore } from "./useCreateFormStore";

export const INITIAL_STEP = "business_info";

const steps = [
  "business_info",
  "contact_details",
  "preferences",
  "preview",
] as const;

export const useSupplierFormStore = useCreateFormStore(INITIAL_STEP, steps);
