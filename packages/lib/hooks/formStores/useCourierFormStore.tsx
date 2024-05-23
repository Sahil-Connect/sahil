import { INITIAL_STEP, steps } from "@sahil/features/Couriers/constants";
import { useCreateFormStore } from "@sahil/lib";

export const useCourierFormStore = useCreateFormStore(INITIAL_STEP, steps);
