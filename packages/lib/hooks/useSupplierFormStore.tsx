export const INITIAL_STEP = "business_info";

import { useCreateFormStore } from "@sahil/lib";

const steps = [
  "business_info",
  "contact_details",
  "preferences",
  "preview",
] as const;

export const useSupplierFormStore = useCreateFormStore(INITIAL_STEP, steps);
