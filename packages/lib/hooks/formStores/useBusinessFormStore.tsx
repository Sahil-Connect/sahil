import { useCreateFormStore } from "./useCreateFormStore";

const INITIAL_STEP = "business_info";

const steps = [
  "business_info",
  "address_info",
  "preferences",
  "summary",
] as const;

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useBusinessFormStore = useCreateFormStore(INITIAL_STEP, steps);
