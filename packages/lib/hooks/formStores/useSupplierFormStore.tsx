import { useCreateFormStore } from "./useCreateFormStore";

export const INITIAL_STEP = "business_info";

const steps = [
  "business_info",
  "contact_details",
  "preferences",
  "preview",
] as const;

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useSupplierFormStore = useCreateFormStore(INITIAL_STEP, steps);
